class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:

        #if the length of hand is not divisible by grp size then return false
        if len(hand) % groupSize != 0:
            return False

        count = Counter(hand)

        for card in hand:
            start_card = card

            #find the start of the potential start 
            while count[start_card - 1]:
                start_card -= 1
            
            #process the sequence starting from start_card
            while start_card <= card:
                while count[start_card]:
                    #check if we can form consecutive sequence of group size
                    for next_card in range(start_card, start_card + groupSize):
                        if not count[next_card]:
                            return False
                        count[next_card] -= 1
                
                start_card += 1
                
    
        return True