//matrix 배열 생성

function Matrix(rows, columns){
    var jaggedarray = new Array(rows);
    for(var i=0; i<columns; i+=1){
        jaggedarray[i] = new Array(rows);
    }
    return jaggedarray;
}
console.log(Matrix(3,3,))  //아직 아무것도 안넣었으므로 비어있다

var cube3x3 = [[1,2,3],[4,5,6],[7,8,9]];
