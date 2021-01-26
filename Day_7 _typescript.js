
//Type script

//1
function person (first_name: string , last_name : string, age : number) 
{
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
}
let mother = new person("girija", "patil", 50);
console.log(mother.first_name, mother.last_name, mother.age )

//2
function corporate_information (Company_name:string, Designation:string, Salary:string, Location:string) 
{
    this.Company_name = Company_name;
    this.Designation = Designation;
    this.Salary = Salary;
    this.Location = Location;
}
let company = new corporate_information("JVT", "Programmer", "2.3 or 230000", "Bangalore")
console.log(company.Company_name, company.Designation, company.Salary, company.Location)

//3
function person_information(Name : string, Educational_Qualification : string, Date_Of_Birth : string, Communication_Address : string, Residence_Number : number, Mobile : number, Email : string, Total_IT_Exp : string ,Skill_and_Relevant_Experience : string,Reporting_Manager : string, PANCARD_NO : string)
{
    this.Name = Name
    this.Educational_Qualification = Educational_Qualification
    this.Date_Of_Birth = Date_Of_Birth
    this.Communication_Address = Communication_Address
    this.Residence_Number = Residence_Number
    this.Mobile = Mobile
    this.Email = Email
    this.Total_IT_Exp = Total_IT_Exp
    this.Skill_and_Relevant_Experience = Skill_and_Relevant_Experience
    this.Reporting_Manager = Reporting_Manager
    this.PANCARD_NO = PANCARD_NO

}
var person_info = new person_information( "Jai Venkateswara Technologies", "B TECH MCA MBA BSC MSC", "2/6/1988", "233/3 Ground floor new thippasandra", 08025216666, 9900367097, "venkatesh.db@gmail.com", "1 years", "C,CPP all Lang & 1 years", "Venkatesh", "asu675901f")
console.log(person_info.Mobile, person_info.Residence_Number, person_info.Skill_and_Relevant_Experience)

//4
function person_appearance(height: string, weight : number, color : string) 
{
	this.height = height
	this.weight = weight
    	this.color = color
    	console.log(this.color,this.weight)
}
person_appearance( "5.4", 90, "fair")

//5
function library_book_issue_information(issuedate : string, duedate : string, idno : string) 
{
	this.issuedate = issuedate
	this.duedate = duedate
        this.idno =idno
        console.log(this.issuedate,this.duedate,this.idno)
}
var library = new library_book_issue_information("14/01/2012","13/02/2012","2008Ec027") 

//6
class flowers 
{
    rose : number; 
    lilly : number;
	constructor (rose : number, lilly : number) 
	{
    		this.rose = rose
        	this.lilly = lilly
	}
}
var art_flower = new flowers(20, 30);
console.log(art_flower.rose, art_flower.lilly);


//7
class ceo 
{
    name : string;
    constructor (name : string) 
    {
       this.name = name;
    }
}
let google_ceo = new ceo("Sundar Pichai");
console.log(google_ceo.name);

//8
class inventor 
{   
    lang_creator : string;
    lang_creator_age : number;
    constructor (lang_creator : string, lang_creator_age :number) 
    {
    	this.lang_creator = lang_creator;
        this.lang_creator_age = lang_creator_age;
     }
}
let C_inventor = new inventor("Dennis Ritchie",50)
let java_inventor = new inventor("James Gosling", 60)
console.log( C_inventor.lang_creator, java_inventor.lang_creator_age, java_inventor.lang_creator );

//9
class homes 
{
    home_name : string; 
    home_size : number;
    constructor (home_name : string, home_size : number) 
    {
        this.home_size = home_size;
        this.home_name= home_name;
    }
}
let my_home =new homes("aksh nilaya", 3000);
let rent_home =new homes("rent nilaya", 5000);
console.log(rent_home.home_name, my_home.home_size)

//10
class IT_company
{
    name : string;
    designataion : string;
    salary : number; 
    place : string;
    constructor (name : string, designataion : string, salary : number, place : string) 
    {
    	this.name =  name;
        this.designataion =designataion;
        this.salary = salary;
        this.place = place;
    }
}
let company = new IT_company("intimetec","junior software engg" ,200000 , "Banglore");
console.log(company.name, company.designataion, company.salary, company.place);

//11
class corporation_information 
{
    comp_name : string; 
    designation : string; 
    salary : number; 
    location : string;
    constructor (comp_name : string, designation : string, salary : number, location : string) 
    {
    	this.comp_name = comp_name;
        this.designation = designation;
        this.salary= salary;
        this.location = location;
  	}
}
let intimetec = new corporation_information ("intimetec", "software engg", 100000, "Silkboard, Banglore" );
let infosys = new corporation_information ("infosys", "junior software engg", 20000, "Electronics city");
let wipro = new corporation_information ("wipro", "senior software engg", 30000, "sarjapur banglore");
console.log(intimetec.comp_name, infosys.designation, wipro.location);

