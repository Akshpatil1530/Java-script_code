//Another type of writting class
//1
var Corporate_Information = (function ()
{
	function company_details(Company_name, Designation , Salary, Location) {
    this.Company_name = Company_name
    this.Designation = Designation
    this.Salary = Salary
    this.Location = Location
    }
	company_details.prototype.display = function()
    {
    	document.writeln(this.Company_name, this.Designation, this.Designation, this.Location)
    }
    return company_details;
}());
let company = new Corporate_Information("JVT", "Programmer", "2.3 or 230000","Bangalore")
company.display()

//2
var temple_darshan_details= (function ()
{
	function temple_darshan_details (Ticket_Type, Date, Day, Time, Per_Slot_Tickets, Booking_No, Name_of_the_Pilgrim, Order_No, Email, Amount_in_figures_Rs,Proof_of_ID, Booked_Date_Time, No_of_Persons,  Name_of_the_Seva_Darshan , Reporting_Time, Performance_Date_Time, Privileges_to_the_Seva, Booked_Time, Accommodation_Type, Available, No_of_Tickets, Rate)   
    { 
    	this.Ticket_Type = Ticket_Type
    	this.Date  = Date 
    	this.Day  = Day 
    	this.Time  = Time 
    	this.Per_Slot_Tickets  = Per_Slot_Tickets 
    	this.Booking_No = Booking_No 
    	this.Name_of_the_Pilgrim  = Name_of_the_Pilgrim 
    	this.Order_No = Order_No 
    	this.Email  = Email 
    	this.Amount_in_figures_Rs = Amount_in_figures_Rs 
    	this.Proof_of_ID  = Proof_of_ID 
    	this.Booked_Date_Time = Booked_Date_Time 
    	this.No_of_Persons = No_of_Persons 
    	this.Name_of_the_Seva_Darshan  = Name_of_the_Seva_Darshan 
    	this.Reporting_Time  = Reporting_Time 
    	this.Performance_Date_Time   = Performance_Date_Time 
    	this.Privileges_to_the_Seva  = Privileges_to_the_Seva 
    	this. Booked_Time = Booked_Time 
    	this.Accommodation_Type  = Accommodation_Type 
    	this. Available= Available
    	this.No_of_Tickets  = No_of_Tickets 
    	this.Rate =Rate 
    }
    temple_darshan_details.prototype.display = function ()
    {
    	document.write(this.Ticket_Type, this.Name_of_the_Seva_Darshan, this.Per_Slot_Tickets)
	}	
    return temple_darshan_details;
}());
let temple = new temple_darshan_details("Special Entry Darshan", "Dec 1st", "Tuesday", "3:30 Am",2000 , "IS151110080016", "venkatesh", 010600013554 , "venkateshprofessional7@gmail.com",220, "Aadhaar Card 733498928758","11-06-2015 11:36:46", 1,"Archana", "4:00 AM","12-01-2015 AM 4:30:00" ,"Two Small Laddu" , "11:36:46", "Rs 500 Tirumala", 350, 1, "50 to 2000")
temple.display();

//3
//3
var broadband_connection = (function()
{
	function broadband_connection(Account_No, Broadband_User_ID, IP_Address)
    {
    	this.Account_No = Account_No
        this.Broadband_User_ID = Broadband_User_ID
        this.IP_Address = IP_Address
    }
    broadband_connection.prototype.display = function()
    {
    	document.write(this.Account_No,  this.Broadband_User_ID, this.IP_Address)
    }
    return broadband_connection;
}());
var internet = new broadband_connection (1135497, 11128550, "10.245.97.123")
internet.display()

//4
var mail_details = (function () 
{
	function mail_details (from , to, date, subject, mailed_by, signed_by)
	{	
		this.from = from
        this.to = to
        this.date = date
   		this.subject = subject
        this.mailed_by = mailed_by
        this.signed_by = signed_by
	}
    mail_details.prototype.display = function()
    {
    	document.write(this.from , this.subject, this.signed_by,this.to)
    }
    return mail_details
}
());
let message = new mail_details("Siva Prasad <kasi.sivap@gmail.com>", "D B Venkatesh <venkatesh.db@gmail.com>", "Fri, Nov 27, 2015 at 12:05 AM", "Request to forward the Resumes", "gmail.com", "gmail.com")
message.display()

//5
var license = (function ()
{
	function license(Last_name, First_name, Middle_name, Driver_license_number, Driver_license_state, Drivers_license_country,Civilian_type, Employee_type,Date_of_birth, City_of_birth)
	{
	this.Last_name = Last_name
	this.First_name = First_name
	this.Middle_name = Middle_name
	this.Driver_license_number = Driver_license_number
	this.Driver_license_state = Driver_license_state
	this.Drivers_license_country = Drivers_license_country
	this.Civilian_type = Civilian_type
	this.Employee_type = Employee_type
	this.Date_of_birth = Date_of_birth
	this.City_of_birth = City_of_birth
    }
    license.prototype.display = function ()
    {
    	document.write(this.Driver_license_state , this.Employee_type)
    }
    return license;
}());
var driver = new license("kumar", "pavan", "Bijjavaram", "ka50201500006939", "karnataka", "india", "around india", "software engineer","12-07-1992", "rajampet")
driver.display()

