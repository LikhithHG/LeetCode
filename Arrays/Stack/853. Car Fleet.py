class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = sorted(zip(position, speed))
        times = [float(target - p) / s for p, s in cars]
        ans = 0

        while len(times) > 1:
            lead = times.pop()

            # if lead arrives sooner, it can't be caught
            if lead < times[-1]:
                ans += 1

            # else, fleet arrives at later time 'lead'
            else: 
                times[-1] = lead

        # remaining car is fleet (if it exists)
        return ans + bool(times)