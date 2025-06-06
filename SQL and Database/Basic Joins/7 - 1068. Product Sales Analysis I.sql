# Write your MySQL query statement below
Select 
    p.product_name, s.year, s.price
From
    sales s
Join
    product p
on
    s.product_id = p.product_id