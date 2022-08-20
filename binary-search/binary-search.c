#include <stdio.h>
//the approach I use here is recursive 
//extra assumptions were made such as knowledge of first and last index
//this way the indexes markers do not have to be initialized at the beginnig of the function

int binarySearch(int arr[], int target, int l, int r){
    if (l <= r){ //base case
        int middle = (l+r)/2; //find the middle
        if (target == arr[middle]){ //self explanatory
            printf("Element was found at index %i.\n", middle);
            return 0;
        }
        else if(target < arr[middle]) //omit the right half by modifying the index markers
            return binarySearch(arr, target, l, middle - 2);
        else
            return binarySearch(arr, target, middle+1, r); //omit the left half 
    }
    
    printf("Element was not found. \n"); //first condition wasn't met meaning the left marker exceeded the right one which makes arr[midddle] = null
    return -1;
}

int main(void){ //test
    int arr[] = {0, 1, 3, 5, 6, 7, 10};
    binarySearch(arr, 7, 0, 6);
    binarySearch(arr, 2, 0, 6);

}
