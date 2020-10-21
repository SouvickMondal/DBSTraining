class Emp{
	constructor(empId,nm,sal){
		this.empId = empId;
		this.name = nm;
		this.sal = sal;
	}
	displayEmpDetails(){
		console.log(`Employee Detais: Id:- ${this.empId} Name:- ${this.nm} Salary:- ${this.sal}`);
	}
}
var e1 = new Emp(100,"Souvick",20000);
e1.displayEmpDetails();