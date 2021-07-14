//classfor AddressBook
class AddressBook{
    //constructorr initalize of the vraiable with no of parameters goinig to pass 
    constructor(...params){
        //passisng using array
        //this this is the newly created instance.
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }