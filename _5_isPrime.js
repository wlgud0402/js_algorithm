//소수인지 체크

//시간복잡도 O(n)
function isPrime(n){
    if (n <= 1){
        return false;
    }

    for (var i = 2; i<n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

//2와 3을 제외한 모든 소수는 6k +- 1 의 형태
//시간복잡도 n제곱근: n보다 더 작음
function isPrime(n){
    if(n <= 1) return false;
    if(n <= 3) return true;

    if(n%2 == 0 || n%3 == 0) return false;

    for(var i=5; i*i <=n; i=i+6){
        if(n%i ==0 || n%(i+2)==0)
        return false;
    }
    return true;
}