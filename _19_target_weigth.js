//배열속의 어떤수를 더해서 weight목표수가되는지 위치찾기
a = [1,2,3,4,5]

function findSum(arr, weight){
    for (var i=0, arrLength = arr.length; i < arrLength; i++){
        for(var j=i+1; j<arrLength; j++){
            if(arr[i]+arr[j] == weight){
                return [i,j];
            }
        }
    }
    return -1
}
console.log(findSum(a, 9))