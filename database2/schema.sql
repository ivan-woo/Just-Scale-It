

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  product_name varchar(100),
  favorite varchar(10) not null DEFAULT false,
  details TEXT not null,
  style varchar(100),
  moreBenefits TEXT not null,
  colorway varchar(200) not null,
  price NUMERIC not null,
  media TEXT[],
  sizes NUMERIC[],
  stock INTEGER[]
);


-- CREATE TABLE images (
--   image_id SERIAL PRIMARY KEY,
--   image_url TEXT not null,
--   product_id INTEGER not null,
--   CONSTRAINT fk_products
--     FOREIGN KEY(product_id)
--       REFERENCES products(product_id)
-- );

-- CREATE TABLE sizes_stock (
--   size_id SERIAL PRIMARY KEY,
--   size INTEGER not null,
--   stock INTEGER not null,
--   product_id INTEGER not null,
--   CONSTRAINT fk_products
--     FOREIGN KEY(product_id)
--       REFERENCES products(product_id)
-- );

COPY products(product_name, details, colorway, price, sizes, stock, media, style, moreBenefits)
FROM '/home/ivan/Documents/hackreactor/hrla41-sdc/FrontPageMedia---Trent/database2/productData.csv'
DELIMITER ','
CSV HEADER;

COPY products(product_name, details, colorway, price, sizes, stock, media, style, moreBenefits)
FROM '/home/ec2-user/productData.csv'
DELIMITER ','
CSV HEADER;

-- COPY images(image_url, product_id)
-- FROM '/home/ivan/Documents/hackreactor/hrla41-sdc/FrontPageMedia---Trent/database2/images.csv'
-- DELIMITER ','
-- CSV HEADER;

