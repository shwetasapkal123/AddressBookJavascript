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
//UC3 - Initializing an addressbook contact array
var addressBookContactArr = new Array();

//UC1 - Function to return object of added contacts
function AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId) {
    try {
        let checkContact = addressBookContactArr.filter((contact) => contact.firstName == firstName && contact.lastName == lastName);
        if (checkContact.length == 0) {
        let contact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        addressBookContactArr.push(contact);
        console.log("Contact added Succesfully");
        }
        else console.log("Contact is already exist for this name")
    } catch (e) {
        console.error(e)
    }
}

//Function to get the details of the contact from the user
function getContactDetails() {
    try {
        //UC2-Regex patterns for validating contact details
        let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        let addressPattern = new RegExp('^[A-Za-z]{4,}$');
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        let phoneNumPattern = new RegExp('^[0-9]{10}$');
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
        if (!phoneNumPattern.test(phoneNumber))
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
        AddContact(firstName, lastName, address, city, state, zipCode, phoneNumber, emailId);
        console.log("Contact added Succesfully");
    } catch (e) {
        console.error(e);
    }
}

//UC3 - Function to display contacts
function DisplayContact() {
    try {
        console.log("\nContact Details Of AddressBook \n");
        if(addressBookContactArr.length !=0)
            addressBookContactArr.forEach(contact => console.log(contact.toString()));
        else
            console.log("Addressbook is empty")
    } catch (e) {
        console.error(e);
    }
}
//UC4 - Function to find and edit contacts based on the given name
function FindAndEditContact() {
    try {
        let name = readlineSync.question('Enter Your Name To View And Modify Contact : ');
        addressBookContactArr.forEach((contact) => {
            if (contact.firstName == name) {
                console.log(contact.toString());
                while (true) {
                    console.log("1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address \n9: Go Back")
                    let choice = parseInt(readlineSync.question("Enter The Choice From Above That You Want Modified : "));
                    switch (choice) {
                        case 1:
                            let newFirstName = readlineSync.question("Enter The New First Name : ");
                            contact.firstName = newFirstName;
                            break;
                        case 2:
                            let newLastName = readlineSync.question("Enter The New First Name : ");
                            contact.lastName = newLastName;
                            break;
                        case 3:
                            let newAddress = readlineSync.question("Enter The New Address : ");
                            contact.address = newAddress;
                            break;
                        case 4:
                            let newCity = readlineSync.question("Enter The New City Name : ");
                            contact.city = newCity;
                            break;
                        case 5:
                            let newState = readlineSync.question("Enter The New State Name : ");
                            contact.state = newState;
                            break;
                        case 6:
                            let newZipCode = readlineSync.question("Enter The New Zip Code : ");
                            contact.zipCode = newZipCode;
                            break;
                        case 7:
                            let newPhoneNum = readlineSync.question("Enter The New Phone Number : ");
                            contact.phoneNumber = newPhoneNum;
                            break;
                        case 8:
                            let newEmailId = readlineSync.question("Enter The New Email Id : ");
                            contact.email = newEmailId;
                            break;
                        case 9:
                            return;
                        default:
                            console.log("Invalid Option");
                            break;
                    }
                }
            }
        });
        console.log("No Contact Found")
    } catch (e) {
        console.error(e);
    }
}

//UC5 - Function to delete contact based on name
function deleteContact() {
    try {
        let name = readlineSync.question('Enter The Name Of The Contact To delete Contact : ');
        const index = addressBookContactArr.findIndex((contact) => contact.firstName == name);
        //using splice remove the element
        if (index != -1)
            addressBookContactArr.splice(index, 1);
    } catch (e) {
        console.error(e);
    }
}
//UC6 - Function to count contacts in addressbook array
function ContactCount() {
    try {
        let countContact = addressBookContactArr.reduce((contact) => contact + 1, 0)
        console.log(`Total Number Of Contacts are : ${countContact}`);
    } catch (e) {
        console.error(e);
    }
}
//UC8 and 9- Function to search person in a particular city or state
function searchPersonByCityOrState(city, state) {
    let cityOrState = readlineSync.question("Enter A City Or State Name To Find Person : ");
    let contact = addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState);
    console.log(contact.join("\n"));
}
//Function to count person by city or state(UC10)
function countPersonsByCityOrState() {
    try {
        let cityOrState = readlineSync.question("Enter A City Or State Name To Count Person : ");
        let count = addressBookContactArr.filter((contact) => contact.city == cityOrState || contact.state == cityOrState).reduce((contact) => contact + 1, 0)
        console.log(`The Count Of Persons in ${cityOrState} Is : ${count}`)
    } catch (e) {
        console.error(e);
    }
}

//Function to sort the contacts by name(UC11)
function sortContactsByName() {
    try {
        addressBookContactArr.sort((x, y) => x.firstName > y.firstName ? 1 : -1);
        console.log(`\nContacts Sorted By First Name : \n${addressBookContactArr.join("\n")}`)
    } catch (e) {
        console.error(e);
    }
}

//Function to perform addressbook operations(UC3)
function AddressBookOperations() {
    try {
        //Default contacts
        AddContact("Shweta", "Sapkal", "Chinchner", "Satara", "Maharashtra", "415004", "91 8796543210", "shweta45@gmail.com");
        AddContact("Snehal", "Jagtap", "Chinchwad", "Pune", "Maharastra", "789456", "91 9087654321", "snehal65@gmail.com");
        while (true) {
            console.log("\n0: Exit \n1: Add New Contact  \n2: Display contacts\n3.Find and edit contact\n4.Delete Contact using name\n5.Contact Count in the addressbook\n6.Search person by city or state\n7.view Person by city or state\n8.count by city or state\n9.Sort Entries by persons name");
            switch (parseInt(readlineSync.question('Enter the choice : '))) {
                case 0:
                    console.log("Exited");
                    process.exit(1)
                    break;
                case 1:
                    getContactDetails();
                    break;
                case 2:
                    DisplayContact();
                    break;
                    case 3:
                        FindAndEditContact();
                        break;
                        case 4:
                            deleteContact();
                            console.log("Contact deleted successfully");
                            break;
                            case 5:
                                ContactCount();break;
                                case 6:
                                    searchPersonByCityOrState();break;
                                case 7:
                                    searchPersonByCityOrState();break;
                                    case 8:
                                        countPersonsByCityOrState();break;
                                        case 9:
                                            sortContactsByName();break;
                default:
                    console.log("Wrong Choice");
                    break;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

//Calling the addressbook operation functions(UC3)
AddressBookOperations(); 
//UC1Calling the function
//getContactDetails();