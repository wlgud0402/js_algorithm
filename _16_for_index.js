//인덱스

var array =['all','cows','are','big']

for (var index in array){
    console.log(index);
}

for (var index in array){
    console.log(array[index]);
}

for (var element of array){
    console.log(element);
}

var array1 = ['I','Love','her','so','much']

array1.forEach(function(element, index){
    console.log(element);
})

array1.forEach(function(element, index){
    console.log(array1[index])
})