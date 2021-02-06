//Inheritance
//1

class Corporate_Information {
    constructor (Company_name , Designation, Salary, Location) 
    {
    	this.Company_name = Company_name;
		this.Designation = Designation;
		this.Salary = Salary;
		this.Location = Location;
	}
    display()
    {
    	document.write(this.Company_name, this.Location)
    }
}
class employee_details extends Corporate_Information 
{

	constructor (Name, Educational_Qualification , Date_Of_Birth, Communication_Address, Residence_Number,  Mobile, Email, Total_IT_Exp , Skill_and_Relevant_Experience,Reporting_Manager, PANCARD_NO) 
    {
    	super(Name, Educational_Qualification , Date_Of_Birth, Communication_Address, Residence_Number,  Mobile, Email, Total_IT_Exp , Skill_and_Relevant_Experience,Reporting_Manager, PANCARD_NO)
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
	display()
    {
   
    	document.write(this.Email, this.Residence_Number, this.Communication_Address)
    }

}
var person_details = new employee_details ("JVT", "Programmer", "2.3 or 230000","Bangalore", "Jai Venkateswara Technologies", "B TECH MCA MBA BSC MSC", "2/6/1988", "233/3 Ground floor new thippasandra", 08025216666, 9900367097, "venkatesh.db@gmail.com", "1 years", "C,CPP all Lang & 1 years", "Venkatesh", "asu675901f")
person_details.display()

//2
class broadband_Information 
{
    constructor (Account_No , Broadband_User_ID, IP_ddress) 
    {
    	this.Account_No = Account_No;
		this.Broadband_User_ID = Broadband_User_ID;
		this.IP_ddress = IP_ddress;
	}
    display()
    {
    	document.write(this.Account_No)
    }
}

class network_Information extends  broadband_Information
{

	constructor (Total_MB_downloaded, Mobile_download_Speed, Mobile_upload_Speed) 
    {
    	super(Total_MB_downloaded, Mobile_download_Speed, Mobile_upload_Speed)
    	this.Total_MB_downloaded = Total_MB_downloaded
		this.Mobile_download_Speed = Mobile_download_Speed
		this.Mobile_upload_Speed = Mobile_upload_Speed		
    }
	display()
    {   
    	document.write(this.Total_MB_downloaded)
    }

}
var person_details = new network_Information(1135497, 11128550, "10.245.97.123", "21.26 GB", "30.05 mbps", "32.06 mbps")
person_details.display()

//3
class network_connection 
{
    constructor(Total_MB_download, Mobile_upload_Speed) {
        this.Total_MB_download = Total_MB_download;
        this.Mobile_upload_Speed = Mobile_upload_Speed;
    }
}
class network extends network_connection {
    constructor(Total_MB_download, Mobile_upload_Speed, Mobile_download_Speed) {
        super(Total_MB_download, Mobile_upload_Speed);
        this.Mobile_download_Speed = Mobile_download_Speed;
    }
    display() {
        console.log(this.Mobile_download_Speed);
    }
}
let connection = new network("21.26 GB", "30.05 mbp", "32.06 mbps");
connection.display();

//4
class person_appearance_info 
{
 	constructor (weight, hight, Eye_color, gender) 
	{
 		this.weight=  weight
        	this.hight = hight
        	this.Eye_color= Eye_color
        	this.gender =  gender       
 	}
}
class contact_details extends person_appearance_info
{
	constructor(weight, hight, Eye_color, gender, home_address, home_phone, mobile, state, country)
    {
    		super(weight, hight, Eye_color, gender)
    		this.home_address = home_address 
        	this.home_phone = home_phone
        	this.mobile =  mobile
        	this.state = state
        	this.country = country
    }
    display()
    {
    	document.write(this.mobile, this.country)
    }
}
var personal_appearance = new contact_details(60, "5.8", "brown", "male", "#6/96,rajapet,kadapa", 975545445, 8889994440, "Andrapradesh", "India")
personal_appearance.display()

//5
class Electric_bill_paid_via_netbanking {
    constructor(website, password, consumer_number, Billing_status, mode_of_payment) {
        this.website = website;
        this.password = password;
        this.consumer_number = consumer_number;
        this.Billing_status = Billing_status;
        this.mode_of_payment = mode_of_payment;
    }
}
class person_billing_statement extends Electric_bill_paid_via_netbanking {
    constructor(website, password, consumer_number, Billing_status, mode_of_payment, choose_bank, username, password_1, Transaction_no, payment_status) {
        super(website, password, consumer_number, Billing_status, mode_of_payment);
        this.choose_bank = choose_bank;
        this.username = username;
        this.password_1 = password_1;
        this.Transaction_no = Transaction_no;
        this.payment_status = payment_status;
    }
    display() {
        console.log(this.choose_bank, this.Transaction_no, this.Transaction_no);
    }
}
var Electrical_bill = new person_billing_statement("www.tnebnet.org", 987655, 23456123, "paid/unpaid", "netbanking", "sbi", "kumar00", 123456, "18cv21828578437", "successful");
Electrical_bill.display();
