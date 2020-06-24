function diagonalDifference(arr) {
    // Write your code here
    let left_to_right_diagonal_sum = 0
    let right_to_left_diagonal_sum = 0
    let column = arr.length - 1;
    let sum = 0
    for(let i = 0 ; i< arr.length;  i++){
        left_to_right_diagonal_sum += arr[i][i]
        right_to_left_diagonal_sum += arr[i][column--]
    }
    return Math.abs(left_to_right_diagonal_sum - right_to_left_diagonal_sum)
}

function diagonalDifference2(arr) {
    // Write your code here
    let sum = 0
    let column = arr.length - 1;
    for(let i = 0 ; i< arr.length;  i++){
        sum += arr[i][i] - arr[i][column--]
    }
    return Math.abs(sum)
}
