//앞뒤로 뒤집어도 같은 문자열 찾기

function sameStr(word){
    return sameStrHelper(word, 0, word.length-1);
}

function sameStrHelper(word, beginIndex, endIndex){
    if(beginIndex >= endIndex){
        return true;
    }
    if(word.charAt(beginIndex) != word.charAt(endIndex)){
        return false;
    }else {
        return sameStrHelper(word, beginIndex+1, endIndex-1);
    }
}

console.log(sameStr('deified'))
console.log(sameStr('testset'))
console.log(sameStr('History'))