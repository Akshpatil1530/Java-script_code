<script>

//1
class flowers 
{
	constructor (rose, lilly) 
	{
    		this.jasmin = 40
    		this.rose = rose
        	this.lilly = lilly
	}
}
var art_flower = new flowers(20, 30)
document.write(art_flower.rose, art_flower.l)

//2
class inventor 	
{
	constructor (lang_creator, lang_creator_age) 
	{
    		this.lang_creator = lang_creator
        	this.lang_creator_age = lang_creator_age
       		//document.write(this.lang_creator)
	}
}
var C_inventor = new inventor("Dennis Ritchie",50)
var java_inventor = new inventor("James Gosling", 60)
document.write( C_inventor.lang_creator, java_inventor.lang_creator_age, java_inventor.lang_creator )

//3
class net_request_connection 
{
	constructor (Broadband_User_ID, IP_Address ) 
	{
    		this.Broadband_User_ID = Broadband_User_ID
        	this.IP_Address = IP_Address
   	}
    	net_usage_data (Total_MB_downloaded, Mobile_downloaded_speed) 
	{
    		var Mobile_upload_Speed = "32.06 mbps"
        	this.Total_MB_downloaded = Total_MB_downloaded
       	 	this.Mobile_downloaded_speed = Mobile_downloaded_speed
    	}
    	display ( )
    	{
    		document.writeln(this.Broadband_User_ID, this.IP_Address)
       		document.writeln(this.Total_MB_downloaded, this.Mobile_downloaded_speed)
    	}
}
var net_details = new  net_request_connection(11128550, "10.245.97.123")
net_details.net_usage_data( 80, "30.05 mbps")
net_details.display()

//4
//Validation for data usage
class net_req_connection_1
{
	onstructor (Broadband_User_ID, IP_Address ) 
	{
    		this.Broadband_User_ID = Broadband_User_ID
        	this.IP_Address = IP_Address
   	}
    	net_usage_data (Total_MB_downloaded, Mobile_downloaded_speed) 
	{
    		var Mobile_upload_Speed = "32.06 mbps"
        	this.Total_MB_downloaded = Total_MB_downloaded
       	 	this.Mobile_downloaded_speed = Mobile_downloaded_speed
        	if (Total_MB_downloaded >= 80 )
        	{
        		document.write("You have exhausted your daily data")
        	}
        	else
        	{
        		document.write("Invalid")	
        	}
    	}
    	display ( ) 
	{
    		document.writeln(this.Broadband_User_ID, this.IP_Address)
	        document.writeln(this.Total_MB_downloaded, this.Mobile_downloaded_speed)
    	}
}
var net_details = new  net_req_connection_1(11128550, "10.245.97.123")
net_details.net_usage_data( 80, "30.05 mbps")
net_details.display()

//5
class person_appearance_info 
{
 	constructor (weight, hight, Eye_color, gender) 
	{
 		this.weight=  weight
        	this.hight = hight
        	this.Eye_color= Eye_color
        	this.gender =  gender       
 	}
	contact_details (home_address, home_phone, mobile, state, country) 
	{
    		this.home_address = home_address 
        	this.home_phone = home_phone
        	this.mobile =  mobile
        	this.state = state
        	this.country = country
   	 }
    	display_1 () 
	{
    		document.write(this.hight, this.gender)
        	//document.write(this.home_address)
   	 }    
}
var personal_appearance=  new person_appearance_info(60, "5.8", "brown", "male")
personal_appearance.contact_details = ("#6/96,rajapet,kadapa", 975545445, 8889994440, "Andrapradesh", "India") 
personal_appearance.display_1()

//6
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

