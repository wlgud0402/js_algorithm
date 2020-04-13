function ExampleClass(){
    this.array = [1,2,3,4,5];
    this.name="JavaScript!!";
}

var example = new ExampleClass();

ExampleClass.prototype.sayName = function(){
    console.log(this.name);
}

example.sayName();