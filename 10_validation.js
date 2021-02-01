//1
//Function validtaion
function usage_net(TotalMBdownloaded,MobiledownloadSpeed)
{
	MobileuploadSpeed = "32.06 mbps"
    	if(TotalMBdownloaded >= 100)
   	{
    		return "usage is completed"
   	}
   	else
   	{
   		document.writeln(TotalMBdownloaded,MobiledownloadSpeed)
   	}
}
var result = usage_net(111,"34.06mbps")
document.write(result)

//2
//Different type of class using function 

var broadband_connection = (function()
{
	function broadband_connection(Account_No, Broadband_User_ID, IP_Address)
    {
    	this.Account_No = Account_No
        this.Broadband_User_ID = Broadband_User_ID
        this.IP_Address = IP_Address
    }
    broadband_connection.prototype.account_verification = function ()
    {
    	if (this.Account_No == 1135498 )
        {
        	document.writeln("Account no exist")
        }
        else
        {	
        	document.writeln("Account number does not exist , Please enter correct account number")
        }
    }
    broadband_connection.prototype.Broadband_User_ID_verification = function()
    {
    
    }
    broadband_connection.prototype.display = function()
    {
    	document.write(this.Account_No,  this.Broadband_User_ID, this.IP_Address)
       
    }
    return broadband_connection;
}());
var internet = new broadband_connection (1135498, 11128550, "10.245.97.123")
internet.display()
internet.account_verification()

//3
//Class validation

class license
{
	constructor (first_name, middle_name, last_name) 
	{
         this.first_name = first_name
         this.middle_name = middle_name
        this.last_name = last_name
    }
    drivers_details (driver_license_no, Driver_license_state, Driver_license_contry,Civilian_type, Employee_type,Date_of_birth, City_of_birth   ) 
	{	
    	if (this.first_name == "pavan" && this.middle_name == "kumar" && this.last_name == "bujjivan")
        {
			this.driver_license_no = driver_license_no
            this.Date_of_birth = Date_of_birth
        	if (this.driver_license_no == undefined )
            {
            	document.write("Please enter the license number")
            }
            else if ( this.Date_of_birth == "12-07-1992")
            {
            	this.Driver_license_state = Driver_license_state
        		this.Driver_license_contry =Driver_license_state
        		this.Civilian_type = Driver_license_state
       			this.Employee_type = Employee_type        		
        		this.City_of_birth = City_of_birth
            	document.write("Driver licence number : " + this.driver_license_no)
            }
            else
            {
            	document.write ("Please enter licence number and DOB")
            }
         }
         else
         {
         	document.write("Entered full name was not matching")
         }
     }
}
var person_name = new license("pavan", "kumar", "bujjivan")
person_name.drivers_details ("ka50201500006939", "karnataka", "india", "around india", "software engineer", "12-07-1992","rajampet" )

//4
class gmail_verify
{
	constructor (email_id, password, enterd_password) 
    {
    	this.email_id = email_id
        this.password = password
        this.enterd_password = enterd_password
    } 
    validation ()
    {
    	if (this.email_id == undefined)
        {
        	document.write("enter mail id")
        } 
        else if (this.password == this.enterd_password)
        {
        	document.write("password match success")
        }
        else
        {
        document.write("Password did not matched. Try Again..!")
        }
    }
    display ()
    {
    	//document.write(this.email_id, this.password)
    }
}
var gmail = new gmail_verify ("akshata.patill@gmail.com", "Abcd1234&", "Abcd1234*" )
gmail.validation ()
gmail.display()

//5
class online_spping_address 
{
	constructor (name, phone) 
    {
    	this.name = name
        this.phone = phone
    }
    address_details(Address, Landmark, City, Pincode, State, Country)
    {	
    	if (this.name == undefined && this.phone == undefined)
        {
        document.write("Please enter valid name and phone number")
        }
        else
        {   
        	this.Country = Country
            if(this.Country == "india")
            {
				this.Address = Address
				this.Landmark = Landmark
				this.City = City
				this.Pincode = Pincode
				this.State = State			
        		if (this.Address == "#53, btm 2nd stage banglore" && this.Pincode == 560068)
        		{
        			document.write("Correct addresss")
        		}
        		else
        		{
        			document.write("Invalid addresss")
        		}
            }
        }
}
var online_shopping = new online_spping_address("Akshata", 9876501236)
online_shopping.address_details("#53, btm 2nd stage banglore", "near police station", "banglore", 560068, "karnataka", "india")

//6
function password (Creat_a_Password, Confirm_Your_Password)
{
	this.Creat_a_Password = Creat_a_Password
   	this.Confirm_Your_Password = Confirm_Your_Password
    //document.write(this.Confirm_Your_Password.length)
    if(this.Creat_a_Password.length == this.Confirm_Your_Password.length )
    {
    	document.write("Password lenght matched")
    }
}
password("balu", "balu")


//7
class creating_google_account
{
	constructor (First_Name, Last_Name) 
    {
    	this.First_Name = First_Name
        this.Last_Name = Last_Name
    }
    name_validation(choose_username)
    {
    	this.choose_username = choose_username
    	if (this.First_Name == undefined || this.Last_Name == undefined)
        {
        	document.write("Please enter your first name and last name")
        }
        else
        {       	
            if(this.choose_username == " ")
            {
            	document.write("Enter the username")
            }
            else
            {
            	return 1
            }
            
        }       
    }
    password_verification(Creat_a_Password, Confirm_Your_Password)
    {
    	this.Creat_a_Password = Creat_a_Password
        this.Confirm_Your_Password = Confirm_Your_Password
        //document.write(Confirm_Your_Password.length)
        if (this.Creat_a_Password.length ==  this.Confirm_Your_Password.length)
        {
        	//document.write("Password length matched")
        }
        else
        {
        	document.write("Please enter correct password")
        }
        
    } 
}
var google_account = new creating_google_account("venkatesh", "db")
google_account.name_validation("jvt")
google_account.password_verification("balu", "balu")


