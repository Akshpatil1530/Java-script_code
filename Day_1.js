<script>

//Data initialization
//Global variables

var company_name = "JVT"
var designation = "Programmer"
var salary = "2.3 or 230000"
var location = "Bangalore"
var name = "Jai Venkateswara Technologies"
var educational_Qualification = "B TECH MCA MBA BSC MSC"
var date_Of_Birth = "2/6/1988"
var communication_Address = "233/3 Ground floor new thippasandra"
var residence_Number = 08025216666
var mobile = 9900367097
var email = "venkatesh.db@gmail.com"
var total_IT_Exp = "1 years"
var skill_Relevant_Experience = "C,CPP all Lang & 1 years"
var reporting_Manager = "Venkatesh"
var pancard_no = "asu675901f"

document.write(Company_name, Designation, Salary, Location)

//1
function akshata () 
{
	var emotions = "happy"
    	//Variable(emotions) stores in stack, data("happy") stores in heap.
	var color = "fair"
	var hair = "black"
	var height = "5.4"
    	document.write(color, hair)
}
akshata ()

//2
function vehicle () 
{
	var name = "enfield"
	var color = "black"
	var weight = 350
	var cc = 350
    	document.write(name, color)
}
vehicle()

//3
function home () 
{
	//variable stores in stack, data stores in heap
	var name = "akshata nilay"
    	var size = 30*40//it will gives multiplication 
    	var rooms = 5
	document.writeln(size, rooms, name)
}
 home ()
//4
function Appearance_information ( ) 
{
	var Weight = 55 
    	var Hight = "5.8" 
    	var Eye_colour = "brown"
    	var Gender = "male" 
    	var Home_address = "#6/96,rajampet,kadapa." 
    	var Home_phone = 975545445 
    	var Mobile = 8553577745 
    	var State = "andhrapradesh"
    	var County = "india"
    	document.write(Weight,Home_address)
}
Appearance_information()

//5
function Vehicle_information () 
{
	var Vehicle_type = "light motor vehicle- car" 
    	var Colour = "red" 
    	var Engine_number = "kp98gtyihh457797" 
    	var Chassis_number = "tc5678898335r45" 
    	var Company = "BMW"
    	document.write(Vehicle_type, Engine_number)
}
Vehicle_information()

//6
function System_Propertie () 
{
	var Rating = "4.5"
	var Processor = "Intel® Core™ i5-2450 CPU"
	var Installed_Memory_RAM= "4.00GB"
	var System_Type = "64-bit Operating System"
	var Pen_and_Touch = "No Pen or Touch Input is available for this Display"
	var Computer_Name = "BALU-PC"
	var Computer_Description = "WORKGROUP"
	var Windows_Edition = "Windows 7 Ultimate"
	var Windows_Product_ID = "00426-OEM-8992662-00"
    	document.write(Windows_Product_ID, Pen_and_Touch )
}
System_Propertie()

//7
function home (name,size,rooms) 
{
	document.write(name, size, rooms)
}
home("aksh", 30*50, 6)

//8
function home_1 (name,size) 
{
	var rooms = 7
	document.write(name, size, rooms)
}
home_1 ("akshata_home", 60*60)
//Functions are Reusable code
home_1 ("sudha_nilaya", 80*100)

//9
function System_Propertie ( Rating, Processor, Installed_Memory_RAM,Installed_Memory_RAM ,System_Type ,Pen_and_Touch ,Computer_Name ,Windows_Edition,Windows_Product_ID)
{
	document.write(Rating, Processor, Installed_Memory_RAM,Processor,Installed_Memory_RAM ,System_Type ,Pen_and_Touch ,Computer_Name ,Windows_Edition, Windows_Product_ID)    
}
System_Propertie("4.5", "Intel® Core™ i5-2450 CPU", "4.00GB", "64-bit Operating System", "No Pen or Touch Input is available for this Display", "BALU-PC", "WORKGROUP", "Windows 7 Ultimate", "00426-OEM-8992662-00")


//10
function Corporate_Information () 
{
	var Company_name = "JVT"
	var Designation = "Programmer"
	var Salary = "2.3 or 230000"
    	var Location = "Bangalore"
    	document.write(Company_name, Designation, Salary, Location)
}
Corporate_Information ()

//11
function temple_darshan_details() 
{
	var Ticket_Type = "Special Entry Darshan"
	var Date = "Dec 1st"
	var Day = "Tuesday"
	var Time = "3:30 Am"
	var Per_Slot_Tickets = 2000
	var Booking_No = "IS151110080016"
	var Name_of_the_Pilgrim = "venkatesh"
	var Order_No = 010600013554
	var Email = "venkateshprofessional7@gmail.com"
	var Amount_in_figures_Rs = 220
	var Proof_of_ID =  "Aadhaar Card 733498928758"
	var Booked_Date_Time = "11-06-2015 11:36:46"
	var No_of_Persons = 1
	var Name_of_the_Seva_Darshan = "Archana"
	var Reporting_Time = "4:00 AM"
	var Performance_Date_Time = "12-01-2015 AM 4:30:00"
	var Privileges_to_the_Seva = "Two Small Laddu"
	var Booked_Time = "11:36:46"
	var Accommodation_Type = "Rs 500 Tirumala"
	var Available = 350
	var No_of_Tickets = 1
	var Rate = "50 to 2000"
    document.write(Ticket_Type, Name_of_the_Seva_Darshan, Per_Slot_Tickets)
}
temple_darshan_details() 
</script>
