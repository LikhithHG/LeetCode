# Write your MySQL query statement below
Select
    customer_id,
    Count(visit_id) As count_no_trans
from
    visits
where
    visit_id Not in (
        Select 
            visit_id
        from 
            Transactions
    )
group by
    customer_id