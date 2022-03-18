console.log("Wel-Come to AddressBook program using javascript");
//Importing the neccessary module
var readlineSync = require('readline-sync');

class Contact {
    //Declaring the properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    //Initializing the parameterized constructor of class using constructor keyword(UC1)
    constructor(...parameters) {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6];
        this.emailId = parameters[7];
    }

    toString() {
        return `First Name: ${this.firstName}\tLast Name: ${this.lastName}\tAddress: ${this.address}\tCity: ${this.city}\tState: ${this.state}\tZipCode: ${this.zipCode}\tPhone Number: ${this.phoneNumber}\tEmail-Id: ${this.emailId}\n`;
    }
}

//UC1 - Function to return object of added contacts
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    let contact
    try {
        //Object for class
        contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
    } catch (e) {
        console.error(e)
    }
    return contact;
}

//Function to get the details of the contact from the user
function getContactDetails() {
    try {
        //UC2-Regex patterns for validating contact details
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        let emailIdPattern = new RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})*$');
        //Validating first name
        let firstName = readlineSync.question('Enter Your FirstName : ');
        if (namePattern.test(firstName))
        this.namePattern=firstName;
        else
            throw 'First name should have minimum 3 characters';
        //Validating last name
        let lastName = readlineSync.question('Enter Your LastName : ');
        if (namePattern.test(lastName))
        this.namePattern=lastName;
        else
            throw 'last name should have minimum 3 characters';
        //Validating address
        let address = readlineSync.question('Enter Your Address : ');
        if (!addressPattern.test(address))
            throw 'Address should have minimum 4 characters';
        //Validating city
        let city = readlineSync.question('Enter Your City Name: ');
        if (addressPattern.test(city))
        this.addressPattern=city;
        else
            throw 'City should have minimum 4 characters';
        //Validating states
        let state = readlineSync.question('Enter Your State Name : ');
        if (addressPattern.test(state))
        this.addressPattern=state;
        else
            throw 'State should have minimum 4 characters';
        //Validating zip code
        let zipCode = parseInt(readlineSync.question('Enter Your Zip Code : '));
        if (zipCodePattern.test(zipCode))
        this.zipCodePattern=zipCode;
        else
            throw 'Zipcode is not valid';
        //Validating phone number
        let phoneNumber = parseInt(readlineSync.question('Enter Your Phone Number : '));
        if (phoneNumPattern.test(phoneNumber))
        this.phoneNumPattern=phoneNumber;
        else
            throw 'Phone number is not valid';
        //Validating email id
        let emailId = readlineSync.question('Enter Your Email Id : ');
        if (emailIdPattern.test(emailId))
        this.emailIdPattern=emailId;
        else
            throw 'Email id is not valid';
        let contactDetails = AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("\nContact Details: ");
        console.log(contactDetails.toString());
    } catch (e) {
        console.error(e);
    }
}


//Calling the function
getContactDetails();