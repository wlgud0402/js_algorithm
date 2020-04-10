//SCOPE

//hoisting
function scope1(){
    var top = "top";
    var bottom;
    bottom = "bottom"

    console.log(bottom)
}
scope1(); //오류발생하지 않고 "bottom" 을 출력함

//let을 이용한 선언: 블록범위 >> 블록 밖에서는 실행 x
function scope3(print){
    if(print){
        let insideIf = '12';
    }
    console.log(insideIf);
}
scope3(true) //''를 출력함 let으로 선언한 insideIf는 그 함수 블록 내에서만 사용할 수 있기 때문

