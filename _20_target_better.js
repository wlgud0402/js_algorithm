//더 잘찾기

function findSumBetter(arr, weight){
    var hashtable ={};

    for(var i=0, arrLength=arr.length; i<arrLength; i++){
        var currentElement = arr[i],
            difference = weight - currentElement;

            //맞는수가 존재하는지 확인
            if(hashtable[currentElement] != undefined){
                return [i, hashtable[weight-currentElement]];
            } else {
                //위치저장
                hashtable[difference] = i;
            }
    }
        return -1;
}

a = [1,2,3,4,5]
console.log(findSumBetter(a, 9))