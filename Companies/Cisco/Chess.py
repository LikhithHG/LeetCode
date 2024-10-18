'''
write an algorithm to print the chessboard pattern b for black squares and w for white squares
'''

def generate_chessboard():
    pattern = []
    for row in range(8):
        line = []
        for col in range(8):
            if (row + col) % 2 == 0:
                line.append('w')
            else:
                line.append('b')
        pattern.append(' '.join(line))
    return '\n'.join(pattern)

def main():
    chessboard_pattern = generate_chessboard()
    print(chessboard_pattern)

if __name__ == "__main__":
    main()
