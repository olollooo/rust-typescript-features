use sqlx::{postgres::PgPoolOptions, Pool, Postgres};

pub async fn db_pool_connection() -> Pool<Postgres> {
  let db_connection_str = std::env::var("DATABASE_URL").expect("Error Database URL");

  let pool = PgPoolOptions::new()
    .max_connections(5)
    .connect(&db_connection_str)
    .await
    .expect("can't connect to database");

  pool
}
