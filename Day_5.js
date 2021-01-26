<script>

//Validation
//1
class online_spping_address 
{
	constructor (name, phone) 
    {
    	this.name = name
        this.phone = phone
    }
    address_details(Address, Landmark, City, Pincode, State, Country, Phone)
    {
		this.Address = Address
		this.Landmark = Landmark
		this.City = City
		this.Pincode = Pincode
		this.State = State
		this.Country = Country
        if (this.Address == "#53, btm 2nd stage banglore" && this.Pincode == 560068)
        {
        	document.write("Correct addresss")
        }
        else
        {
        	document.write("Invalid addresss")
        }
    }
    display()
    {
    	document.write(this.name, this.Landmark)
    }
}
var online_shopping = new online_spping_address("Akshata", 9876501236)
online_shopping.address_details("#53, btm 2nd stage banglore", "near police station", "banglore", 560068, "karnataka", "india")
online_shopping.display()

//Call back function
//2
function AI (identification_face, automation) 
{
	document.write(identification_face, automation)
}
function datascience (callback) 
{
	callback("intimetec", "attendance")
}
datascience (AI)

//3
function corporate_information (Company_name, Designation, Salary,Location ) 
{
	document.write(Company_name, Designation, Salary,Location)
}
function company (callback) 
{
	callback("JVT", "Programmer", "2.3 or 230000", "Bangalore")
}
company(corporate_information)

//4
function Library (Book_ID,Book_name, Book_Author, Issue_Date, Due_Date, ID_No, Name, Return_on, Fine) 
{
	document.write(Book_ID,Book_name, Book_Author, Issue_Date, Due_Date, ID_No, Name, Return_on, Fine)
}
function BOOK(callback) 
{
	callback (12345634, "C Programming","Dennis Ritche", "14/01/2012", "13/02/2012", "2008Ec027", "Saravanan", "25/02/2012", 12
)
}
BOOK(Library)

//5
function speed_Post_1(Post_office_Details,tracking_Number, Counter_No, op_code, From_addres, To_Address, weight, amount, date_time, taxes) 
{
	document.write(Post_office_Details,tracking_Number, Counter_No, op_code, From_addres, To_Address, weight, amount, date_time, taxes) 
}
function post_office_details (callback) 
{
	callback("New Thipasundra<423203>", "EM423395510IN", 1, 12, "#6/96,rajampet,kadapa.", "#03, bldea road vijayapur" , "20grms", 39, "08/04/2013 16:01", 4)
}
post_office_details(speed_Post_1)

//6
function Car_Insurance (Name, Address, Contact_details, Email_Id, Policy_Certificate_Number, Proposal_Covernote_Number, Period_of_insuurance, Buisness_Occupation) 
{
	document.write(Name, Address, Contact_details, Email_Id, Policy_Certificate_Number, Proposal_Covernote_Number, Period_of_insuurance, Buisness_Occupation)
}
function vehicle (callback) 
{
 callback("akshata", "#03, bldea road vijayapur", 987654321, 110711700622,"intimetec@gmail.com", 92027123311002120,  "from 00:00 Hrs on 14/07/2011 to 13/07/2012 on 23:59", "Software_Engineer") 
}
vehicle(Car_Insurance)

//7
function broadband_connection_details(Account_No, Broadband_User_ID, IP_Address ) 
{
	document.write(Account_No, Broadband_User_ID, IP_Address)
}
function internet_connection (callback) 
{
	callback(1135497, 11128550, "10.245.97.123")
}
internet_connection(broadband_connection_details)

//8
function vehicle_information (Vehicle_type, Colour, Engine_number, Chassis_number, Compan) 
{
 document.write(Vehicle_type, Colour, Engine_number, Chassis_number)
}
function vehicle (callback)
{
	callback("light motor vehicle- car", "red", "kp98gtyihh457797", "tc5678898335r45" , "BMW" )
}
vehicle(vehicle_information)

//Object array()
//9
let Health_care = [
	{test : "WBc", result: "4.4" , flag:"low", units:"X10E3/U", Refernce_Interval: "4.0-10.5" , LAB : "01"},
    	{test : "RBC", result: "4.05" , flag:"low", units:"X10E6/UL" , Refernce_Interval: "4.10 -5.60", LAB :"01"},
	{test : "Hemoglobin", result: "14.83", flag:"low" , units:"g/dl" , Refernce_Interval:"12.5 -17.0", LAB :"01"},
	{test :"Hematocrit", result: "41.8" , flag: "low", units:"%", Refernce_Interval:"36.0-50.0" , LAB :"01"},
	{test : "MCV", result: 86 , flag: "low", units: "Fl", Refernce_Interval:"80-98" , LAB :"01"},
	{test : "MCH", result:"30.9" , flag: "low", units: "Pg" , Refernce_Interval:"27.0-34.0", LAB :"01"},
]
Health_care.map(get_blood_details)

function get_blood_details(item) 
{
	document.write(item.test, item.result, item.LAB)
}

//10
let College_Lab_components_duing_the_Lab_exercise = [
	{S_No : 1 , Components : "UJT", Specifications : "2N 2646", Quantity : 2},
	{S_No : 2, Components : "Resistor", Specifications : "220ohms" , Quantity : 1},
    	{S_No : 3, Components : "Capacitor", Specifications : "0.01uf" , Quantity : 4},
    	{S_No : 4, Components : "CRO", Specifications : "20MHZ" , item : 1},
    	{S_No : 5, Components : "Function Generator", Specifications : "1MHZ" , Quantity : 1},
    	{S_No : 6, Components : "Regulated power supply", Specifications : "(0-30V),1A", Quantity : 1},
]
College_Lab_components_duing_the_Lab_exercise.map(get_lab_exercise_details) 