//12
let vehicle : [string , number, string]
vehicle = ["honda", 200000, "150cc"]
console.log(vehicle[0], vehicle[1], vehicle[2] )

//13
let Corporate_Information : [string, string, string, string];
Corporate_Information = ["JVT", "Programmer",  "2.3 or 230000", "Bangalore"];
console.log(Corporate_Information[2], Corporate_Information[3]);

//14
function usage_net(TotalMBdownloaded : number, MobiledownloadSpeed : string)
{
	let MobileuploadSpeed : string = "32.06 mbps";
    	if(TotalMBdownloaded >= 100)
   	{
    		return "usage is completed"
   	}
   	else
   	{
        console.log(TotalMBdownloaded,MobiledownloadSpeed);
   	}
}
var result = usage_net(111,"34.06mbps");
console.log(result);

//15
class inventor 	
{
    lang_creator : string;
    lang_creator_age : number;
	constructor (lang_creator : string, lang_creator_age : number) 
	{
    		this.lang_creator = lang_creator;
        	this.lang_creator_age = lang_creator_age;
    }
}
var C_inventor = new inventor("Dennis Ritchie",50);
var java_inventor = new inventor("James Gosling", 60)
console.log( C_inventor.lang_creator, java_inventor.lang_creator_age, java_inventor.lang_creator );

//16
class net_request_connection 
{
    Broadband_User_ID : number; 
    IP_Address :string;
    Total_MB_downloaded : number; 
    Mobile_downloaded_speed : string;
	constructor (Broadband_User_ID : number, IP_Address :string) 
	{
    		this.Broadband_User_ID = Broadband_User_ID;
        	this.IP_Address = IP_Address;
   	}
    	net_usage_data (Total_MB_downloaded : number, Mobile_downloaded_speed : string) 
	{
    		var Mobile_upload_Speed : string = "32.06 mbps";
        	this.Total_MB_downloaded = Total_MB_downloaded;
       	 	this.Mobile_downloaded_speed = Mobile_downloaded_speed;
    	}
    	display ( )
    	{
    		console.log(this.Broadband_User_ID, this.IP_Address);
       		console.log(this.Total_MB_downloaded, this.Mobile_downloaded_speed);
    	}
}
var net_details = new  net_request_connection(11128550, "10.245.97.123");
net_details.net_usage_data( 80, "30.05 mbps");
net_details.display();

//17
class person_appearance_info 
{
    weight : number;
    hight : string; 
    Eye_color :string; 
    gender : string;
    home_address : string; 
    home_phone : number; 
    mobile : number; 
    state : string; 
    country : string;
    constructor (weight : number, hight : string, Eye_color :string, gender : string) 
	{
 		this.weight=  weight;
        	this.hight = hight;
        	this.Eye_color= Eye_color;
        	this.gender =  gender   ;    
 	}
	contact_details (home_address : string, home_phone : number, mobile : number, state : string, country : string)
	{
    		this.home_address = home_address ;
        	this.home_phone = home_phone;
        	this.mobile =  mobile;
        	this.state = state;
        	this.country = country;
   	 }
    	display_1 () 
	{
    		console.log(this.hight, this.gender);
        	console.log(this.home_address)
   	}    
}

var personal_appearance=  new person_appearance_info(60, "5.8", "brown", "male");
personal_appearance.contact_details("", 975545445, 8889994440, "Andrapradesh", "India") ;
personal_appearance.display_1();

//18
class license
{
    first_name : string;
    middle_name : string;
    last_name : string;
    driver_license_no : string; 
    Driver_license_state : string; 
    Driver_license_contry : string;
    Civilian_type : string; 
    Employee_type : string; 
    Date_of_birth : string; 
    City_of_birth : string;
	constructor (first_name : string, middle_name : string, last_name : string) 
	{
         	this.first_name = first_name;
         	this.middle_name = middle_name;
        	this.last_name = last_name;
        }
        drivers_details (driver_license_no : string, Driver_license_state : string, Driver_license_contry : string,Civilian_type : string, Employee_type : string, Date_of_birth : string, City_of_birth : string ) 
	{
		this.driver_license_no = driver_license_no;
        	this.Driver_license_state = Driver_license_state;
        	this.Driver_license_contry =Driver_license_state;
        	this.Civilian_type = Driver_license_state;
       	 	this.Employee_type = Employee_type;
        	this.Date_of_birth = Date_of_birth;
        	this.City_of_birth = City_of_birth;
        }
       	display()
        {
         	console.log(this.first_name, this.last_name, this.middle_name);
            console.log(this.Date_of_birth, this.Civilian_type, this.last_name, this.driver_license_no,  this.City_of_birth, this.Driver_license_contry, this.Driver_license_contry);
        }
}
var person_name = new license("pavan", "kumar", "bujjivan");
person_name.drivers_details ("ka50201500006939", "karnataka", "india", "around india", "software engineer", "12-07-1992","rajampet" );
person_name.display();

