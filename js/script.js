// form validation
function validation(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const form = {
        name,
        email,
        subject,
        message,
    }
    console.log(form);
    alert('Form Submitted Succesfully!')
    return true;
}