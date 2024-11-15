
// // 1. Conditional Discounts with if-else
// // Write a function, calculateDiscount(price, customerType), that calculates discounts based on customer type:

// // "premium" customers get a 20% discount,
// // "regular" customers get a 10% discount,
// // others get a 5% discount. Return the final price after discount. Include an error check for negative prices or invalid customer types.


const calculateDiscount = function(price , customerType){

    if(price>0){

    if(customerType=="Premium")
    {
        let FinalDiscounts = price-(price*20)/100;
        return FinalDiscounts;
    }

    else if(customerType == "Regular")
        {
            let FinalDiscounts = price-(price*10)/100;
            return FinalDiscounts;
        }
    
    else 
        {
            let FinalDiscounts = price-(price*5)/100;
            return FinalDiscounts;
        }
    
    
    }
  
}

let amount = 10 , customerType = "Regular";

let FinalAmount =  calculateDiscount(amount , customerType);

document.write("Customer type = ",customerType); 
document.write( " <br>Total purchage amount = ",amount); 
document.write(" <br> Final amount  = ",FinalAmount);


// // Question 2 **

var Arr = [];

const checkprime = function(num){
let flag =0
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        flag = 1;
    }
  if(flag == 0)
    Arr.push(num)
}  

let limit = 30;
for(let j=2;j<=limit;j++)
checkprime(j);

// 3. Grading System with switch case
// Write a function, getGrade(score), that assigns grades based on a score using switch case:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F" Use Math.floor(score / 10) in your switch statement.

let Score = 90;

switch(true){
    case(Score>=90) : console.log("A Grade");
                    break;
    case (Score>=80) :console.log("B Grade");
    break;

    case (Score>=70) :console.log("C Grade");
    break;

    case(Score>=60) : console.log("D Grade");
    break;

    default : console.log("Fail");
    
}



// 4. Nested Object Traversal
// Define an object, company, with nested structures to represent departments and employees. Write a function, getEmployeeNames(departmentName), that returns an array of all employee names in the specified department. Assume the company object has the following structure:
// const company = {
//     HR: { employees: [{ name: "Alice" }, { name: "Bob" }] },
//     IT: { employees: [{ name: "Charlie" }, { name: "David" }] },
//     Finance: { employees: [{ name: "Eve" }, { name: "Frank" }] }
// };



const Company ={};

Company.Hr = {};
Company.Hr.Employee = [];

const HrEmployee1 = {},HrEmployee2 ={};
HrEmployee1.Name = "Alice"
HrEmployee2.Name = "Bob"
Company.Hr.Employee.push(HrEmployee1,HrEmployee2)


Company.It ={};
Company.It.Employee =[];
const ItEmployee1 ={} , ItEmployee2 = {};
ItEmployee1.Name = "Pramod Kumar";
ItEmployee2.Name = "Raman Kumar";
Company.It.Employee.push(ItEmployee1,ItEmployee2);



Company.Finance ={};
Company.Finance.Employee =[];
const FinanceEmployee1 = {} , FinanceEmployee2 = {};
FinanceEmployee1.Name = "Shivmani Raj"
FinanceEmployee2.Name = "Amit Kumar"

Company.Finance.Employee.push(FinanceEmployee1,FinanceEmployee2);


console.log(Company);


function getEmployeeList(departmentName){
    if(departmentName == "Hr")
        return Company.Hr.Employee;
    else if(departmentName == "It")
        return Company.It.Employee;
    else
    return Company.Finance.Employee
    
}
let depart = "Finance"
let EmployeeList = getEmployeeList(depart);
console.log(depart,"Department employees list :->");

for(let i=0;i<EmployeeList.length;i++)
    console.log(EmployeeList[i]);
    


//  5 . Create an object, bankAccount, with properties balance and accountType (savings, current). Write a method withdraw(amount) that:
// Deducts the amount from the balance if it's less than or equal to the balance.
// Adds a 10% penalty if the account type is "current" and the balance becomes negative. Return the updated balance after the operation.

