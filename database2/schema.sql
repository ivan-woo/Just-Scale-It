

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  product_name varchar(50),
  favorite varchar(10) not null DEFAULT false,
  details TEXT not null,
  style varchar(20) not null,
  moreBenefits TEXT not null,
  colorway varchar(50) not null,
  price NUMERIC not null
);


CREATE TABLE images (
  image_id SERIAL PRIMARY KEY,
  image_url TEXT not null,
  product_id INTEGER not null,
  CONSTRAINT fk_products
    FOREIGN KEY(product_id)
      REFERENCES products(product_id)
);

CREATE TABLE sizes_stock (
  size_id SERIAL PRIMARY KEY,
  size INTEGER not null,
  stock INTEGER not null,
  product_id INTEGER not null,
  CONSTRAINT fk_products
    FOREIGN KEY(product_id)
      REFERENCES products(product_id)
);

COPY products(product_name, details, colorway, style, moreBenefits, price)
FROM '/home/ivan/Documents/hackreactor/hrla41-sdc/FrontPageMedia---Trent/productData.csv'
DELIMITER ','
CSV HEADER;

