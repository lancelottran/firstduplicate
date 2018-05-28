/**
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