function get_lab_exercise_details(item) 
{
	document.write(item.S_No, item.Components,item.Specifications)
    	if (item.S_No == 4)
    	{
    		document.write(item.Specifications)
    	}
   	 	if (item.S_No == 2)
    	{
    		document.write(item.Components)
    	}
    		if (item.S_No == 3)
    	{
    		document.write(item.Quantity)
   	 }
    		if (item.S_No == 1)
   	 {
    		document.write(item.Components)
   	 }
}

//11
let demat_Ledger_balance_details = [
	{Date : "10/01/2021", Particular : "Nsdl Dp Bill-Dec-14", voucher : "K04424462", debit : "45.0" , credit : "0.00" , balance : "584.29 Cr" },
	{Date : "17/01/2021" ,  Particular :  "BILL FOR BC1415199", voucher : "B00000695", debit : "280.84", credit : "0.00", balance : "865.13 Cr" },
	{Date : "18/01/2021" ,  Particular : "Nsdl Dp Bill-Jan-15", voucher : "K04573521" , debit : "73.00" , credit : "0.00", balance : "792.13 Cr" },
    	{Date : "20/01/2021",  Particular : "BILL FOR NN2015033", voucher : "B00012559", debit : "0.00" , credit : "0.00", balance : "4,319.55 Cr" },
]
demat_Ledger_balance_details.map (Demat_transaction)
function Demat_transaction(transaction) 
{
	document.write(transaction.Date, transaction.Particular)
    	if (transaction.Date == "10/01/2021" )
    	{
    		document.write(transaction.debit)
   	 }
   	 
	 if (transaction.Date ==  "17/01/2021" )
    	{
    		document.write(transaction. Particular)
   	 }
    
   	 if (transaction.Date == "18/01/2021" ) 
   	 {
    	document.write(transaction.credit)
    	}
    
    	if (transaction.Date ==  "20/01/2021" ) 
   	 {
    		document.write(transaction.balance)
    	}
}

//12
//Validation in class and object in array

class medical_billing_information
{
	constructor (name_of_medical, bill_no, date, patient_name, ref_by) {
    	this.name_of_medical = name_of_medical
        this.bill_no = bill_no
        this.date = date
        this.patient_name = patient_name
        this.ref_by =ref_by
    }
    display () 
    {
    	document.write (this.name_of_medical,this.patient_name )
    }
   }
var medical = new medical_billing_information("Apollo Pramcy", 35, "16.10.2012", "Manisha patel", "Dr.Rawther Nithin")
medical.display ()
if (medical.name_of_medical == "Apollo Pramcy")
{

let medical_bills = [ 
	{ Quantity : "2X1 ML", Description : "Drops Ciplox-D", MFG: "CIPLA", Batch : "mz0014", Expire: "05/13", amount :"19.80"},
	{ Quantity :"5x1 NA", Description : "Blead Gallant Razor", MFG: "BDF", Batch : 01, Expire: "01/14", amount :"150.00"},
	{ Quantity : 10, Description : "Tablet Metatime-500MG", MFG: "MP",Batch : "MTM025", Expire: "03/13", amount :"09.90"},
]
medical_bills.map(get_tablet_details)
function get_tablet_details (item) {
	document.write(item.Quantity, item.Description , item.Batch) 
    if (item.Quantity == "2X1 ML") 
    {
    	document.write( item.Batch)
    }
    if (item.Quantity =="5x1 NA" ) 
    {
    	document.write( item.Expire)
    }
    if (item.Quantity == 10 ) 
    {
    	document.write(item.Description )
    }
}
}
else 
{
	document.write("No medical found in this name")
}


//validation
//13
var visiting_card_detail = ["naresh", "naresh.jvt@gmail.com", 9944860792, "jvt",  "programmer", "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075"]
for(i = 0; i < visiting_card_detail.length; i++)
{
	document.write(visiting_card_detail[i])
}

//14
function book_issue_detail() 
{
	this.book_id= 1234566
	this.book_name = "C Programming"
	this.author = "Dennis Ritche"
   	document.write(this.book_id, this.book_name)
    	if (this.book_id == 1234566 && this.book_name == "C Programming" && this.author == "Dennis Ritche")
    	{
    		class book_issue_details
        	{
        		constructor (name, student_id_no) 
            		{
            			this.name = name
               			this.student_id_no = student_id_no
            		}
		    	book_issue(Issue_Date, Due_Date, Return_on, fine)
            		{
            			this.Issue_Date = Issue_Date
                		this.Due_Date = Due_Date
                		this.Return_on = Return_on
                		this.fine = fine
            		}
            		display () 
            		{
            			document.write(this.name,this.Issue_Date,  this.fine)
            		}
            
       		 }
       		 var student_details = new book_issue_details("Saravanan", "2008Ec027")
       		 student_details.book_issue("14/01/2012", "13/02/2012", "25/02/2012" , 12)
        	 student_details.display() 
    	}
    	else
    	{
    		document.write("Book is not matching with the details")
   	}
}
book_issue_detail()

</script>
