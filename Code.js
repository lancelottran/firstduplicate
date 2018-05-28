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
