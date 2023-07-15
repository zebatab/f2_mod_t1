/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    //Use the map method to create a new array of developers
    let developers = arr.map((element) => {
      //Check if the profession is developer
      if (element.profession === "developer") {
        return element;
      }
    });
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    //Use the forEach method to iterate over the array
    arr.forEach((element) => {
      //Check if the profession is developer
      if (element.profession === "developer") {
        console.log(element);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    //Create a new employee object
    let newEmployee = { id: 4, name: "Zeba Tabassum", age: "24", profession: "Frontend Developer" };
    //Push the new employee to the array
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //Use the filter method to create a new array without admin
    let noAdmin = arr.filter((element) => {
      //Check if the profession is not admin
      if (element.profession !== "admin") {
        return element;
      }
    });
    console.log(noAdmin);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    //Create another array with three different objects
    let anotherArray = [
      { id: 5, name: "Kate William", age: "20", profession: "tester" },
      { id: 6, name: "Ishita", age: "25", profession: "designer" },
      { id: 7, name: "Juhi", age: "22", profession: "manager" },
    ];
    //Concatenate the two arrays using the concat method
    let concatenatedArray = arr.concat(anotherArray);
    console.log(concatenatedArray);
}