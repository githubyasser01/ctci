const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //case 1 ODD NO. of VALUES
const values_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //case 2 EVEN 


const binary = (target, arr) => {
    let lower = 0; //here we set initials markers for U&L bounds.
    let upper = arr.length - 1; 

    while (lower <= upper){
        let middle = Math.floor((upper+lower)/2); //truncate to get a middle marker
        if (target === arr[middle]){
            console.log("Element was found at index",middle);
            return 0; //self explanatory
        }
        else if (target < arr[middle]){ //since array is sorted target should be on left here
            upper = middle - 1; //set a new U marker to omit the right half 
        }
        else{
            lower = middle + 1; //set a new L marker to omit the left half
        }
    }


//If we reach this point it means that we kept omitting halves until we were down to one number and still we did not return the middle which at the last iteration was equal to this one number.
    console.log("NOT FOUND"); 
    return -1;
}


//TESTS
binary(2, values);
binary(11, values_2);
binary(1, values_2);

