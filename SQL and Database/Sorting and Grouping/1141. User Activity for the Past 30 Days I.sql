# Write your MySQL query statement below
Select
    activity_date as day,
    Count(Distinct user_id) as active_users
from
    activity
where
    activity_date between '2019-06-28' and '2019-07-27'
Group By
    day