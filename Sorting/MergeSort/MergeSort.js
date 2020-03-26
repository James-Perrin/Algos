let arr = [];
let min_index;
let temp;   
let i = 0;
let num;
let bool = true;

function setup () {
    createCanvas(700, 500);
    arr = new Array(width);
    for(let i=0; i<width+1; i++) {
        arr[i] = random(height);
    }
}

function draw () {
    background(0);
    stroke(255);
    for (let x = 0; x < arr.length; x++) {
        stroke(235);
        line(x, height, x, height - arr[x]);
    }
    // sort(arr, 0, arr.length-1);
}

void sort(arr, l, r) 
{ 
    if (l < r) 
    { 
        // Find the middle point 
        let m = (l+r)/2; 

        // Sort first and second halves 
        sort(arr, l, m); 

        sort(arr , m+1, r); 
        // Merge the sorted halves 
        merge(arr, l, m, r); 
    } 
} 

function merge() {
    let n1 = m - l + 1; 
    let n2 = r - m; 

    /* Create temp arrays */
    let L = [n1]; 
    let R = [n2]; 

    /*Copy data to temp arrays*/
    for (let i=0; i<n1; ++i) 
        L[i] = arr[l + i]; 
    for (let j=0; j<n2; ++j) 
        R[j] = arr[m + 1+ j]; 


    /* Merge the temp arrays */

    // Initial indexes of first and second subarrays 
    let i = 0, j = 0; 

    // Initial index of merged subarry array 
    let k = l; 
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 

    /* Copy remaining elements of L[] if any */
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 

    /* Copy remaining elements of R[] if any */
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
}