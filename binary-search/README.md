An algorithm that searches for an integer through a sorted array. 

Assumptions:- 
    1- Array is sorted in ascending order.

Approach 1:- 
    Looping through the array element by element until we hit our target.
    Cons:- Might take an N number of steps where N is less than or equal the length of the array. 

Approach 2 (Div and Conquer):- 
    - Find the middle.
    - Compare target to middle.
    - Omit the half the target is NOT on.  
    - Compare target to middle. 
    - Do the same until you're down to 1 number.

One way to split an array is to set an upper and lower bound markers to mark the slice of the array you want to loop over next. The middle marker should be rounded up or down to the nearest integer or simply truncated whatever is more convenient relative to the language used.
