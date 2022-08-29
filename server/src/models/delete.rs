use axum::{
  extract::{Extension, Path},
  Json,
};
use serde::Deserialize;
use serde_json::{json, Value};
use sqlx::postgres::PgPool;

#[derive(Deserialize)]
pub struct DeleteIdPath {
  id: i32,
}

pub async fn delete_find_by_id(
  Extension(pool): Extension<PgPool>,
  Path(path): Path<DeleteIdPath>,
) -> Json<Value> {
  sqlx::query("DELETE FROM users WHERE id = $1;")
    .bind(path.id)
    .fetch_all(&pool)
    .await
    .expect("sql error");

  Json(json!({ "id": path.id }))
}
