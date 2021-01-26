
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

