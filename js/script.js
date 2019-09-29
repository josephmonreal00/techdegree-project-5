$(document).ready(function () {
    const searchFeature = `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
        </form>`;

    $(".search-container").append(searchFeature);

    //let galleryItems = `
    //    <div class="card">
    //        <div class="card-img-container">`;
    //let xhr = new XMLHttpRequest();

    let arr = [new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest()];
    let sendOpenSend = (param) => {
        param.open('GET', 'https://randomuser.me/api/');
        param.send();
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[0]);
        sendOpenSend(arr[i]);
        arr[i].onreadystatechange = function () {

            if (arr[i].readyState === 4) {


                let data = JSON.parse(this.responseText);
                let galleryItems = `<div class="card">
                <div class = "card-img-container" >
            <img class = "card-img" src="${data.results[0].picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}</h3>
            <p class="card-text">${data.results[0].email}</p>
            <p class="card-text cap">${data.results[0].location.city}, ${data.results[0].location.state}</p>
        </div>
        </div>`;
                $("#gallery").append(galleryItems);
                console.log(arr[i].readyState);
                console.log(arr[i].status);

                console.log(data);
                console.log(data.results[0].name.title);
                console.log(data.results[0].name.first);
                console.log(data.results[0].name.last);
                console.log(data.results[0].phone);
                console.log(data.results[0].picture.medium);
                console.log(data.results[0].email);
                console.log(data.results[0].cell);
                console.log(data.results[0].dob.age);
                console.log(data.results[0].dob.date);
                console.log(data.results[0].gender);
                console.log(data.results[0].location.city);
                console.log(data.results[0].location.country);
                console.log(data.results[0].location.state);

            }

        }
    }


    /*
    for (let i = 0; i < arr.length; i++) {
        arr[i].open('GET', 'https://randomuser.me/api/');
        arr[i].send();
    }
    */

    /*
    console.log(xhr);
    console.log(arr[0]);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {

            let data = JSON.parse(this.responseText);
            let galleryItems = `<div class="card">
                        <div class = "card-img-container" >
                    <img class = "card-img" src="${data.results[0].picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}</h3>
                    <p class="card-text">${data.results[0].email}</p>
                    <p class="card-text cap">${data.results[0].location.city}, ${data.results[0].location.state}</p>
                </div>
                </div>`;
            $("#gallery").append(galleryItems);
            console.log(xhr.readyState);
            console.log(xhr.status);

            console.log(data);
            console.log(data.results[0].name.title);
            console.log(data.results[0].name.first);
            console.log(data.results[0].name.last);
            console.log(data.results[0].phone);
            console.log(data.results[0].picture.medium);
            console.log(data.results[0].email);
            console.log(data.results[0].cell);
            console.log(data.results[0].dob.age);
            console.log(data.results[0].dob.date);
            console.log(data.results[0].gender);
            console.log(data.results[0].location.city);
            console.log(data.results[0].location.country);
            console.log(data.results[0].location.state);
        }

    }
    */









    const modal = `
        <div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                    <h3 id="name" class="modal-name cap">name</h3>
                    <p class="modal-text">email</p>
                    <p class="modal-text cap">city</p>
                    <hr>
                    <p class="modal-text">(555) 555-5555</p>
                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: 10/21/2015</p>
                </div>
            </div>

            // IMPORTANT: Below is only for exceeds tasks
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        </div>`;

    $("body").append(modal);
    $(".modal-container").hide();
    $("#modal-close-btn").click((e) => {
        console.log($("#modal-close-btn"));
        $(".modal-container").hide();
    })
})
