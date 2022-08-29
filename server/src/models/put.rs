use axum::{
  extract::{Extension, Path},
  Json,
};
use serde::Deserialize;
use serde_json::{json, Value};
use sqlx::postgres::PgPool;

#[derive(Deserialize)]
pub struct GetIdPath {
  id: i32,
}

pub async fn put_update_value(
  Extension(pool): Extension<PgPool>,
  Path(path): Path<GetIdPath>,
  body_json: Json<Value>,
) -> Json<Value> {
  sqlx::query("UPDATE users SET (title, description) = ($1, $2) WHERE id = $3")
    .bind(body_json.0.get("title"))
    .bind(body_json.0.get("description"))
    .bind(path.id)
    .fetch_all(&pool)
    .await
    .expect("sql error");

  Json(
    json!({ "id": path.id, "title": body_json.0.get("title"), "description": body_json.0.get("description") }),
  )
}
