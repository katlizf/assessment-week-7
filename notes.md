|    ARRAYS      |  FUNCTIONS     | TIMING RESULT |
|tinyArray       |doublerAppend   |  87.4 μs      |
|                |doublerInsert   |  34.3 μs      |
|                |                |               |
|smallArray      |doublerAppend   |  102.1 μs     |
|                |doublerInsert   |  49.2 μs      |
|                |                |               |
|mediumArray     |doublerAppend   |  143.7 μs     |
|                |doublerInsert   |  176 μs       |
|                |                |               |
|largeArray      |doublerAppend   |  524.3 μs     |
|                |doublerInsert   |  9.0053 ms    |
|                |                |               |
|extraLargeArray |doublerAppend   |  3.422 ms     |
|                |doublerInsert   |  870.8131 ms  |


As the array increases in size so does the time to run each function. The doublerAppend function scales better because as the array size increases, the result time increases at a smaller rate than the doublerInsert function. This is because append adds to the end of an array while insert copies an array and then pushes to an array causing insert to perform the these copy/push steps increasingly more as the param array increases in size.

append = O(n)
insert = O(n^2)