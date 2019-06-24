// create a function that console logs any parameters given
function display(content) {
    console.log(content)
}

// create a function that takes a name/string as a parameter
// and returns "hi my name is" parameter given

function name(name) {
    return "Hi, my name is " + name + "."
}


// create 3 functions that descripe the powers of a ninja you would like to create

function firstP(fAttribute) {
    return "Your ninja wears " + fAttribute + "."
}
function secondP(sAttribute) {
    return "Your ninja is very " + sAttribute + "."
}
function thirdP(tAttribute) {
    return "Your ninja is really just a " + tAttribute + "."
}

// Object oriented programming
// - encapsulation
// - abstraction
// - 

// OOP encapsulation grouping behaviours
const ninja = {
    name(name) {
        return "Hi, my name is " + name + "."
    },
    firstP(fAttribute) {
        return "Your ninja wears " + fAttribute + "."
    },
    secondP(sAttribute) {
        return "Your ninja is very " + sAttribute + "."
    },
    thirdP(tAttribute) {
        return "Your ninja is really just a " + tAttribute + "."
    },
    
    // display(ninja.name("William"));
    // display(ninja.firstP("Full Plate Armor"));
    // display(ninja.secondP("Chivalrous"));
    // display(ninja.thirdP("Knight"));

}



// create a class for ninja factory
// OOP abstraction, hiding complexity
class King {
    constructor(name, firstP, secondP, thirdP){
        this.nameInsideKing  = name;
        this.firstP          = firstP;
        this.secondP         = secondP;
        this.thirdP          = thirdP;
    }

    name(){
        return "Hi, my name is " + this.nameInsideKing + ".";
    }

    armor(){
        return "Your ninja wears " + this.firstP + ".";
    }

    attribute(){
        return "Your ninja is very " + this.secondP + ".";
    }

    identity(){
        return "Your ninja is really just a " + this.thirdP + ".";
    }

}

// let rufus = new King("Rufus", "Full Plate Armor", "Honorable", "Knight")


// display(william.name());
// display(william.armor());
// display(william.attribute());
// display(william.identity());

// OOP polymorphism
class CoochieGod extends King {
    constructor(name, armor, attribute, identity){
        super(name,armor,attribute,identity)
        this.village = "Caen"
    }

    combo(){
        return "Activate: " + super.attribute() + " Combo with " + super.armor()
    }
}
let rufus = new CoochieGod("Rufus", "Full Plate Armor", "Honorable", "Knight")
let william = new King("William", "Full Mail Armor", "Dreaded", "Man-at-arms")



display(rufus.name());
display(rufus.armor());
display(rufus.attribute());
display(rufus.identity());
