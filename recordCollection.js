//Record Collection 

var collection = {
    "2548":{
        "album": "Channel Orange",
        "artist": "Frank Ocean",
        "tracks": [
            "Pyramids",
            "Thinkin Bout You",
            "Lost",
            "Sweet Life"
        ]
    },
    "2468":{
        "album": "White Pony",
        "artist": "Deftones",
        "tracks": [
            "Back to School",
            "Digital Bath",
            "Change",
            "Passenger"
        ]
    },
    "1245":{
        "album": "Wet Milk",
        "artist": "Bilmuri",
        "tracks": [ ]
    },
    "1733":{
        "album": "How to Save a Life",
        "artist": "The Fray",
        "tracks": ["She is"]
    },
    "5439":{
        "album": "The Miseducation of Lauryn Hill"
    }
};

//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection)); //makes a copy of the objetct


//update record collection with property and value
function updateRecords(id, property, value){

    //if we have an empty string for that value then it should completely delete that property
    if(value === " "){
        delete collection[id][property];
    }
    //add track to end of array
    else if (property === "tracks"){
        //equal itself or create (empty array)
        collection[id][property] = collection[id][property] || [];
        //push onto end of array
        collection[id][property].push(value);
    }
    else{
        //if value isn't black or prop isn't tracks then just set it to value
        collection[id][property] = value; 
    }

    return collection;
}

//test code
updateRecords("2468", "tracks", "test");
console.log(updateRecords(5439, "artist", "Lauryn Hill"));













