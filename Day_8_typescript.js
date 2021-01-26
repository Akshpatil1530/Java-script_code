//1
class Electric_bill_paid_via_netbanking_1 
{
    website : string;
    password : number;
    consumer_number : number; 
    Billing_status : string; 
    mode_of_payment : string;
    choose_bank : string;
    username : string; 
    password_1: number; 
    Transaction_no : string; 
    payment_status : string;

	constructor (website : string,password : number,consumer_number : number, Billing_status : string, mode_of_payment : string) 
	{
    		this.website = website
        	this.password =password
        	this.consumer_number = consumer_number
        	this.Billing_status = Billing_status
        	this.mode_of_payment = mode_of_payment
    	}
    	person_billing_statement (choose_bank : string,username : string, password_1: number, Transaction_no : string, payment_status : string) 
	{
    		this.choose_bank = choose_bank
        	this.username = username
       	 	this.password_1 = password_1
        	this.Transaction_no = Transaction_no
        	this.payment_status = payment_status
    	}
 	display()  
	{
    		console.log( this.consumer_number,  this.Transaction_no,  this.consumer_number )
    	}
}
var Electrical_bill  = new Electric_bill_paid_via_netbanking_1 ("www.tnebnet.org", 987655, 23456123, "paid/unpaid", "netbanking"  )
Electrical_bill.person_billing_statement("sbi", "kumar00", 123456, "18cv21828578437", "successful")
Electrical_bill.display()

//2
function corporate_information (Company_name : string, Designation : string, Salary : string, Location : string) 
{
	console.log(Company_name, Designation, Salary,Location);
}
function company (callback) 
{
	callback("JVT", "Programmer", "2.3 or 230000", "Bangalore");
}
company(corporate_information);

//3
function Library (Book_ID,Book_name : string, Book_Author : string, Issue_Date: string, Due_Date: string, ID_No: string, Name: string, Return_on: string, Fine: string) 
{
	console.log(Book_ID,Book_name, Book_Author, Issue_Date, Due_Date, ID_No, Name, Return_on, Fine);
}
function BOOK(callback) 
{
	callback (12345634, "C Programming","Dennis Ritche", "14/01/2012", "13/02/2012", "2008Ec027", "Saravanan", "25/02/2012", 12);
}
BOOK(Library)

//4
function speed_Post_1(Post_office_Details : string,tracking_Number : string, Counter_No : number, op_code : number, From_addres, To_Address : string, weight : string, amount : string, date_time : string, taxes : string) 
{
	console.log(Post_office_Details,tracking_Number, Counter_No, op_code, From_addres, To_Address, weight, amount, date_time, taxes) 
}
function post_office_details (callback) 
{
	callback("New Thipasundra<423203>", "EM423395510IN", 1, 12, "#6/96,rajampet,kadapa.", "#03, bldea road vijayapur" , "20grms", 39, "08/04/2013 16:01", 4)
}
post_office_details(speed_Post_1)

//5
function broadband_connection_details(Account_No : number, Broadband_User_ID : number, IP_Address : string) 
{
	console.log(Account_No, Broadband_User_ID, IP_Address);
}
function internet_connection (callback) 
{
	callback(1135497, 11128550, "10.245.97.123");
}
internet_connection(broadband_connection_details)

//6

function broadband_connection_details(Account_No : number, Broadband_User_ID : number, IP_Address : string) 
{
	console.log(Account_No, Broadband_User_ID, IP_Address);
}
function internet_connection (callback) 
{
	callback(1135497, 11128550, "10.245.97.123");
}
internet_connection(broadband_connection_details)

//7

function book_issue_detail() 
{
    var book_id : number;
    var book_name : string;
    var author : string;

	this.book_id = 1234566;
	this.book_name  = "C Programming";
    this.author = "Dennis Ritche";
   console.log(this.book_id, this.book_name)
    if (this.book_id == 1234566 && this.book_name == "C Programming" && this.author == "Dennis Ritche")
    {
    	class book_issue_details
        {
            name : string; 
            student_id_no : string;
            Issue_Date :string;
            Due_Date : string; 
            Return_on : string; 
            fine : number;
        	constructor (name : string, student_id_no : string) 
            {
            	this.name = name;
                this.student_id_no = student_id_no;
            }
            book_issue(Issue_Date :string , Due_Date : string, Return_on : string, fine : number)
            {
            	this.Issue_Date = Issue_Date;
                this.Due_Date = Due_Date;
                this.Return_on = Return_on;
                this.fine = fine;
            }
            display () 
            {
            	console.log(this.name,this.Issue_Date,  this.fine);
            }
            
        }
        var student_details = new book_issue_details("Saravanan", "2008Ec027")
        student_details.book_issue("14/01/2012", "13/02/2012", "25/02/2012" , 12)
        student_details.display() 
    }
    else
    {
    	console.log("Book is not matching with the details")
    }
}
book_issue_detail()