const BankAccount1 = {
    Balance : 500,
    AccountType:"Current",
   Withdraw:function(Amount){

    if(this.AccountType=="Saving"){
        if(Amount<=this.Balance && this.Balance>0)
            this.Balance = this.Balance-Amount
        else
        console.log("Insufficient Balance");
        
    }
    else{
        if(Amount<=this.Balance)
            this.Balance = this.Balance-Amount
        else{
          console.log("Insuffient fund and this act add penalty to your bank balance");
          
            this.Balance = this.Balance + (this.Balance*20)/100
            console.log("Your Penality amount to pay :-> ",(this.Balance*20)/100);
            
        }
    }
    
   }
}



BankAccount1.Withdraw(700);
console.log(BankAccount1);



// 6. Student Grades with for loop and switch case
// Define an array of objects, students, where each student has properties name and score. Write a function assignGrades(students) that assigns each student a grade (A-F) based on their score using a for loop and switch case. Update each student object with a new grade property.
//Array of student objects
let students = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 72 },
    { name: "David", score: 60 },
    { name: "Eve", score: 40 }
  ];
  
  function assignGrades(students) {
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      let score = student.score;
  
      switch (true) {
        case (score >= 90):
          student.grade = 'A';
          break;
        case (score >= 80):
          student.grade = 'B';
          break;
        case (score >= 70):
          student.grade = 'C';
          break;
        case (score >= 60):
          student.grade = 'D';
          break;
        case (score >= 50):
          student.grade = 'E';
          break;
        default:
          student.grade = 'F';
      }
    }
  }
  
  assignGrades(students);
  
  console.log(students);
  

// 8. Function to Group People by Age
// Given an array of objects, people, where each object contains name and age, write a function groupByAge(people) that groups people into age categories:
// "child" (0-12)
// "teen" (13-19)
// "adult" (20-64)
// "senior" (65+) Return an object with categories as keys and arrays of names as values.


const GroupPeople = {
    Child:[],
    Teen :[],
    Adult :[],
    Senior :[]
}



function getGroupPeople(List ,Size){
    for(let i=0;i<Size;i++)
    {
        if(List[i].Age>0 && List[i].Age<=12)
            GroupPeople.Child.push(List[i].Name)
        else if(List[i].Age>=13 && List[i].Age<=19)
            GroupPeople.Teen.push(List[i].Name)
        else if(List[i].Age>=20 && List[i].Age<=64)
            GroupPeople.Adult.push(List[i].Name)
        else
        GroupPeople.Senior.push(List[i].Name)
    }
    return GroupPeople;
}



const PeopleList = [];

const People1 = {};
People1.Name = "Prince";
People1.Age = 16;

const People2 = {};
People2.Name = "Raja"
People2.Age = 20;

const People3 = {};
People3.Name = "Raman Kumar"
People3.Age = 40;

const People4 = {};
People4.Name = "Thakur Durjan Singh"
People4.Age = 70

PeopleList.push(People1 , People2,People3,People4);

console.log(PeopleList);

let PeopleDetails =  getGroupPeople(PeopleList,PeopleList.length)
console.log(PeopleDetails);


// 9 .  Number to word


const Converter = (Num)=>{
    if(Num>=0 && Num<=9){
switch(Num){
    case 0: return 'Zero'
    case 1: return 'One'
    case 2: return 'Two'
    case 3: return 'Three'
    case 4: return 'Four'
    case 5 : return 'Five'
    case 6 :return 'Six'
    case 7 :return 'Seven'
    case 8 :return 'Eight'
    default :return 'Nine'
}

}
else
return 'Invalid Number'
}
let Num = 7;

console.log(Num ,"in word :-> ",
    Converter(Num));

// Q no :-> 10

const CheckEligibility = function(Student, MinMark){
    const EligibleStudents = [];

    for(let i = 0;i<Student.length;i++){

        if(Student[i].MarkPrc>MinMaks)
            EligibleStudents.push(Student[i])

    }
    return EligibleStudents;


}
const Student1 = {}, Student2 = {} , Student3 = {} , StudentList =[];

let MinMaks = 75;

Student1.Name = "Radhe Krishna"
Student1.Age = 24
Student1.MarkPrc = 90


Student2.Name = "Sita Ram"
Student2.Age = 30
Student2.MarkPrc = 74


Student3.Name = "Gouri Shanker"
Student3.Age = 21
Student3.MarkPrc = 80

StudentList.push(Student1,Student2,Student3);

const EligibleStudentsList = CheckEligibility(StudentList,MinMaks)