class Solution:
    def getCollisionTimes(self, cars: List[List[int]]) -> List[float]:
        result = []
        
        # cars that might collide with current car
        stack = []
        
        for position, speed in cars[::-1]:
            # if current car speed is less than the head of the stack then there won't be a collision
            # or if c1 collides with c2 after c2 collides with c3, we can ignore c2 and find collision time of c1 and c3 instead
            # (where c1 is current car, c2 is the head of the stack and c3 is the car that c2 will collide with)
            # (if we have [[x1, s1], [x2, s2]], then collision time is (x2 - x1) / (s1 - s2))
            while stack and (speed <= stack[-1][1] or (stack[-1][0] - position) / (speed - stack[-1][1]) >= stack[-1][2]):
                stack.pop()
            
            # if stack is empty, then current car will never collide with the next car
            if not stack:
                stack.append((position, speed, math.inf))
                result.append(-1)
            
            # find collision time and add the car to the stack
            else:
                collideTime = (stack[-1][0] - position) / (speed - stack[-1][1])
                stack.append((position, speed, collideTime))
                result.append(collideTime)
                
        result.reverse()
        return result