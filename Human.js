function display(content) {
    console.log(content)
}

function name(name){
    return "I'm" + name + "."
}
function firstP(fAttribute) {
    return "I see myself as " + fAttribute + "."
}
function secondP(sAttribute) {
    return "I'm also a " + sAttribute + "."
}
function thirdP(tAttribute) {
    return "I have a " + tAttribute + "."
}
class Parent {
    constructor(name, firstP, secondP, thirdP){
        this.nameInsideKing  = name;
        this.firstP          = firstP;
        this.secondP         = secondP;
        this.thirdP          = thirdP;
    }

    name(){
        return "I'm " + this.nameInsideKing + ".";
    }

    selfImage(){
        return "I see myself as " + this.firstP + ".";
    }

    attribute(){
        return "I'm also a " + this.secondP + ".";
    }

    importantItem(){
        return "I have a " + this.thirdP + ".";
    }

}
class CoochieGod extends Parent {
    constructor(name, armor, attribute, identity){
        super(name,armor,attribute,identity)
        this.village = "I live in Fellsmere"
    }

    combo(){
        return super.name() + super.selfImage() + super.attribute() + " and " + super.selfImage()
    }
}
let bren = new CoochieGod("Bren", "gay boi","cthulu worshipper","smol pp")
display(bren.name());
display(bren.selfImage());
display(bren.attribute());
display(bren.importantItem());
display(bren.village);
display(bren.combo());

