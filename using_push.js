//1
class live_data_structure
{
	constructor (...args)
    {
    	this.ds = []
    	for(var i =0; i< args.length; i++)
    	{
    		this.ds.push(args[i])
    	}
    }
}
let p = new live_data_structure("jvt", "Aksh", "patil", 100, 200)
document.write(p.ds)


//2
class corporate_information
{
	constructor (...args)
    {
    	this.data = []
        for(var i =0; i< args.length; i++)
    	{
    		this.data.push(args[i])
    	}
    }
}
let company = new corporate_information("JVT", "Programmer", "2.3 or 230000", "Bangalore")
document.write(company.data)

//3
class personal_details
{
	constructor (...args)
    {
    	this.details = []
        for(var i =0; i< args.length; i++)
    	{
    		this.details.push(args[i])
    	}
    }
}
let person = new personal_details("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC", "2/6/1988", "233/3 Ground floor new thippasandra")
document.write(person.details)

//4
class network_connection
{
	constructor (...args)
    {
    	this.data = []
        for(var i =0; i< args.length; i++)
    	{
    		this.data.push(args[i])
    	}
    }
}
let network = new network_connection(1135497, 11128550, "10.245.97.123")
document.write(network.data

//5
class network_usage
{
	constructor (...args)
    {
    	this.data = []
        for(var i =0; i< args.length; i++)
    	{
    		this.data.push(args[i])
    	}
    }
}
let network = new network_usage("21.26 GB", "30.05 mbps", "32.06 mbps")
document.write(network.data)
