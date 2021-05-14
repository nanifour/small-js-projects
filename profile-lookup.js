//Contact Profile Lookup

//contact array containing objects
var contacts = [
    {
        "firstName": "Beyonce",
        "lastName": "Knowles",
        "number": "15554545",
        "likes": ["Music", "Houston", "Dance"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "15551212",
        "likes": ["Wands", "Brooms", "Hogwarts"]
    },
    {
        "firstName": "Squidward",
        "lastName": "Tentacles",
        "number": "15553434",
        "likes": ["Singing", "Clarinet", "Art"]
    },
    {
        "firstName": "Timmy",
        "lastName": "Turner",
        "number": "15559913",
        "likes": ["Fairies", "Wishes", "Fish"]
    },
    {
        "firstName": "Michael",
        "lastName": "Jordan",
        "number": "15551144",
        "likes": ["Basketball", "Shoes", "Winning"]
    },

];


function lookupProfile(fname, property){

    for(var i = 0; i < contacts.length; i++){
        //check if the name is in the array
        if(contacts[i].firstName === fname){
            //return property if it exists
            return contacts[i][property] || "No such property exists";  //
        }
    }
    return "No such contact exists";
}

//check contacts
var data = lookupProfile("Harry", "likes");
//test
console.log(data);
















