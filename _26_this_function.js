function ExampleClass(){
    this.name = "JavaScript";
    this.sayName = function(){
        console.log(this.name);
    }
}

var example = new ExampleClass();
example.sayName();