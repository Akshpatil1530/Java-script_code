class ContactDetails
{
    phone_no: number;
    email_id: string;
    address: string;
    constructor(phone_no: number, mail: string, address: string){
        this.phone_no = phone_no
        this.email_id = mail
        this.address = address
    }
    display(){
        console.log(this.phone_no, this.email_id, this.address)
    }
    set_phone_no(new_phone_no: number){
        this.phone_no = new_phone_no
    }
    set_mail(new_mail: string){
        this.email_id = new_mail
    }
    set_address(new_address: string){
        this.address = new_address
    }
}
var mycontactdetails = new ContactDetails(1234567890, "abc@mail.com", "#03, Btm layout, Banglore")
mycontactdetails.display()
