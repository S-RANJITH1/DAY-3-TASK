//How to compare two json have the same properties without order
// A.let obj1={name:"person 1",age:5};
// B.let obj2={age:5,name:"person 1"};

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

const json1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const json2 = JSON.stringify(obj2, Object.keys(obj2).sort());

if (json1 === json2) {
  console.log("The two JSON objects are equivalent.");
} else {
  console.log("The two JSON objects are not equivalent.");
}

//2.Display all the country flags in the console:

var request1 = new XMLHttpRequest();

request1.open("GET", "https://restcountries.com/v3.1/all", true);

request1.send();

request1.onload = function () {
  var data = request1.response;
  var result = JSON.parse(data);
  console.log(result[0].name.common);

  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.svg);
  }
};

//task3:Print all countries names,regions,subregion and populations:

var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data = request2.response;
  var result2 = JSON.parse(data);
  console.log(result2);
  for (var i = 0; i < result2.length; i++) {
    console.log(
      result2[i].name.common,
      result2[i].region,
      result2[i].subregion,
      result2[i].population
    );
  }
};