//7
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
		this.driver_license_no = driver_license_no
        	this.Driver_license_state = Driver_license_state
        	this.Driver_license_contry =Driver_license_state
        	this.Civilian_type = Driver_license_state
       	 	this.Employee_type = Employee_type
        	this.Date_of_birth = Date_of_birth
        	this.City_of_birth = City_of_birth
        }
       	display()
        {
         	document.writeln(this.first_name, this.last_name, this.middle_name)
        	document.writeln(this.Date_of_birth, this.Civilian_type, this.last_name, this.driver_license_no,  this.City_of_birth, this.Driver_license_contry, this.Driver_license_contry)
        }
}
var person_name = new license("pavan", "kumar", "bujjivan")
person_name.drivers_details ("ka50201500006939", "karnataka", "india", "around india", "software engineer", "12-07-1992","rajampet" )
person_name.display()

//8
class person_appearance_info 
{
 	constructor (weight, hight, Eye_color, gender) 
	{
 		this.weight=  weight
        	this.hight = hight
        	this.Eye_color= Eye_color
        	this.gender =  gender       
 	}
	contact_details (home_address, home_phone, mobile, state, country) 
	{
    		this.home_address = home_address 
        	this.home_phone = home_phone
        	this.mobile =  mobile
        	this.state = state
        	this.country = country
   	 }
    	display_1 () 
	{
    		document.write(this.hight, this.gender)
        	document.write(this.home_address)
            	if(this.weight  > 60)
            	{
            		document.write("over weight")
            	}
           	 else 
            	{
            		document.write("Balanced weight")
            	}
            	if(this.mobile == 8889994440)
            	{
         		document.write("valid Number")
            	}
            	else
            	{
        		document.write("Invalid Number")
            	}
   	 }    
}
var personal_appearance=  new person_appearance_info(60, "5.8", "brown", "male")
personal_appearance.contact_details("#6/96,rajapet,kadapa", 975545445, 8889994440, "Andrapradesh", "India") 
personal_appearance.display_1()


//9
class Online_shopping 
{
	constructor (Brand, Product_Code, Color, Size, Material,Occasion, Pattern, Sleeve, Neck_Type, fit,Gender ) 
	{
    		this.Brand = Brand
        	this.Product_Code = Product_Code
        	this.Color = Color
        	this.Size = Size
        	this.Material = Material
       	 	this.Occasion = Occasion
        	this.Pattern = Pattern
        	this.Sleeve = Sleeve
        	this.Neck_Type = Neck_Type
        	this.fit = fit
        	this.Gender = Gender     
       }
       shipping_details (Estimated_Arrival, Return_Policy)
       {
 		this.Estimated_Arrival = Estimated_Arrival
        	this.Return_Policy = Return_Policy
       }
       display () 
       {
       		document.write(this.Return_Policy, this.Estimated_Arrival)
    	 	document.write( this.Material, this.Return_Policy, this.Estimated_Arrival)
       }
}
var shirt_online_shop  = new Online_shopping("Scott International", "APPSCOTT-INTERNSWIT610835D77A44", "Black", "s", "Cotton", "Casual", "Solid", ": Full Sleeves", "Hooded", "Slim", "Men")
shirt_online_shop.shipping_details("9 days", "Seller will accept returns within a 15 days from date of delivery of the item")
shirt_online_shop.display()

//10
class vehicle_information 
{
    constructor (Vehicle_type, Colour, Company) 
    {
    	this.Vehicle_type = Vehicle_type
    	this.Colour = Colour
    	this.Company = Company
    }
    engine (Engine_number, Chassis_numbe) 
    {
     	this.E = Engine_number
     	this.C = Chassis_numbe 
    }
    display () 
    {
    	document.write(this.Vehicle_type, this.Colour, this.Company )
        document.write(this.E, this.C )
    }
}
var vehicle= new vehicle_information( "light motor vehicle- car", "red", "BMW" )
vehicle.engine("kp98gtyihh457797", "tc5678898335r45")
vehicle.display()

