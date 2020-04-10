//splice()를 통해 제거와 추가를 할 수 있다. 첫번째 인자로는 시작인덱스. 두번째인자로는 삭제할 크기, 세번째인자로는 추가할 신규 항목

var array = [1,2,3,4]
array.splice()
console.log(array) 
console.log(array.splice(1,2))  //1번위치부터 2번위치까지 반환

var array1=[1,2,3,4]
console.log(array1.splice(1,2,5,6,7));
console.log(array1);


