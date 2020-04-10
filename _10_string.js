//특정 문자열 존재 확인

function existsInString(stringValue, search_word){
    return stringValue.indexOf(search_word) !== -1;
}

console.log(existsInString('red','r'));
console.log(existsInString('red','b'));
