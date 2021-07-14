//classfor AddressBook
class AddressBook{
    //constructorr initalize of the vraiable with no of parameters goinig to pass 
    constructor(...params){
        //passisng using array
        //This represents the currebt class element
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
//The constructor function that is used to create derived objects.
//This represents the currrent class element
    get firstName() { return this.firstName; }
    set firstName(firstName) {
        let fnRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (fnRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            return 'Invalid First Name';
        }
    }


  //defining to string method
  toString() {
    return "first Name: " + this.firstName + ", last Name: " + this.lastName
      + "\nAddress: " + this.address + ", City: " + this.city
      + ", State: " + this.state + " Zip: " + this.zip
      + ", \nPhoneNumber: " + this.phoneNumber + ", email: " + this.email;
  }
  //get and set for lastname
  //first letter should be capital and min 3 letters
  get lastName() { return this.lastName; }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(lastName))
      this.lastName = lastName;
    else
      throw "Invalid last Name";
  }

  //get and set for address
  //minimum four characters
  get address() { return this.address; }
  set address(address) {
    let addressRegex = RegExp("^[A-Za-z]{4,}$");
    if (addressRegex.test(address))
      this.address = address;
    else
      throw "Invalid address ";
  }

  //get and set for city
  //minimum four characters
  get city() { return this.city; }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city))
      this.city = city;
    else
      throw "Invalid city ";
  }
  
  get state() { return this.state; }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state))
      this.state = state;
    else
      throw "Invalid state";
  }

  //pin code of form 789 987
  get zip() { return this.zip; }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
    if (zipRegex.test(zip))
      this.zip = zip;
    else
      throw "Invalid zip ";
  }

  //phone number should be of form 91 9650925666
  get phoneNumber() { return this.phoneNumber; }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
    if (phoneRegex.test(phoneNumber))
      this.phoneNumber = phoneNumber;
    else
      throw "Invalid phone number";
  }

  //ac.xyz@gmail.com.in .xyz-optional .in-optional
  get email() { return this.email; }
  set email(email) {
    let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
    if (emailRegex.test(email))
      this.email = email;
    else
      throw "Invalid email";
  }
}