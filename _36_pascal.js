//파스칼삼각형
function pascal(row, col){
    if(col==0){
        return 1;
    }else if(row==0){
        return 0;
    }else {
        return pascal(row-1, col) + pascal(row-1, col-1)
    }
}

console.log(pascal(5,2))