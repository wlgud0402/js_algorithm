//카운트다운 재귀

function countDown(n){
    if(n<0){
        return;
    }else{
        console.log(n);
        countDown(n-1);
    }
}

countDown(10)