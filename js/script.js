function makeValid(el) {
    el.classList.remove("is-invalid");
    el.classList.add("is-valid");
}

function makeInvalid(el) {
    el.classList.add("is-invalid");
    el.classList.remove("is-valid");
}

let f = document.getElementById("orderform");

function checkForm(e) {
    if (f.elements["email"].value === "") {
        makeInvalid(f.elements["email"]);
        e.preventDefault();
    } else {
        makeValid(f.elements["email"]);
    }

    let continentSelected = false;
    for (let i = 0; i < f.elements["continent"].length; i++) {
        if (f.elements["continent"][i].checked) {
            continentSelected = true;
            break;
        }
    }
    if (!continentSelected) {
        e.preventDefault();
    }

    let seatingSelected = false;
    for (let i = 0; i < f.elements["seating"].options.length; i++) {
        if (f.elements["seating"].options[i].selected) {
            seatingSelected = true;
            break;
        }
    }
    if (!seatingSelected) {
        e.preventDefault();
        makeInvalid(f.elements["seating"]);
    } else {
        makeValid(f.elements["seating"]);
    }

    if (!f.elements["tos"].checked) {
        e.preventDefault();
    }
}

f.addEventListener("submit", checkForm);
let formelements = document.querySelectorAll("#orderform input,#orderform select");
formelements.forEach((el) => el.addEventListener("change", checkForm));