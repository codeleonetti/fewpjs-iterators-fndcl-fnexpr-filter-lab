const { stringContaining } = require("expect")

// Code your solution here
function findMatching(driversArray, name) {
    return driversArray.filter(element =>  element.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, name){
    //match object to string
    //go through each driver
    //select the name that matches the string
    // return the string
    
    //return drivers.filter(element => element.substring(0, n) === name );
    return drivers.filter(element => element.match("^"+name));
}

function matchName(drivers, name){
    // go through drivers names
    // match driver to name
    // return matched name
    return drivers.filter(element => element.name === name);
}


console.log("test to see")
    console.log(name)
    name.filter(names => console.log(`name list, ${names}`))
