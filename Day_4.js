<script>

//Data structure
//1
let person_license_info = {
    Last_name : "kumar",
    First_name : "Pavan", 
    Middle_name :"Bijjavaram",
    Driver_license_number : "ka50201500006939",
    Driver_license_state : "karnataka",
    Driver_license_country : "india", 
    Civilian_type : "around india", 
    Employee_type : "software engineer",
    Date_of_birth : "12-07-1992", 
    City_of_birth : "rajampet"
}
person_license_info.method = function () 
{
	document.write(this.Last_name, this.Driver_license_state , this. City_of_birth ,this. Employee_type , )
}
person_license_info.method()

//2
let Appearance_information_3 = {
	Weight : 55,
    	Hight : "5.8",
    	Eye_colour : "brown", 
    	Gender : "male", 
    	Home_address : "#6/96,rajampet,kadapa.", 
   	Home_phone : 975545445,
   	Mobile : 8553577745, 
   	State : "andhrapradesh",
   	County : "india"
}
Appearance_information_3.method = function () 
{
	document.write(this.Weight, this.Hight, this.Eye_colour,this.Gender, this.Home_address,this.Home_phone,this.Mobile,this.State,this.County)
}
Appearance_information_3.method()

//3
let Vehicle_information_3= {
	Vehicle_type : "light motor vehicle- car", 
    	Colour : "red", 
   	Engine_number : "kp98gtyihhhi7797" ,
   	Chassis_number : "tc5678898335r45" ,
   	Company : "BMW"
}
Vehicle_information_3.vehicle = function () 
{
	document.write(this.Vehicle_type, this.Colour, this.Engine_number, this.Chassis_number, this.Company)
}
Vehicle_information_3.vehicle()

//4
let System_Properties = {
	Rating : "4.5",
	Processor : "Intel® Core™ i5-2450 CPU",
 	Installed_Memory_RAM: "4.00GB",
	System_Type : "64-bit Operating System",
	Pen_and_Touch : "No Pen or Touch Input is available for this Display",
	Computer_Name : "BALU-PC",
	Computer_Description : "WORKGROUP",
	Windows_Edition : "Windows 7 Ultimate",
	Windows_Product_ID: "00426-OEM-8992662-0049",
}
System_Properties.method = function () 
{
	document.write(this.Rating, this.Processor, this.Installed_Memory_RAM, this.System_Type, this.Pen_and_Touch, this.Computer_Name, this.Computer_Description, this.Windows_Edition, this.Windows_Product_ID)
    }
System_Properties.method()

//5
let Theatre = {
	Theatre_name : "PSS multiplex", 
   	Screen : "screen 3", 
    	movie_name : "JVT [ C,CPP]", 
    	movie_certification : "U",
    	seat_type : "first class", 
    	price_per_ticket : "Rs.1050.00", 
   	Number_of_tickets : 5,
    	seat_numbers : "c1,c2,c3,c4,c5", 
    	Total_amount : "Rs.750.00"
}
Theatre.method = function () 
{
	document.write (this.Theatre_name, this.Screen, this.movie_name, this.movie_certification, this.seat_type,this.price_per_ticket,this.Number_of_tickets, this.seat_numbers, this.Total_amount)
}
Theatre.method()

//6
let Creating_Google_Account = {
	First_Name : "venkatesh",
	Last_Name : "d b",
	Choose_Username : "jvt",
	Creat_a_Password : "balu",
	Confirm_Your_Password : "balu",
	Birthday : "2-6-1986",
	Gender : "male",
	Mobile : 9900367097,
	Your_current_email_address : "venkatesh.db@gmail.com"
}
Creating_Google_Account.method = function () 
{
	document.write(this.First_Name, this.Last_Name, this.Choose_Username, this.Creat_a_Password, this.Confirm_Your_Password, this.Birthday, this.Gender, this.Mobile, this.Your_current_email_address)
}
Creating_Google_Account.method()

//7
let Health_care_Blood_test = {
	Patient_Name: "Sathish",
	Patient_ID : 10567890890,
	Patient_phone: 044222738,
	Bill_no: 56725,
	Age:34,
	Date_of_Birth:"15/05/1991",
	Gender :"Male",
	Fasting:"Yes",
	Patient_Address: "7f,kaveri road, velur.",
	Room_No: "105",
	Date_of_time_Collected_blood : "08/09/15 and 08:15",
	Enter_date:"08/09/15",
	Date_and_Time_Respond: "08/09/15 and 09:16"
}
Health_care_Blood_test.method = function () 
{
	document.write(this.Patient_Name, this.Patient_ID, this.Date_of_Birth, this.Room_No,this.Date_and_Time_Respond)
}
Health_care_Blood_test.method()

