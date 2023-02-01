// responsive
const menuHamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})


// form validation
function validation() {
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

//projects counting

function numCounter(tagId, maxCount, speed) {
    let initialNumber = 0;
    function counter() {
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    let counterDelay = setInterval(counter, speed);
    function totalTime() {
        clearInterval(counterDelay);
    }
    const totalPeriod = speed * (maxCount);
    setTimeout(totalTime, totalPeriod);
}

numCounter("customer", 1500, 5);
numCounter("team", 12, 400);
numCounter("projects", 436, 10);
numCounter("experience", 20, 100);