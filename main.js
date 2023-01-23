// Homework 5

function pos(arr){
    return arr.reduce((ret_arr, number, index) => {
        if (number >= 0) ret_arr.push(index)
        return ret_arr
    }, [])

}
console.log(pos([2,3,4,-1,-2]))