//8
let Banking_SBI_statement = {
	Bank_Name : "SBI Bank",
	Date: "29/05/14",
	Time: "19:48",
	ATM_No : "SJNBL48",
	CARD_No: "xxxx xxxxx xxxx 0516",
	BRANCH_NAME: "Bangalore Main Branch",
	Txn_No :"2907",
	Response_code : 072,
	With_Drawl : "500.00",
	From_Acount : "xxxxxxxxxx05 xx01",
	Mod_RS : "0.00",
	Available_Bal_Rs: "1000.00",
	Website : "www.statebankof india.com",
    }
Banking_SBI_statement.method = function () 
{
	document.write(this.CARD_No, this.BRANCH_NAME, this.From_A, this.Website)
}
Banking_SBI_statement.method()

//9
let  computer_ups_specifications= {
	model: "exide-digital600", 
        ip_voltage : "230v ac",
        frequency : "50hz o/p", 
        voltage : "230v ac" ,
        battery_type : "sealed maintenance free", 
        battery_capacity : "12volt 7Ah", 
        battery_backup : "12 to 20 mints", 
        recharge_time : "5 to 6 hours", 
        weight : "6.1 kg"
    } 
computer_ups_specifications.method = function () 
{
	document.write(this.model, this.battery_type, this.battery_capacity)
}
computer_ups_specifications.method()

//10
let  visiting_card_details= {
	name : "naresh",
        mail_id : "naresh.jvt@gmail.com",
        contact_no : "+91 9944860792", 
        company_name : "jvt",
        designation : "programmer", 
        address : "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.",
        }
visiting_card_details.method = function () 
{
	document.write(this.mail_id, this.address)
}
visiting_card_details.method()

//11
let Electric_bill_paid_via_netbanking = {
	website : "www.tnebnet.org", 
   	password : "1234567", 
    	consumer_number : 23456123, 
    	Billing_status : "paid/unpaid", 
    	mode_of_payment : "netbanking", 
   	choose_bank : "sbi" ,
    	user_name : "kumar007", 
    	password : 1234567, 
    	Transaction_no : "18cv21828578437", 
    	payment_status: "successful"
    }
Electric_bill_paid_via_netbanking.method = function () 
{
	document.write(this.consumer_number, this.mode_of_payment, this.payment_status)
}
Electric_bill_paid_via_netbanking.method()

//12
let Library = {
	Book_ID: 12345634,
	Book_name: "C Programming",
	Book_Author:" Dennis Ritche",
	Issue_Date: "14/01/2012",
    	Due_Date: "13/02/2012",
	ID_No: "2008Ec027",
	Name: "Saravanan",
	Return_on: "25/02/2012",
	Fine: 12
}
Library.method = function ()
{
	document.write(this.Book_Author, this.ID_No,this.Return_on)
} 
Library.method()

//13
let speed_Post = {
	Post_office_Details: "New Thipasundra<423203>",
	tracking_Number : "EM423395510IN",
	Counter_No : 1,
	op_code :012,
	From_address : "xxxxxx",
	To_Address : "xxxxxx",
	wgt : "20grms",
	Amt : "39.00",
	dateandTime : "08/04/2013 16:01",
	Taxes : "Rs.4.00"
}
speed_Post.method = function () 
{
	document.write(this.tracking_Number, this.dateandTime)
} 
speed_Post.method()

//14
let Appearance_information = {
		Weight : 55,
    	Hight : "5.8",
    	Eye_colour : "brown", 
    	Gender : "male", 
    	Home_address : "#6/96,rajampet,kadapa.", 
    	Home_phone : 975545445,
    	Mobile : 8553577745, 
    	State : "andhrapradesh",
    	County : "india"
}
Appearance_information.method = function () 
{
	document.write(this.Weight, this.Hight, this.Eye_colour,this.Gender, this.Home_address,this.Home_phone,this.Mobile,this.State,this.County)
}
Appearance_information.method()

//15
let mail_sent_details = {
	from : "Siva Prasad <kasi.sivap@gmail.com>",
    	to: "D B Venkatesh <venkatesh.db@gmail.com>",
    	date : "Fri, Nov 27, 2015 at 12:05 AM"
}
//document.write(mail_sent_details .from)
mail_sent_details .method = function () 
{
document.write(this.from, this.method)
}
mail_sent_details .method()

</script>
