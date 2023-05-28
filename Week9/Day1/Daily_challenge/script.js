let form1 = document.forms.myForm; // choose form
let fields = myForm.elements; // choose all form fields

submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submit);

function submit(event){
    event.preventDefault()
    if (fields[0].value.length > 0 && fields[1].value.length > 0){
        let user = {
            'first_name': fields[0].value,
            'last_name': fields[1].value
        }
        let userJson = JSON.stringify(user)
        let newpar = document.createElement('p')
        newpar.innerText = userJson;
        document.querySelector('body').appendChild(newpar)
        // alert(userJson);
    }
}