//11
class visiting_card_details
{
	constructor (name,mail_id,contact_no,company_name) 
	{
    		this.name = name
    		this.mail_id = mail_id
        	this.contact_no = contact_no
        	this.company_name = company_name 
    	}
    	contact(address) 
	{
    		this.address = address
    	}
    	display() 
		{
    			document.write(this.company_name, this.address)
            		if (this.mail_id == "naresh.jvt@gmail.com")
            		{
            			document.write("Valid email ID")
            		}
           		 else
            		{
            			document.write("Invalid email ID")
            		}
            		if (this.contact_no == 9944860792)
            		{
            			document.write("Valid number")
           		}
            		else
           		{
            			document.write("Invalid number")
            		}
    		}
}
var visiting = new visiting_card_details("naresh", "naresh.jvt@gmail.com", 9944860792, "jvt" )
visiting.contact("230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.230/3 2nd floor hal3rd stage new thippasandra bangalore-560075.")
visiting.display()

//12
class Electric_bill_paid_via_netbanking_1 
{
	constructor (website,password,consumer_number, Billing_status, mode_of_payment) 
	{
    		this.website = website
        	this.password =password
        	this.consumer_number = consumer_number
        	this.Billing_status = Billing_status
        	this.mode_of_payment = mode_of_payment
    	}
    	person_billing_statement (choose_bank,username, password, Transaction_no, payment_status ) 
	{
    		this.choose_bank = choose_bank
        	this.username = username
       	 	this.password = password
        	this.Transaction_no = Transaction_no
        	this.payment_status = payment_status
    	}
 	display()  
	{
    		document.write( this.consumer_number,  this.Transaction_no,  this.consumer_number )
    	}
}
var Electrical_bill  = new Electric_bill_paid_via_netbanking_1 ("www.tnebnet.org", 987655, 23456123, "paid/unpaid", "netbanking"  )
Electrical_bill.person_billing_statement("sbi", "kumar00", 123456, "18cv21828578437", "successful")
Electrical_bill.display()

//13
class Vehicle_Registration_Certificate_Book 
{
	constructor (Registration_Number, Owner_Name,S_W_D, Permanent_Addres, Temporary_Address, Dealer,Classis_No) 
	{
		this.Registration_Number = Registration_Number
      		this.Owner_Name = Owner_Name
        	this.S_W_D = S_W_D
       	 	this.Permanent_Addres = Permanent_Addres
        	this.Temporary_Address = Temporary_Address
        	this.Dealer = Dealer
        	this.Classis_No = Classis_No
        	this.Engine_No = "0G3N72505757"
		this.Class_of_Vehicle = "LMV (CAR)"
		this.maker_Name = "Maruthi SuzUKI India LTD"
		this.No_of_Cylinder = 3
		this.Weight_KG =  740
		this.wheel_Base = 2360
		this.Seating_Capacity = 5
		this.Fuel = "Petrol"
		this.Cubic_cylinder = 796 
	}
    	licence(Licence_which_state_provide, DL_NO, Name, S_D_W_of, Address, DOB) 
	{
    		this.Licence_which_state_provide = Licence_which_state_provide
        	this.DL_NO = DL_NO
        	this.Name = Name
        	this.S_D_W_of = S_D_W_of
        	this.Address = Address
       		this.DOB = DOB
    	}
   	 display ()
    	{
    		document.write( this.DL_NO,this.maker_Name, this.Registration_Number )
    	}
}
var vehicle_regiatration = new Vehicle_Registration_Certificate_Book("TN 22 CY 2917", "Sachin", "Sirinivasan", "#6/96,rajampet,kadapa.", "#4/79, silk board, banglore", "Murugan Vehicles& Services Limited", 5793603 )
vehicle_regiatration.licence("karnatak","TN-41230120012921", "xxxxx", "yyyyyy", "#4/79, silk board, banglore", "15-10-2000"  )
vehicle_regiatration.display()

//14
class person_bio
{
	static place = "rajimpet"
	constructor()
	{
		this.lastname = "kumar"
		this.firstname= "Pavan"
		this.middlename= "bijjavaram"
	}
	get()
	{
		this.dob= "12.07.1992"
		document.writeln(this.dob, this.middlename, this.firstname, this.lastname)
	}
	static software()
	{
		document.write(person_bio.place)
	}
}
let developer = new person_bio()
developer.get()
person_bio.software()

