<script>

//Get and set method
//1
class corporate_information 
{
	constructor (name) 
    	{
    		this.name =name
    	}
    	set company_name(name)
    	{
    		this.name =name
    	}
    	get company_name()
    	{
    		document.write(this.name)
    	}
}
let company = new corporate_information("JVT")
company.company_name

//2
class employee 
{
	constructor (name,company ) 
    	{
    		this.name = name
        	this.company = company
    	}
    	getname() 
    	{
    		return this.name
   	 }
    	setname(name) 
    	{
    		this.name = name
   	 }
    	getcompany() 
   	 {
    		return this.company
   	 }
    	setcompany(company) 
    	{
    		this.company = company
    	}
}
let employees = new employee
employees.setname("Akshata")
employees.setcompany("intimetec")
document.write(employees.getname(), employees.getcompany())


//3
class vehicle_informatio
{
	constructor (vehicle_type, engine_number ) 
    	{
    		this.vehicle_type = vehicle_type
        	this.engine_number = engine_number
    	}
    	getvehicle_type() 
    	{
    		return this.vehicle_type
    	}
    	setvehicle_type(vehicle_type) 
    	{
    		this.vehicle_type = vehicle_type
    	}
    		getengine_number()
   	{
    		return this.engine_number
    	}
    	setengine_number(engine_number) 
    	{
    		this.engine_number = engine_number
    	}
}
var vehicle = new vehicle_informatio
vehicle.setvehicle_type("light motor vehicle- car")
vehicle.setengine_number("kp98gtyihh457797")
document.write(vehicle.getengine_number() , vehicle.getvehicle_type())

//4
class creating_google_account 
{
	constructor (first_name, last_name) 
    	{
    		this.first_name = first_name
        	this.last_name =  last_name
    	}
    	getfirst_name()
    	{
    		return this.first_name
   	 }
    	setfirst_name(first_name) 
    	{
    		this.first_name= first_name
    	}
    	getlast_name() 
    	{
    		return this. last_name
    	}
    	setlast_name( last_name) 
    	{
    		this.last_name = last_name
    	}
}
let google_account = new creating_google_account
google_account.setfirst_name("venkatesh")
google_account.setlast_name("db")
document.write(google_account.getfirst_name(), google_account.getlast_name())

//5
class intimetec 
{
    login = "8.30"
    logout = "5.30"
    constructor ( ) 
    {
        document.write("constructor")
        document.write(this.login, this.logout)
    }
    display ()
    {
        document.write(this.login, this.logout)
    }
    setinit(log)
    {
        this.login = log
        
    }
    setinitlogout(log)
    {
        this.logout = log    
    }
    getgetter()
    {
        return this.logout
    }
}
let compnay_access = new intimetec()
compnay_access.init = "login"
compnay_access.initlogout = "6pm"
compnay_access.display()
document.write(compnay_access.getter)

</script>