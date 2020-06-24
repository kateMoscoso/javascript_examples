function diagonalDifference(arr) {
    // Write your code here
    
    let left_to_right_diagonal_sum = 0
    let right_to_left_diagonal_sum = 0
    for(let i = 0 ; i< arr.length;  i++){
        left_to_right_diagonal_sum+=arr[i][i]
        for(let j = 0 ; j< arr.length;  j++){
            if((j+i) == arr.length-1){
                right_to_left_diagonal_sum+=arr[i][j]
            }
        }
    }
    return Math.abs(left_to_right_diagonal_sum - right_to_left_diagonal_sum)
}