class Solution:
    def smallestPalindrome(self, s: str) -> str:
        # Step 1: Count the frequency of each character
        freq = {}
        for ch in s:
            freq[ch] = freq.get(ch, 0) + 1

        # Step 2: Check how many characters have an odd frequency
        odd_count = 0
        mid_char = ''
        half = []

        for ch, count in freq.items():
            
            if count % 2 != 0:
                odd_count += 1
                mid_char = ch

            # Add half the characters to 'half'
            half.append(ch * (count // 2))

        # Step 3: If more than one character has an odd frequency, it's impossible to form a palindrome
        if odd_count > 1:
            return ""

        # Step 4: Sort the half string for lexicographical order
        half = ''.join(sorted(half))

        # Step 5: Construct the final palindrome
        return half + mid_char + half[::-1]