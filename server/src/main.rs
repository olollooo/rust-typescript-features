use axum::{
  extract::Extension,
  http::StatusCode,
  routing::{get, get_service},
  Router,
};
use dotenv::dotenv;
use sqlx::{Pool, Postgres};
use std::net::SocketAddr;
use tower_http::{cors::Any, cors::CorsLayer, services::ServeDir};

mod models;
use models::{delete, get, post, put};
mod public;
use public::log;

#[tokio::main]
async fn main() {
  dotenv().ok();

  log::create_logger().await;

  let pool: Pool<Postgres> = public::db::db_pool_connection().await;

  let cors = CorsLayer::new().allow_origin(Any);

  let app = Router::new()
    .route("/api", get(|| async { "API: /api" }))
    .fallback(
      get_service(ServeDir::new("./client/dist")).handle_error(|_| async move {
        (StatusCode::INTERNAL_SERVER_ERROR, "internal server error")
      }),
    )
    .route("/users", get(get::get_all).post(post::post_add_value))
    .route(
      "/users/:id",
      get(get::get_find_by_id)
        .put(put::put_update_value)
        .delete(delete::delete_find_by_id),
    )
    .route("/users/title", get(get::get_find_by_title))
    .layer(cors)
    .layer(Extension(pool));

  let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
  tracing::info!("listening on {}", addr);
  axum::Server::bind(&addr)
    .serve(app.into_make_service())
    .await
    .unwrap();
}
