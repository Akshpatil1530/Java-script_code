<script>
//1
//Function 
function mother() 
{
	var emotion = "happiness"
	var caring = "always she want me to be happy"
	var money = 5000
	var areuinoffice = "yes"
	var hadbrkfst = "yes"
	document.write(emotion,caring,money,areuinoffice,hadbrkfst)
}
mother()

//2
function person_information () 
{
	var Name = "Jai Venkateswara Technologies"
	var Educational = "Qualification : B TECH MCA MBA BSC MSC"
	var Date_Of_Birth = "2/6/1988"
	var Communication_Address = "233/3 Ground floor new thippasandra"
	var Residence_Number = 08025216666
	var Mobile = 9900367097
	var Email = "venkatesh.db@gmail.com"
	var Total_IT_Exp = "1 years"
	var Skill_and_Relevant_Experience = "C,CPP all Lang & 1 years"
	var Reporting_Manager = "Venkatesh"
	var PANCARD_NO = "asu675901f"
    	document.write(Communication_Address, Reporting_Manager)
}
person_information()

//3
function net_connection_information () 
{
	var Account_No = 1135497
	var Broadband_User_ID = 11128550
	var IP_Address = "10.245.97.123"
    	document.write(Broadband_User_ID,IP_Address)
}
net_connection_information()

//4
function net_usage() 
{
	var Total_MB_downloaded = "21.26 GB"
   	 var Mobile_download_Speed = "30.05 mbps"
   	 var Mobile_upload_Speed = "32.06 mbps"
   	 document.write(Total_MB_downloaded, Mobile_download_Speed)
}
net_usage()

//5
//Function using this
//If "this" used in function i.e called method
function vehicle(color, weight) 
{
	this.color = "black"
   	this.weight = 300
   	document.write(this.c, this.w)
}
vehicle()

//6
function person_appearance(height , weight, color) 
{
	this.height = height
	this.weight = weight
    	this.color = color
    	document.write(this.emotion,this.weight)
}
person_appearance( "5.4", 90, "fair")

//7
function mother() 
{
	this.emotion = "happiness"
	this.caring = "always she want me to be happy"
	this.money = 5000
	this.areuinoffice = "yes"
	this.hadbrkfst = "yes"
	document.write(emotion,caring,money,areuinoffice,hadbrkfst)
}
mother()

//8
function library_book_issue_information(issuedate,duedate,idno) 
{
	this.issuedate = issuedate
	this.duedate = duedate
        this.idno =idno
	document.writeln(this.issuedate,this.duedate,this.idno)
}
var library = new library_book_issue_information("14/01/2012","13/02/2012","2008Ec027") 

//9
function broadband_connection(Account_no, Broadband_User_ID, IP_Address)
{
	this.Account_no = Account_no
    	this.Broadband_User_ID = Broadband_User_ID
   	this.IP_Address = IP_Address
    	document.write(this.Account_no, this.IP_Address)
}
broadband_connection (1135497, 11128550, "10.245.97.123")

//10
class ceo 
{
 	constructor (name) 
	{
    	this.name = name
    	}
}
var google_ceo = new ceo("Sundar Pichai")
var infosys_ceo = new ceo("Salil Parekh")
document.write(google_ceo.name, infosys_ceo.name)


//11
class Motor 
{
	constructor () 
	{
	this.model = "L12Yhy"
    	this.weight = 300
    	this.color = "black"
    	this.cc = 350
	}
}
var royal_enfield = new Motor ()
var ktm = new Motor ()
document.write(royal_enfield.color, ktm.cc)

//12
class person_social_media_information
{

	constructor ( ) 
	{
		this.name = "akshata"
    	}
    	account( ) 
	{
    		this.fb = "patil_aksh@facebook.com"
    		this.instagram = "aks_12389"
   		this.whatsapp = 9897961234
   		//document.write(fb, instagram ,whatsapp)
    	}
}
var details = new person_social_media_information()
details.account()
document.write(details.fb, details.whatsapp)

//13
class inventor 
{
	constructor (lang_creator, lang_creator_age) 
	{
    		this.lang_creator = lang_creator
        	this.lang_creator_age = lang_creator_age
        	// document.write(this.lang_creator)
	}
}
var C_inventor = new inventor("Dennis Ritchie",50)
var java_inventor = new inventor("James Gosling", 60)
document.write( C_inventor.lang_creator, java_inventor.lang_creator_age, java_inventor.lang_creator )

//14
class homes 
{
	constructor (home_name, home_size) 
	{
        	this.home_size = home_size
        	this.home_name= home_name
    	}
	
}
var my_home =new homes("aksh nilaya", 3000)
var rent_home =new homes("rent nilaya", 5000)
document.writeln(rent_home.home_name)

//15
class IT_company
{
	constructor (name, designataion, salary, place) 
	{
    		this.name =  name
        	this.designataion =designataion
       	 	this.salary = salary
        	this.place = place
        }
}
var company = new IT_company("intimetec","junior software engg" ,200000 , "Banglore")
document.writeln(company.name, company.designataion, company.salary, company.place)

//16
class corporation_information 	
{
	constructor (comp_name, designation, salary, location) 
	{
    		this.comp_name = comp_name
        	this.designation = designation
        	this.salary= salary
        	this.location = location
  	}
}
var intimetec = new corporation_information ("intimetec", "software engg", 100000, "Silkboard, Banglore" )
var infosys = new corporation_information ("infosys", "junior software engg", 20000, "Electronics city")
var wipro = new corporation_information ("wipro", "senior software engg", 30000, "sarjapur banglore")
document.writeln(intimetec.comp_name, infosys.designation, wipro.location)

//17
//Single responisbility principle (srp)
class employee_name_age
{

	constructor (name) 
	{
    		this.name = name
        	this.static = "static_data" //If you have constant data, here is good to use 
   	}
        display () 
	{
    		document.write(this.name, this.age, this.static)
    	}
    	set (age) 
	{
    		this.age = age
    	}
	
}
var employee= new employee_name_age("Aksh")
//var employee_1 = new employee(50)
//employee_1.display() 
//we have to assign values before displaying
employee.set(50)
employee.display()

//18
vehicle = ["honda", 200000, "150cc"]
document.write(vehicle[2])

//19
Corporate_Information = ["JVT", "Programmer",  "2.3 or 230000", "Bangalore"]
document.write(Corporate_Information[2])

//20
var Corporate_Information = ["JVT", "Programmer",  "2.3 or 230000", "Bangalore"]
for(i = 0; i < Corporate_Information.length; i++)
{
	document.write(Corporate_Information[i])
}

//21
var visiting_card_detail = ["naresh", "naresh.jvt@gmail.com", 9944860792, "jvt",  "programmer", "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075"]
for(i = 0; i < visiting_card_detail.length; i++)
{
	document.write(visiting_card_detail[i])
}
</script>