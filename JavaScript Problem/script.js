
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


// Question 2 **

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




// 4. Nested Object Traversal
// Define an object, company, with nested structures to represent departments and employees. Write a function, getEmployeeNames(departmentName), that returns an array of all employee names in the specified department. Assume the company object has the following structure:
// const company = {
//     HR: { employees: [{ name: "Alice" }, { name: "Bob" }] },
//     IT: { employees: [{ name: "Charlie" }, { name: "David" }] },
//     Finance: { employees: [{ name: "Eve" }, { name: "Frank" }] }
// };


// // Q-4
// const Company ={};

// Company.Hr = {};
// Company.Hr.Employee = [];

// const HrEmployee1 = {},HrEmployee2 ={};
// HrEmployee1.Name = "Alice"
// HrEmployee2.Name = "Bob"
// Company.Hr.Employee.push(HrEmployee1,HrEmployee2)


// Company.It ={};
// Company.It.Employee =[];
// const ItEmployee1 ={} , ItEmployee2 = {};
// ItEmployee1.Name = "Pramod Kumar";
// ItEmployee2.Name = "Raman Kumar";
// Company.It.Employee.push(ItEmployee1,ItEmployee2);



// Company.Finance ={};
// Company.Finance.Employee =[];
// const FinanceEmployee1 = {} , FinanceEmployee2 = {};
// FinanceEmployee1.Name = "Shivmani Raj"
// FinanceEmployee2.Name = "Amit Kumar"

// Company.Finance.Employee.push(FinanceEmployee1,FinanceEmployee2);


// console.log(Company);


// function getEmployeeList(departmentName){
//     if(departmentName == "Hr")
//         return Company.Hr.Employee;
//     else if(departmentName == "It")
//         return Company.It.Employee;
//     else
//     return Company.Finance.Employee
    
// }
// let depart = "Finance"
// let EmployeeList = getEmployeeList(depart);
// console.log(depart,"Department employees list :->");

// for(let i=0;i<EmployeeList.length;i++)
//     console.log(EmployeeList[i]);
    


// Create an object, bankAccount, with properties balance and accountType (savings, current). Write a method withdraw(amount) that:
// Deducts the amount from the balance if it's less than or equal to the balance.
// Adds a 10% penalty if the account type is "current" and the balance becomes negative. Return the updated balance after the operation.

const BankAccount1 = {
    Balance : 500,
    AccountType:"Saving",
   Withdraw:function(Amount){
    
    this.Balance = this.Balance-Amount;
   }
}

const BankAccount2 = {
    Balance:1000,
    AccountType : "current",
    Withdraw :function(Amount){
        if(this.Balance>0)
        this.Balance= this.Balance-Amount;
        else{
            console.log(" Your Balance is less than 0 so 10% penalty got applayed ");
            
            this.Balance = this.Balance - (this.Balance*10)/100;
        }
    }
}


BankAccount1.Withdraw(200);
console.log(BankAccount1);

BankAccount2.Withdraw(900);
BankAccount2.Withdraw(500);
BankAccount1.Withdraw(200);
console.log(BankAccount2);
