int firstDuplicate(arr_integer a) {
    for(int i = 0; i < a.size; i++){
        
        if(a.arr[abs(a.arr[i]) - 1] > 0)
            a.arr[abs(a.arr[i]) - 1] = -1 * a.arr[abs(a.arr[i]) - 1];
        else
            return abs(a.arr[i]);
    }
    
    return -1;
}
