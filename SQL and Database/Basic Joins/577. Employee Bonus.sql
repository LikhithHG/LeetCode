# Write your MySQL query statement below
Select
    Employee.name, Bonus.bonus
From
    Employee
Left Join
    Bonus
On  
    Employee.empid = Bonus.empid
Where
    bonus < 1000 Or bonus is Null