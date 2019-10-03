$(document).ready(function () {

    /*
        Storing the HTML markup and then appending to index.html
    */
    const searchFeature = `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
        </form>`;


    // Creating an XMLHttpRequest object in order to retrieve information from API
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
            /*
                Parsing the JSON string into an object
            */
            let data = JSON.parse(this.responseText);

            let arr = data.results;

            /*
                Creating a card for every user.
            */
            for (let i = 0; i < data.results.length; i++) {
                $("#gallery").append(
                    `<div class="card">
                        <div class="card-img-container" >
                            <img class="card-img" src="${data.results[i].picture.medium}" alt="profile picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                            <p class="card-text">${data.results[i].email}</p>
                            <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                        </div>
                    </div>`);
            }

            /*
            Everytime a card is clicked the name is checked to an element exisiting within the arr array and when it finds a match it captures and passes that card into the createModal() method
             */

            $(".card").click((e) => {

                if ($(e)[0]["target"]["parentElement"]["className"] == "card-img-container") {
                    console.log("card-img-container")
                    console.log($(e)[0]["target"]["parentElement"]["nextElementSibling"]["firstElementChild"]["textContent"]);

                    for (let i = 0; i < arr.length; i++) {
                        let title = arr[i].name.title;
                        let first = arr[i].name.first;
                        let last = arr[i].name.last;
                        let fullName = first + " " + last;
                        if (fullName == $(e)[0]["target"]["parentElement"]["nextElementSibling"]["firstElementChild"]["textContent"]) {
                            createModal(arr[i]);
                        }
                    }
                }
                if ($(e)[0]["target"]["parentElement"]["className"] == "card-info-container") {
                    console.log("card-info-container")
                    console.log($(e)[0]["target"]["parentElement"]["firstElementChild"]["textContent"]);

                    for (let i = 0; i < arr.length; i++) {
                        let title = arr[i].name.title;
                        let first = arr[i].name.first;
                        let last = arr[i].name.last;
                        let fullName = first + " " + last;
                        if (fullName == $(e)[0]["target"]["parentElement"]["firstElementChild"]["textContent"]) {
                            createModal(arr[i]);
                        }
                    }
                }

                if ($(e)[0]["target"]["parentElement"]["className"] == "gallery") {
                    console.log("gallery");
                    console.log($(e)[0]["target"]["lastElementChild"]["firstElementChild"]["textContent"]);

                    for (let i = 0; i < arr.length; i++) {
                        let title = arr[i].name.title;
                        let first = arr[i].name.first;
                        let last = arr[i].name.last;
                        let fullName = first + " " + last;
                        if (fullName == $(e)[0]["target"]["lastElementChild"]["firstElementChild"]["textContent"]) {
                            createModal(arr[i]);
                        }
                    }
                }

                if ($(e)[0]["target"]["className"] == "card") {
                    console.log("card");
                    console.log($(e)[0]["target"]["lastElementChild"]["firstElementChild"]["textContent"]);

                    for (let i = 0; i < arr.length; i++) {
                        let title = arr[i].name.title;
                        let first = arr[i].name.first;
                        let last = arr[i].name.last;
                        let fullName = first + " " + last;
                        if (fullName == $(e)[0]["target"]["lastElementChild"]["firstElementChild"]["textContent"]) {
                            createModal(arr[i]);
                        }
                    }

                }
                if ($(e)[0]["target"]["className"] == "card-img-container") {
                    console.log($(e)[0]["target"]["nextElementSibling"]["firstElementChild"]["textContent"]);

                    for (let i = 0; i < arr.length; i++) {
                        let title = arr[i].name.title;
                        let first = arr[i].name.first;
                        let last = arr[i].name.last;
                        let fullName = first + " " + last;
                        if (fullName == $(e)[0]["target"]["nextElementSibling"]["firstElementChild"]["textContent"]) {
                            createModal(arr[i]);
                        }
                    }
                }

                if ($(e)[0]["target"]["className"] == "card-info-container") {
                    console.log($(e)[0]["target"]["firstChild"]["parentElement"]["firstElementChild"]["textContent"])

                    for (let i = 0; i < arr.length; i++) {
                        let title = arr[i].name.title;
                        let first = arr[i].name.first;
                        let last = arr[i].name.last;
                        let fullName = first + " " + last;
                        if (fullName == $(e)[0]["target"]["firstChild"]["parentElement"]["firstElementChild"]["textContent"]) {
                            createModal(arr[i]);
                        }
                    }
                }
            })
        }
    }

    // Requesting for the information from the API

    xhr.open("GET", "https://randomuser.me/api/?results=12");

    // Sending the API a single request

    xhr.send();

    $(".search-container").append(searchFeature);

    // Global array that will store that names from all cards

    let theVals = [];

    // Will capture the name within the search field

    let theCurrentNameSearched = "";

    // change event listener that keeps track of the text within the search field

    $("#search-input").change((e) => {
        // retrieving all the elements with a class of .card-name
        let nombres = $(".card-name");

        // array that stores only the names from the card elements in nombres array
        let namesInText = [];

        // for loop is pushing only the text for the names into the namesInText array
        for (let i = 0; i < nombres.length; i++) {
            namesInText.push(nombres[i]["textContent"]);
        }

        // if theVals [] is empty then add the names into the array else names must be added already
        if (theVals.length < 1) {
            theVals.push(namesInText);
        }

        // keeps track of the text in the search field as the user changes 
        theCurrentNameSearched = $(e)[0]["target"]["value"];
    })

    let theDomEles = [];

    $(".search-submit").click(() => {
        if (theDomEles.length < 1) {
            theDomEles = $(".card-name");
        }

        for (let i = 0; i < theDomEles.length; i++) {
            //console.log($(theDomEles[i]));
            if ($(theDomEles[i])[0]["textContent"].substring(0, theCurrentNameSearched.length) == theCurrentNameSearched) {
                $(theDomEles[i])[0]["parentElement"]["parentElement"]["style"]["visibility"] = "visible";
                //console.log($(theDomEles[i])[0]["parentElement"]["parentElement"]);
                //console.log("not hidden");
            } else {
                //console.log("should be hidden");
                //console.log($(theDomEles[i])[0]["parentElement"]["parentElement"]["hidden"]);
                //console.log($(theDomEles[i])[0]["parentElement"]["parentElement"]);
                $(theDomEles[i])[0]["parentElement"]["parentElement"]["style"]["visibility"] = "hidden";

            }
        }
    })

    let createModal = (person) => {
        console.log("person", person);
        let name = `${person.name.first} ${person.name.last}`;
        $(`<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${person.picture.medium}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${person.name.first} ${person.name.last}</h3>
                    <p class="modal-text">${person.email}</p>
                    <p class="modal-text cap">${person.location.city}</p>
                    <hr>
                    <p class="modal-text">${person.cell}</p>
                    <p class="modal-text">${person.location.street.number} ${person.location.street.name}., ${person.location.city}, ${person.nat} ${person.location.postcode}</p>
                    <p class="modal-text">Birthday: ${person.dob.date.substring(5,7)}/${person.dob.date.substring(8,10)}/${person.dob.date.substring(0,4)}</p>
                </div>
            </div>

            // IMPORTANT: Below is only for exceeds tasks
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>`).insertAfter("#gallery");

        $("#modal-close-btn").click((e) => {
            $(".modal-container")[0]["hidden"] = true;
            removeDiv();
        })
    }

    let removeDiv = () => {
        let modals = $(".modal-container");
        modals.remove();
    }

})
