/*
Street address, 
property type (house, apartment, lift)
city
and state
*/





let example = new Listings(`119 Niagra ST.`, `Apartment`, "Newark", "NJ")
let anotherExample = new Listings(`129 Niagra ST.`, `Apartment`, "Newark", "NJ")

// console.log(example);



let allListings = new AllListings;
allListings.addListing(example);
allListings.addListing(anotherExample);
// allListings.removeListing(example)

console.log(allListings.allListings);

function toggleListings(){
    let domListings = document.getElementById(`add-listings-id`);
    if (domListings.style.display === `flex`) domListings.style.display= `none`
    else {
        domListings.style.display= `flex`
    }
}

function buttonSubmit(){
    console.log(`street value is ${street.value}`);
    console.log(`type value is ${type.value}`);
    console.log(`City value is ${city.value}`);
    console.log(`state value is ${state.value}`);
    let newListing = new Listings(street.value, type.value, city.value, state.value)
    allListings.addListing(newListing)
    console.log(allListings.allListings);
    allListings.render();

}