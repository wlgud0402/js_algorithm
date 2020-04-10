//특정 문자열이 나오는 갯수 파악

var str = "He's my king from this day untill his last day";
var count =0;
var pos =str.indexOf('a');

while (pos != -1){
    console.log(count)
    console.log(pos)
    count ++;
    pos = str.indexOf('a', pos+1);
    //while 마지막구절 pos = str.indexOf('a', pos+1); 는 pos 의 시작점을 처음 찾은거에서 오른쪽거부터 시작한다는 뜻이다
}

console.log(count);