//빅오 표기법

//O(n)
function exampleLinear(n){
    for(var i=0; i<n; i++){
        console.log(i)
    }
}

//O(n제곱)
function exampleQuadratic(n){
    for(var i=0; i<n; i++){
        console.log(i);
        for(var j=i; j<n; j++){
            console.log(j);
        }
    }
}

//O(n세제곱)
function exampleCubic(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
        for (var j = i; j < n; j++) {
            console.log(j);
            for (var k = j; k < n; k++) {
                console.log(k);
            }
        }
    }
}

//O(n)
function a(n){
    var count =0;
    for(var i=0; i<n; i++){
        count+=1;
    }
    return count;
}

//O(n) 상수는 무시하므로 위와 아래의 시간복잡도는 같다.
function a(n){
    var count =0;
    for(var i=0; i<5*n; i++){
        count+=1;
    }
    return count;
}

//O(n) 마찬가지로 n+1 이여도 나머지는 무시된다
function a(n){
    var count =0;
    for(var i=0; i<n; i++){
        count+=1;
    }
    count += 3;
    return count;
}

//빅오의 k승
function a(n){
    var count =0;
    for (var i=0; i<n*n; i++){
        count += 1;
    }
    return count;
}