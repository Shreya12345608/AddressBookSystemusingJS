//class for AddressBook
class AddressBook
{
    //constructor
    //constructorr initalize of the vraiable with no of parameters goinig to pass 
    constructor(...params) 
    {
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
   // get and set for firstname 
//first letter should be capital and min 3 letters
    get firstName() 
    { return this._firstName; 
    }
    set firstName(firstName) 
    {
      let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
      // test returns a boolen value
      if (nameRegex.test(firstName))
        this._firstName = firstName;
      else
        throw "Invalid first Name";
    }
    
     //get and set for lastname
    //first letter should be capital and min 3 letters
    get lastName() 
    { return this._lastName; 
    }
    set lastName(lastName) 
    {
      let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
      // test returns a boolen value
      if (nameRegex.test(lastName))
        this._lastName = lastName;
      else
        throw "Invalid  last Name";
    }
      //get and set for address
    //minimum four characters
    get address() 
    { return this._address; 
    }
    set address(address) 
    {
      let addressRegex = RegExp("^[A-Za-z]{4,}$");
      if (addressRegex.test(address))
        this._address = address;
      else
        throw "Invalid address ";
    }
    
       //get and set for city
    //minimum four characters
    get city() 
    { return this._city; 
    }
    set city(city) 
    {
      let cityRegex = RegExp("^[A-Za-z]{4,}$");
      if (cityRegex.test(city))
        this._city = city;
      else
        throw "Invalid city ";
    }
  
      //get and set for state
    //minimum four characters
    get state() 
    { return this._state; 
    }
    set state(state) 
    {
      let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
      if (stateRegex.test(state))
        this._state = state;
      else
        throw "Invalid state";
    }
    
       //get and set for zip
    //pin code of form 789 987
    get zip() 
    { return this._zip; 
    }
    set zip(zip) 
    {
      let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
      if (zipRegex.test(zip))
        this._zip = zip;
      else
        throw "Invalid zip ";
    }
    
       //get and set for phoneNumber
    //phone number should be of form 91 8149240833
    get phoneNumber() 
    { return this._phoneNumber; 
    }
    set phoneNumber(phoneNumber) 
    {
      let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
      if (phoneRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
      else
        throw "Invalid phone number";
    }
  
      // get and set for email
    //ac.xyz@gmail.com.in .xyz-optional  .in-optional
    get email() 
    { return this._email; 
    }
    set email(email) 
    {
      let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
      if (emailRegex.test(email))
        this._email = email;
      else
        throw "Invalid email";
    }
    
      //defining to string method
    toString()
        {
        return "First Name: " + this.firstName + ", Last Name: " + this.lastName
          + "\nAddress: " + this.address
          + ", City: " + this.city + ", State: "
          + this.state + "\nZip: " + this.zip
          + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
       }
    }
    
//     //creating an instance and giving contact details
// try 
// {
// let contact_book = new AddressBook("Shreya", "Malviya", "TrimurtiNagar", "Nagpur", "Maharashtra", "445534",
//   "91 8793764858", "malviyashreya26@gmail.com");
// console.log(contact_book.toString());
// } catch (e) 
// {
//   console.log(e);
// }
    //creating an instance and giving contact details
  try 
  {
    
      let ContactsArray = new Array();
      //push() method adds new items to the end of an array.
      ContactsArray.push
    (
      new AddressBook
      (
        "Shreya",
        "Malviya",
        "Koradiroad",
        "Nagpur",
        "Mharashtra",
        "628 412",
        "91 7878787870",
        "shreyamalviya@gmail.com"
      )
    );
     //push() method adds new items to the end of an array.
      ContactsArray.push
      (
        new AddressBook
        (
          "Prajakta",
          "Bramhe",
          "AshtyavinayakColony",
          "Ngpur",
          "Mharashtra",
          "445334",
          "91 8149240833",
          "prajakta14bramhe@gmail.com"
        )
      );
       //push() method adds new items to the end of an array.
      ContactsArray.push
      (
        new AddressBook
        (
          "Ekta",
          "Shende",
          "Hudkeshwar",
          "Chennai",
          "TamilNadu",
          "268 756",
          "91 7312569875",
          "ektashende04@gmail.com"
        )
      );
       //push() method adds new items to the end of an array.
      ContactsArray.push
      (
        new AddressBook
        (
          "Nandha",
          "Kumar",
          "fourstreet",
          "Delhi",
          "NewDelhi",
          "891 258",
          "87 9090909090",
          "nandha@gmail.com"
        )
      );
     //The forEach() method calls a function once for each element in an array, in order.
     //function will be executed for every single element of the array. It must take at
     // least one parameter which represents the elements of an array
       //printing array before updating
  ContactsArray.forEach((contact_book) => console.log(contact_book.toString()));

  //finding index using name
  // Array.findIndex() method returns the index of the first element in an array that passes a 
//test (provided by a function)
  let check = ContactsArray.findIndex(
    (contact_book) => contact_book.firstName == "Shreya"
  );
  //updating the contact detail
  ContactsArray[check].zip = "121 333";

  //displaying contacts after being updated
  console.log("----------------------After Changing Zip Updated Contacts are------------------------------------");
  ContactsArray.forEach((contact_book) => console.log(contact_book.toString()));
} catch (e) {
  console.log(e);
}