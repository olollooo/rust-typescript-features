use axum::{extract::Extension, Json};
use serde_json::{json, Value};
use sqlx::postgres::PgPool;

pub async fn post_add_value(
  Extension(pool): Extension<PgPool>,
  body_json: Json<Value>,
) -> Json<Value> {
  //Json<Value> {
  let mut transaction = pool.begin().await.expect("Transaction Error");
  sqlx::query("INSERT INTO users (title, description) VALUES ($1, $2);")
    .bind(body_json.0.get("title"))
    .bind(body_json.0.get("description"))
    .fetch_all(&mut transaction)
    .await
    .expect("sql error");

  transaction.commit().await.expect("Transaction Error");
  Json(json!({ "title": body_json.0.get("title"), "description": body_json.0.get("description") }))
}
