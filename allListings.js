// --------------------------
//#region ## Array Of Listings
// --------------------------

class AllListings{
    constructor(){
        this.allListings = [];
    }

    addListing(listing){
        this.allListings.push(listing);
    }

    removeListing(listing){
        console.log(listing);
        console.log(`trying to delete ${listing}`);
        const filteredItem = this.allListings.filter((item)=> item != listing) 
        // Here we are returning every item that is NOT equal to the highest order function's parameters. In other words we are FILTERING OUT things that are NOT the listing. 
        // console.log(filteredItem);
        this.allListings = filteredItem;
        this.render()
    }

    render(){
        let listOfListings = document.querySelector(`#listOfListings`)
        listOfListings.innerHTML="";
        this.allListings.forEach(element => {
            let deleteThisListingButton = document.createElement(`button`)
            deleteThisListingButton.setAttribute(`class`, `deleteButton`)
            deleteThisListingButton.innerText=`X`
            deleteThisListingButton.addEventListener(`click`, (e)=>{
                console.log(element);
                allListings.removeListing(element);
            })

            let commentOnThisThing = document.createElement(`button`)
            commentOnThisThing.setAttribute(`class`, `commentButton`)
            commentOnThisThing.innerText=`💬`
            commentOnThisThing.addEventListener(`click`, (e)=>{
                let comment = prompt(`Write a comment no longer than 280 characters`, `Sample text`)
                if(comment.length > 280){
                comment = comment.substring(0,280)
                }
                element.comment=comment;
                console.log(element.comment);
                this.render()
            })
            listOfListings.append(element.render(), deleteThisListingButton, commentOnThisThing)
        });


        
    }
}

//#endregion ## Array Of Listings