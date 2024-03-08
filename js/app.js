const emails = ["mariottide@poveracchio.it", "fernandello@senzasoldi.it", "crusca@cash.com"]; // array[string]

const buttonDOMElement = document.querySelector('.search');

buttonDOMElement.addEventListener('click', function () {

    const userEmail = document.getElementById('user-email').value; //"fernandello@senzasoldi.it"; // string
    let isEmailInArray = false;

    // scorro tutto l'array emails per stampare ogni singolo elemento (email)
    for (let index = 0; index < emails.length; index++) {
        const email = emails[index]; // string
        // console.log(email);

        if (userEmail === email) {
            isEmailInArray = true;
        }
    }


    // stampo "presente" se presente
    // altrimenti stampo "non presente"

    if (isEmailInArray === true) {
        console.log("presente");
    } else {
        console.log("non presente");
    }
});

