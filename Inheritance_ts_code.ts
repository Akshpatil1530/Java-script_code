//1
class driver_info
{
	private driver_last_name :string;
    	private driver_first_name :string;
    	private driver_middle_name :string;
   	private driver_profile :string;
   	private driver_dob :string;
    	private driver_birth_place :string;
    	constructor(driver_last_name :string,driver_first_name :string,driver_middle_name :string,driver_profile :string,driver_dob :string,driver_birth_place :string)
    	{
      		this.driver_last_name = driver_last_name;
      		this.driver_first_name = driver_first_name;
      		this.driver_middle_name = driver_middle_name;
      		this.driver_profile = driver_profile;
      		this.driver_dob = driver_dob;
      		this.driver_birth_place = driver_birth_place;
    	}
   	
}
class license_info extends driver_info
{
 	private license_number :string;
    	private license_state :string;
    	private license_country :string;
    	constructor(driver_last_name :string,driver_first_name :string,driver_middle_name :string,driver_profile :string,driver_dob :string,driver_birth_place, license_number : string, license_state : string, license_country : string)
    	{
       		super(driver_last_name,driver_first_name , driver_middle_name, driver_profile, driver_dob, driver_birth_place);
       		this.license_number = license_number;
       		this.license_state = license_state;
       		this.license_country = license_country;
    	}
    	display()
    	{
   
       		console.log(this.license_number , this.license_state, this.license_country);
    	}
}
let license_holder = new license_info("Kumar","Pavan","Bijjavaram","software engineer","12-07-1972","rajampet","ka50201500006939","Karnataka","India");
license_holder.display();

//2
class visiting_card_details
{
   	private name : string;
    	private mail_id : string; 
    	private contact_no : number; 
    	private company_name : string;
    	public address : string;
	constructor (name : string,mail_id : string, contact_no : number, company_name : string) 
	{
    		this.name = name;;
    		this.mail_id = mail_id;
        	this.contact_no = contact_no;
        	this.company_name = company_name ;
    }
}

class card_details extends visiting_card_details
{
    constructor(name, mail_id,contact_no , company_name, address)
	{
        	super(name, mail_id,contact_no , company_name)
    		this.address = address;
        }
        display()
        {
            console.log(this.address)
        }
    	
}
var visiting = new card_details("naresh", "naresh.jvt@gmail.com", 9944860792, "jvt", "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075");
visiting. display()

//3
class network_connection 
{
    	private Total_MB_download : String;
    	private Mobile_upload_Speed : String;
    	public Mobile_download_Speed : String;
    	constructor(Total_MB_download : String, Mobile_upload_Speed :String)
    	{
        	this.Total_MB_download = Total_MB_download;
        	this.Mobile_upload_Speed = Mobile_upload_Speed;
    	}
}
class network extends network_connection
{
    
    	constructor (Total_MB_download, Mobile_upload_Speed, Mobile_download_Speed)
    	{
        	super(Total_MB_download, Mobile_upload_Speed )
        	this.Mobile_download_Speed = Mobile_download_Speed;
    	}
    	display()
    	{
        	console.log(this.Mobile_download_Speed)
    	}
}
let connection = new network("21.26 GB", "30.05 mbp", "32.06 mbps");
connection. display();


//4
class Electric_bill_paid_via_netbanking 
{
    	private website : string;
    	private password : number;
   	private consumer_number : number; 
    	private Billing_status : string; 
    	private mode_of_payment : string;
    	public choose_bank : string;
    	public username : string; 
    	public password_1: number; 
    	public Transaction_no : string; 
    	public payment_status : string;

	constructor (website : string,password : number,consumer_number : number, Billing_status : string, mode_of_payment : string) 
	{
    		this.website = website;
        	this.password =password;
        	this.consumer_number = consumer_number;
        	this.Billing_status = Billing_status;
        	this.mode_of_payment = mode_of_payment;
    	}
}

class person_billing_statement extends Electric_bill_paid_via_netbanking
{
	constructor(website ,password,consumer_number, Billing_status, mode_of_payment, choose_bank,username, password_1, Transaction_no, payment_status)
	{
        	super(website, password, consumer_number, Billing_status, mode_of_payment);
        	this.choose_bank = choose_bank;
        	this.username = username;
       		this.password_1 = password_1;
        	this.Transaction_no = Transaction_no;
        	this.payment_status = payment_status;
    	}
    	display()  
	{
    		console.log( this.choose_bank,  this.Transaction_no,  this.Transaction_no )
    	}

}
var Electrical_bill = new person_billing_statement ("www.tnebnet.org", 987655, 23456123, "paid/unpaid", "netbanking", "sbi", "kumar00", 123456, "18cv21828578437", "successful")
Electrical_bill.display()
