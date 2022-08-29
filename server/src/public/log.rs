use std::fs::File;
use tracing_subscriber::{
  fmt::{self, writer::MakeWriterExt},
  layer::SubscriberExt,
};

pub async fn create_logger() {
  let system_log = File::create("/workspace/server/log/system.md").unwrap();
  let user_log = File::create("/workspace/server/log/user.md").unwrap();

  let subscriber = tracing_subscriber::registry()
    .with(
      fmt::Layer::new()
        .with_writer(system_log.with_max_level(tracing::Level::TRACE))
        .with_ansi(false)
        .json(),
    )
    .with(
      fmt::Layer::new()
        .with_writer(user_log.with_max_level(tracing::Level::INFO))
        .with_ansi(false),
    );

  tracing::subscriber::set_global_default(subscriber).expect("Unable to set a global subscriber");
}

// tracing_subscriber::registry()
//   .with(tracing_subscriber::EnvFilter::new(
//     std::env::var("RUST_LOG").unwrap_or_else(|_| "example_tokio_postgres=debug".into()),
//   ))
//   .with(tracing_subscriber::fmt::layer())
//   .init();
