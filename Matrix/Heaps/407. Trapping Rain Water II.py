class Solution:
    def trapRainWater(self, heightMap: List[List[int]]) -> int:
        def isValidCell(row, col, numOfRows, numOfCols):
            return 0 <= row < numOfRows and 0 <= col < numOfCols
        
        # Direction arrays
        dRow = [0, 0, -1, 1]
        dCol = [-1, 1, 0, 0]

        numRows = len(heightMap)
        numCols = len(heightMap[0])

        visited = [[False] * numCols for _ in range(numRows)]

        # Priority queue (min-heap) to process boundary cells in increasing height order
        boundary = []

        # Add the first and last column cells to the boundary and mark them as visited
        for i in range(numRows):
            heapq.heappush(boundary, (heightMap[i][0], i, 0))
            heapq.heappush(
                boundary, (heightMap[i][numCols - 1], i, numCols - 1),
            )
            visited[i][0] = visited[i][numCols - 1] = True

        # Add the first and last row cells to the boundary and mark them as visited
        for i in range(numCols):
            heapq.heappush(boundary, (heightMap[0][i], 0, i))
            heapq.heappush(
                boundary, (heightMap[numRows - 1][i], numRows - 1, i),
            )
            visited[0][i] = visited[numRows - 1][i] = True
        
        # Initialize the total water volume to 0
        totalWaterVolume = 0

        # Process cells in the boundary (min-heap will always pop the smallest height)
        while boundary:
            # Pop the cell with the smallest height from the boundary
            minBoundaryHeight, currentRow, currentCol = heapq.heappop(boundary)

            # Explore all 4 neighboring cells
            for direction in range(4):
                # Calculate the row and column of the neighbor
                neighborRow = currentRow + dRow[direction]
                neighborCol = currentCol + dCol[direction]

                # Check if the neighbor is within the grid bounds and not yet visited
                if (isValidCell(neighborRow, neighborCol, numRows, numCols)
                    and not visited[neighborRow][neighborCol]
                ):
                    # Get the height of the neighbor cell
                    neighborHeight = heightMap[neighborRow][neighborCol]

                    # If the neighbor's height is less than the current boundary height, water can be trapped
                    if neighborHeight < minBoundaryHeight:
                        # Add the trapped water volume
                        totalWaterVolume += (
                            minBoundaryHeight - neighborHeight
                        )

                    # Push the neighbor into the boundary with updated height (to prevent water leakage)
                    heapq.heappush(
                        boundary,(
                            max(neighborHeight, minBoundaryHeight),
                            neighborRow,
                            neighborCol,
                        ),
                    )
                    visited[neighborRow][neighborCol] = True

        # Return the total amount of trapped water
        return totalWaterVolume