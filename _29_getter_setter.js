function ExampleClass(name, size){
    var privateName = name;
    var privateSize = size;

    this.getName = function(){return privateName;}
    this.setName = function(name){return privateName = name;}

    this.getSize = function(){return privateSize;}
    this.setSize = function(size){return privateSize = size;}
}

var example = new ExampleClass("Sammie",3);
example.setSize(12);
console.log(example.privateName);
console.log(example.getName());
console.log(example.size);
console.log(example.getSize());