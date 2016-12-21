ReactDOM.render(<h1>REACT JS KHOA PHAM</h1>,
  document.getElementById('root'));

// function Person(name, age){
//   this.age = age;
//   this.name = name;
// }
//
// var p1 = new Person('KhoaPham', 2);
// console.log(p1);

class Person {
  constructor(name, age){
    this.age = age;
    this.name = name;
  }
  sayHello(){
    return 'Xin chao, toi la ' + this.name + ', nam nay ' + this.age + ' tuoi';
  }
}

class Child extends Person{
  constructor(name, age, hobby){
    super(name, age);
    this.hobby = hobby;
  }
  sayHello(){
    return 'Xin chao, em la ' + this.name + ', nam nay em ' + this.age + ' tuoi, em thich choi ' + this.hobby;
  }
}

var p2 = new Person('KhoaPham', 2);
var aChild = new Child('Teo', 3, 'may bay');
console.log(aChild.sayHello());
