// --------------------------
//#region ## LISTINGS CLASS
// --------------------------

class Listings{
    constructor(streetAddress, type, city, state){
        this.streetAddress = streetAddress,
        this.type = type,
        this.city = city,
        this.state = state
        this.comment = "";
    }

    changeStreet(input){
        this.streetAddress = "";
        this.streetAddress = input;
    }

    changeType(input){
        this.type = "";
        this.type = input;
    }

    changeCity(input){
        this.city = "";
        this.city = input;
    }

    changeState(input){
        // this should be restricted to a list of 50 options.
        this.state = "";
        this.state = input;
    }

    render(){
        let listingLI= document.createElement(`li`);
        if (this.comment == "") {
            listingLI.innerHTML=`Address: ${this.streetAddress}, Type: ${this.type}, City: ${this.city}, State: ${this.state}`
        } else {
            listingLI.innerHTML=`Address: ${this.streetAddress}, Type: ${this.type}, City: ${this.city}, State: ${this.state} <br> Comment: ${this.comment}`
        }

        return listingLI
    }


}

//#endregion ## LISTINGS CLASS