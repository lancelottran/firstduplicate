/**

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

Guaranteed constraints: 1 ≤ a.length ≤ 105, 1 ≤ a[i] ≤ a.length.

[output] integer

The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.


Because 1 ≤ a.length ≤ 105 and 1 ≤ a[i] ≤ a.length
so a can not have a negative number
We will check value at a[i-1] if it is > 0
mean it is our first visit and we will make it negative
If a[i - 1] < 0 mean it already visited and we should
return that value
**/

function firstDuplicate(a) {
    for(var i = 0; i < a.length; i++){
        var temp = a[i];
        
        if(a[Math.abs(temp) - 1] > 0)
            a[Math.abs(temp) - 1] = -1 * a[Math.abs(temp) - 1];
        else
            return Math.abs(temp);
    }
    
    return -1;
}
