

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


COPY products(product_name, details, colorway, price, sizes, stock, media, style, moreBenefits)
FROM '/home/ivan/Documents/hackreactor/hrla41-sdc/FrontPageMedia---Trent/database2/productData.csv'
DELIMITER ','
CSV HEADER;

COPY products(product_name, details, colorway, price, sizes, stock, media, style, moreBenefits)
FROM '/home/ec2-user/productData.csv'
DELIMITER ','
CSV HEADER;



