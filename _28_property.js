function ExampleClass(name, size){
    this.name = name;
    this.size = size;
}

var example = new ExampleClass("Public", 5);
console.log(example);

console.log(example.name);
console.log(example.size);