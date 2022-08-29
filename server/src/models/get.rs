use axum::{
  extract::{Extension, Path, Query},
  Json,
};
use serde::{Deserialize, Serialize};
use sqlx::{postgres::PgPool, Row};
use std::collections::HashMap;

#[derive(Serialize)]
pub struct Test {
  id: i32,
  title: String,
  description: String,
}

#[derive(Deserialize)]
pub struct GetIdPath {
  id: i32,
}

pub async fn get_all(Extension(pool): Extension<PgPool>) -> Json<Vec<Test>> {
  let result = sqlx::query("select * from users order by id")
    .fetch_all(&pool)
    .await;

  let mut v = vec![];

  match result {
    Ok(rows) => {
      for row in rows {
        v.push(Test {
          id: row.get(0),
          title: row.get(1),
          description: row.get(2),
        });
      }
      Json(v)
    }
    Err(err) => {
      tracing::error!("Failed to read about data {:?}", err);
      Json(v)
    }
  }
}

pub async fn get_find_by_id(
  Extension(pool): Extension<PgPool>,
  Path(path): Path<GetIdPath>,
) -> Json<Vec<Test>> {
  let result = sqlx::query("select * from users WHERE id = $1")
    .bind(path.id)
    .fetch_all(&pool)
    .await;

  let mut v = vec![];

  match result {
    Ok(rows) => {
      for row in rows {
        v.push(Test {
          id: row.get(0),
          title: row.get(1),
          description: row.get(2),
        });
      }
      Json(v)
    }
    Err(err) => {
      tracing::error!("Failed to read about data {:?}", err);
      Json(v)
    }
  }
}

pub async fn get_find_by_title(
  Extension(pool): Extension<PgPool>,
  Query(params): Query<HashMap<String, String>>,
) -> Json<Vec<Test>> {
  let result = sqlx::query("select * from users WHERE title = $1")
    .bind(params.get("title"))
    .fetch_all(&pool)
    .await;

  let mut v = vec![];

  match result {
    Ok(rows) => {
      for row in rows {
        v.push(Test {
          id: row.get(0),
          title: row.get(1),
          description: row.get(2),
        });
      }
      Json(v)
    }
    Err(err) => {
      tracing::error!("Failed to read about data {:?}", err);
      Json(v)
    }
  }
}
