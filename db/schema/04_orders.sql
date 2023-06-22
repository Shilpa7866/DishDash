DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  created_at TIMESTAMP,
  estimated_time VARCHAR(255) NOT NULL,
  ready_at TIMESTAMP,
  picked_up_at TIMESTAMP,
  total_price INTEGER NOT NULL DEFAULT 0
);
