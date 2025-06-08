# Write your MySQL query statement below
Select
    p.product_id,
    IfNull(Round(Sum(p.price * u.units) / Sum(u.units), 2), 0) as average_price
from
    prices as p
Left Join
    UnitsSold as u
On
    p.product_id = u.product_id 
    And u.purchase_date between p.start_date and p.end_date
Group By
    p.product_id