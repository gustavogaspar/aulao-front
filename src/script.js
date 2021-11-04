//Coleta de evento de "click" no botão com id submit
document.getElementById("submit").addEventListener("click", function (event) {
    setStudent()
    event.preventDefault()
});




function setStudent() {
    //Coleta de dados do formulario
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;

    let url = 'http://localhost:3000/api'

    console.log("Data Received: ", fname, lname, email)

    axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Charset':"utf-8"
        },
        data: {
            firstName: fname,
            lastName: lname,
            email: email
        },
        withCredentials: false
    }).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });
}



