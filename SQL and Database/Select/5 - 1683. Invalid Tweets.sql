# Write your MySQL query statement below
Select
    tweet_id
From
    tweets
Where
    char_length(content) > 15