//19
class vehicle_information 
{
    Vehicle_type : string; 
    Colour : string;
    Company : string;
    Engine_number : string;
    Chassis_number : string
    constructor (Vehicle_type : string, Colour : string, Company : string) 
    {
    	this.Vehicle_type = Vehicle_type;
    	this.Colour = Colour;
    	this.Company = Company;
    }
    engine (Engine_number : string, Chassis_number : string) 
    {
     	this.Engine_number = Engine_number;
     	this.Chassis_number = Chassis_number ;
    }
    display () 
    {
    	console.log(this.Vehicle_type, this.Colour, this.Company );
        console.log(this.Chassis_number, this.Engine_number );
    }
}
var vehicle = new vehicle_information( "light motor vehicle- car", "red", "BMW" );
vehicle.engine("kp98gtyihh457797", "tc5678898335r45");
vehicle.display();

//20
class visiting_card_details
{
    name : string;
    mail_id : string; 
    contact_no : number; 
    company_name : string;
    address : string;
	constructor (name : string,mail_id : string, contact_no : number, company_name : string) 
	{
    		this.name = name;;
    		this.mail_id = mail_id;
        	this.contact_no = contact_no;
        	this.company_name = company_name ;
    	}
    	contact(address) 
	{
    		this.address = address;
    	}
    	display() 
		{
    			console.log(this.company_name, this.address)
            	if (this.mail_id == "naresh.jvt@gmail.com")
            	{
            		console.log("Valid email ID");
            	}
           		else
            	{
            		console.log("Invalid email ID");
                    
                }
            	if (this.contact_no == 9944860792)
            	{
            		console.log("Valid number");
           		}
            	else
           		{
            		console.log("Invalid number");
            	}
    		}
}
var visiting = new visiting_card_details("naresh", "naresh.jvt@gmail.com", 9944860792, "jvt" );
visiting.contact("230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.");
visiting.display();

//21
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

//22
function corporate_information (Company_name : string, Designation : string, Salary : string, Location : string) 
{
	console.log(Company_name, Designation, Salary,Location);
}
function company (callback) 
{
	callback("JVT", "Programmer", "2.3 or 230000", "Bangalore");
}
company(corporate_information);

//23
function Library (Book_ID,Book_name : string, Book_Author : string, Issue_Date: string, Due_Date: string, ID_No: string, Name: string, Return_on: string, Fine: string) 
{
	console.log(Book_ID,Book_name, Book_Author, Issue_Date, Due_Date, ID_No, Name, Return_on, Fine);
}
function BOOK(callback) 
{
	callback (12345634, "C Programming","Dennis Ritche", "14/01/2012", "13/02/2012", "2008Ec027", "Saravanan", "25/02/2012", 12);
}
BOOK(Library)

//24
function speed_Post_1(Post_office_Details : string,tracking_Number : string, Counter_No : number, op_code : number, From_addres, To_Address : string, weight : string, amount : string, date_time : string, taxes : string) 
{
	console.log(Post_office_Details,tracking_Number, Counter_No, op_code, From_addres, To_Address, weight, amount, date_time, taxes) 
}
function post_office_details (callback) 
{
	callback("New Thipasundra<423203>", "EM423395510IN", 1, 12, "#6/96,rajampet,kadapa.", "#03, bldea road vijayapur" , "20grms", 39, "08/04/2013 16:01", 4)
}
post_office_details(speed_Post_1)

//25
function broadband_connection_details(Account_No : number, Broadband_User_ID : number, IP_Address : string) 
{
	console.log(Account_No, Broadband_User_ID, IP_Address);
}
function internet_connection (callback) 
{
	callback(1135497, 11128550, "10.245.97.123");
}
internet_connection(broadband_connection_details)

//26

function broadband_connection_details(Account_No : number, Broadband_User_ID : number, IP_Address : string) 
{
	console.log(Account_No, Broadband_User_ID, IP_Address);
}
function internet_connection (callback) 
{
	callback(1135497, 11128550, "10.245.97.123");
}
internet_connection(broadband_connection_details)

//27

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
//28

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


//29
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


//30
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