//Data structure
//8

let College_Lab_components_duing_the_Lab_exercise :  [any, any, any, any, any, any ]= [
	{S_No : 1 , Components : "UJT", Specifications : "2N 2646", Quantity : 2},
	{S_No : 2, Components : "Resistor", Specifications : "220ohms" , Quantity : 1},
    	{S_No : 3, Components : "Capacitor", Specifications : "0.01uf" , Quantity : 4},
    	{S_No : 4, Components : "CRO", Specifications : "20MHZ" , item : 1},
    	{S_No : 5, Components : "Function Generator", Specifications : "1MHZ" , Quantity : 1},
    	{S_No : 6, Components : "Regulated power supply", Specifications : "(0-30V),1A", Quantity : 1},
];
College_Lab_components_duing_the_Lab_exercise.map(get_lab_exercise_details) 

function get_lab_exercise_details(item : any) 
{
	console.log(item.S_No, item.Components,item.Specifications);
    	if (item.S_No == 4)
    	{
    		console.log(item.Specifications);
    	}
   	 	if (item.S_No == 2)
    	{
    		console.log(item.Components);
    	}
    		if (item.S_No == 3)
    	{
    		console.log(item.Quantity);
   	 }
    		if (item.S_No == 1)
   	 {
        console.log(item.Components);
   	 }
}


//9
let demat_Ledger_balance_details : [any, any, any, any] = [
	{Date : "10/01/2021", Particular : "Nsdl Dp Bill-Dec-14", voucher : "K04424462", debit : "45.0" , credit : "0.00" , balance : "584.29 Cr" },
	{Date : "17/01/2021" ,  Particular :  "BILL FOR BC1415199", voucher : "B00000695", debit : "280.84", credit : "0.00", balance : "865.13 Cr" },
	{Date : "18/01/2021" ,  Particular : "Nsdl Dp Bill-Jan-15", voucher : "K04573521" , debit : "73.00" , credit : "0.00", balance : "792.13 Cr" },
    	{Date : "20/01/2021",  Particular : "BILL FOR NN2015033", voucher : "B00012559", debit : "0.00" , credit : "0.00", balance : "4,319.55 Cr" },
];
demat_Ledger_balance_details.map (Demat_transaction)
function Demat_transaction(transaction) 
{
	console.log(transaction.Date, transaction.Particular);
    	if (transaction.Date == "10/01/2021" )
    	{
    		console.log(transaction.debit);
   	    }
   	 
	 if (transaction.Date ==  "17/01/2021" )
    	{
    		console.log(transaction. Particular);
   	    }
    
   	 if (transaction.Date == "18/01/2021" ) 
   	 {
    	console.log(transaction.credit);
    }
    
    	if (transaction.Date ==  "20/01/2021" )
   	 {
        console.log(transaction.balance);
    	}
}


//10
class medical_billing_information
{
    name_of_medical : string; 
    bill_no : number; 
    date : string; 
    patient_name : string; 
    ref_by : string;
	constructor (name_of_medical : string, bill_no : number, date : string, patient_name : string, ref_by : string) {
    	this.name_of_medical = name_of_medical;
        this.bill_no = bill_no;
        this.date = date;
        this.patient_name = patient_name;
        this.ref_by =ref_by;
    }
    display () 
    {
    	console.log(this.name_of_medical,this.patient_name )
    }
   }
var medical = new medical_billing_information("Apollo Pramcy", 35, "16.10.2012", "Manisha patel", "Dr.Rawther Nithin");
medical.display ();
if (medical.name_of_medical == "Apollo Pramcy")
{
    let medical_bills : [any, any, any] = [ 
	    { Quantity : "2X1 ML", Description : "Drops Ciplox-D", MFG: "CIPLA", Batch : "mz0014", Expire: "05/13", amount :"19.80"},
	    { Quantity :"5x1 NA", Description : "Blead Gallant Razor", MFG: "BDF", Batch : 01, Expire: "01/14", amount :"150.00"},
	    { Quantity : 10, Description : "Tablet Metatime-500MG", MFG: "MP",Batch : "MTM025", Expire: "03/13", amount :"09.90"},
    ];
    medical_bills.map(get_tablet_details);
    function get_tablet_details (item) 
    {
	    console.log(item.Quantity, item.Description , item.Batch) 
        if (item.Quantity == "2X1 ML") 
        {
    	    console.log( item.Batch);
        }
        if (item.Quantity =="5x1 NA" ) 
        {
    	    console.log( item.Expire);
        }
        if (item.Quantity == 10 ) 
        {
    	    console.log(item.Description );
        }
    }
}
else 
{
	console.log("No medical found in this name");
}
