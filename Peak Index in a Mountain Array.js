var peakIndexInMountainArray = function(arr) {
    low = 0;
    high = arr.length-1;
    while(low<=high){
        mid=Math.ceil((low+high)/2);
        midElement=arr[mid];
        right = arr[mid+1];
        left = arr[mid-1];
        if(midElement>right && midElement>left) return mid
        if(midElement<right && midElement>left) low = mid+1
        if(midElement>right && midElement<left) high = mid-1
    }
};