//15
//clss using static data
class Laptop_Specification 
{
	static model = "LGp430"
	constructor (os, Processor, RAM, Screen, Resolution) 
	{
    		this.os = os
        	this.Processor = Processor
       	 	this.RAM = RAM
        	this.Screen = Screen
       	 	this.Resolution = Resolution
    	}
     	Laptop_details(Weight, Storage, Graphics, Networking, Battery_life ,Cost) 
	{
        	this.Weight = Weight
       	 	this.Storage = Storage
        	this.Graphics = Graphics
        	this.Networking = Networking
        	this.Battery_life = Battery_life
        	this.Cost = Cost
        }
        static get () 
	{
        	document.write(Laptop_Specification.model)
      	}
        display () 
        {
        	document.write(this.RAM, this.Networking, this.Cost)
        }
}
let Laptop = new Laptop_Specification("Windows 7 home base", "Premium or professional", "Second Generation Intel Core i3,i5 or i7 processor", "upto 80GB", "14.0 inch HD-LCD -backlit",  "1366*768" )   
Laptop.Laptop_details("4.28 pound", "320GB", "Intel HD Graphics",  "802.11 b/g/n,bluetooth 3.0", "6-cell Battery", 5000)
Laptop_Specification.get()
Laptop.display () 

//16
class Electricity_Bill 
{
	static select_Account = "1-121-008-54"
    	constructor () 
	{
    		this.Billing_date = "20/06/201"
        	this.SubDivision = 1
        	this.RR_No = 12100854
    	}
    	cadidate () 
	{
    		this.Name = "XXXXX"
		this.Address = "#6/96,rajampet,kadapa."
		this.Reading = 42260
		this.Due_Date = "21/06/2012"
		this.units_consumed = 1310
		this.Bill_Amount_in_RS = 6498
		this.payment_Date = "30/06/2012"
		this.Paid_ammount_in_rs = 6498
    	}
   	static bill()
    	{
    		document.write(Electricity_Bill.select_Account)
    	}
}
var billing = new Electricity_Bill
billing.cadidate()
Electricity_Bill.bill()

//17
class person_data 
{
	static place = "rajimpet"
	constructor()
	{
		this.lastname = "kumar"
		this.firstname= "Pavan"
		this.middlename= "bijjavaram"
	}
	get()
	{
		this.dob= "12.07.1992"
		document.writeln(this.dob, this.middlename, this.firstname, this.lastname)
	}
	static software()
	{
		document.write(person_data.place)
	}
}
let developers = new person_data()
developers.get()
person_data.software()

//18
class tv_details_specification 
{
	constructor (name)
	{
    		this.name = name   
   	}
    	tv_model_specification (Model, LED_lighting,Sizes ,Type_of_240_Hz ,Wireless_HDMI , USB,Built_in_videoservice , price_in_rs) 
	{
    		this.Model = Model
		this.LED_lighting =LED_lighting
		this.Sizes = Sizes
		this.Type_of_240_Hz = Type_of_240_Hz
		this.Wireless_HDMI = Wireless_HDMI
		this.USB = USB
		this.Built_in_videoservice = Built_in_videoservice
		this.price_in_rs = price_in_rs
   	 }
   	 display () 
	 {
    		document.write( this.name ,this.USB ,this.Wireless_HDMI)
    	}
}
var tv = new tv_details_specification("samsung")
tv.tv_model_specification("LG55LHX",  "acklight w/Local Dimming","55 inches" ,  "scanning Backlight (240 HZ “effect”)",  "yes" , "USB 2.0 (pictures, music,videos)", "youtube" , "55000" )
tv. display ()

