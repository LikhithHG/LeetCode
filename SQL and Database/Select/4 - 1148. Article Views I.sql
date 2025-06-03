# Write your MySQL query statement below
Select 
    distinct author_id as ID
From
    views
Where 
    author_id = viewer_id
Order By
    ID