//19
class Vehicle_Registration_Certificate 
{
 	constructor ( Owner_Name,S_W_Do  ,Permanent_Address ,Temporary_Address) 
	{
    		this.Owner_Name = Owner_Name
		this.S_W_Do =  S_W_Do
		this.Permanent_Address = Permanent_Address
        	this.Temporary_Address = Temporary_Address
    	}
    	Vehicle_details(Registration_Number, Classis_No, Engine_No, Class_of_Vehicle, maker_Name, No_of_Cylinder, Weight_KG, wheel_Base, Seating_Capacity, Fuel, Cubic_cylinder) 
	{
    		this.Registration_Number = Registration_Number
       		this.Classis_No = Classis_No
		this.Engine_No =  Engine_No
		this.Class_of_Vehicle = Class_of_Vehicle
	    	this.maker_Name = maker_Name
 		this.No_of_Cylinder = No_of_Cylinder
 		this.Weight_KG = Weight_KG
		this.wheel_Base =  wheel_Base
		this.Seating_Capacity = Seating_Capacity
		this.Fuel = Fuel
 		this.Cubic_cylinder =Cubic_cylinder
        	if (Registration_Number == "TN 22 CY 2917")
        	{
        		document.write(this.Classis_No,this.No_of_Cylinder,)
       		}
       		else 
       		{
       			document.write("Invalid vehicle registartion number")
       		}
    }
    display() {
    	document.write(this.Owner_Name,this.Seating_Capacity,this.Class_of_Vehicle)
    }
}
var vehicle_registation = new Vehicle_Registration_Certificate("Sachin", "Sirinivasan", "Gacchinakatty colony, Vijayapur", "silk board banglore" )
vehicle_registation.Vehicle_details( "TN 22 CY 2917",  5793603 , "0G3N72505757", " LMV (CAR)"  , " Maruthi SuzUKI India LTD" , 3,  740, 2360, 5, "Petrol", 796)
vehicle_registation.display()

//20 
class lic_policy 
{
 	constructor ( Branch_Code) 
	{
			this.Branch_Code = Branch_Code	
    }
    	lic_policy_details (Date,Address_of_Branch_office, Total_cost,mr_Mrs ,Policy_No,Doc ,Due_Date ,Premium_amount ,Late_Fee,Loan_interest ,Total_Rs, Next_Due) 
	{
    	this.Date = Date
		this.Address_of_Branch_office = Address_of_Branch_office
		this.Total_cost= Total_cost
	 	this.mr_Mrs = mr_Mrs
		this.Policy_No = Policy_No
		this.Doc  = Doc
       	this.Due_Date = Due_Date
		this.Premium_amount = Premium_amount
		this.Late_Fee = Late_Fee
		this.Loan_interest =Loan_interest
		this.Total_Rs = Total_Rs
		this.Next_Due = Next_Due
    	}   	
        display () 
		{
        	document.write(this.Address_of_Branch_office, this.Branch_Code )
            if (this.Total_cost == 6713)
            {
            	document.write("total bill paid")
            }
            else
            {
            	document.write("not paid")
            }
        }
 }

var policy = new lic_policy(309)
policy.lic_policy_details("07/11/2013-12:51", "BTM layout", 6713,"6713.00" ,364164915 ,"02/04/2009" , "04/13","6426.00" , "287.20",  "Due 01/2019 to 02/2021", "6713.20" , "04/2014")
policy. display ()

//21
//Data structure
let bio_of_person = {
	from : "Siva Prasad <kasi.sivap@gmail.com>",
    to: "D B Venkatesh <venkatesh.db@gmail.com>",
    date : "Fri, Nov 27, 2015 at 12:05 AM"
    }
bio_of_person.method = function () {
	document.write(this.from, this.method)
}
bio_of_person.method()

//22
let corporate_Information = {
		Company_name : "JVT",
		Designation: "Programmer",
		Salary : "2.3 or 230000",
		Location : "Bangalore"
}
corporate_Information.method = function () {
	document.write(this.Designation)
}
corporate_Information.method(this.Designation)

</script>