// script.js


document.addEventListener('DOMContentLoaded', () => {
    let userCount = 0;

    const modal = document.getElementById('modal');
    const openSignUpBtn = document.getElementById('openSignUpBtn');
    const cancelbtn = document.getElementsByClassName('cancelbtn')[0];
    const signupForm = document.getElementById('signupForm');
    const userCountDiv = document.getElementById('userCount');
    

    openSignUpBtn.onclick = () => {
        modal.style.display = 'block';
    };

    cancelbtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    signupForm.onsubmit = (event) => {
        event.preventDefault();

        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const phone = signupForm.phone.value;
        const gender = signupForm.gender.value;
        const sports = Array.from(signupForm.sports.selectedOptions).map(option => option.value);

        // Validate inputs
        if (!/^[a-zA-Z\s]{5,}$/.test(name)) {
            alert('Name must be at least 5 characters long and contain no numbers.');
            return;
        }
        if (!/^.+@gmail\.com$/.test(email)) {
            alert('Email must be a Gmail address.');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        if (!/^\d{10}$/.test(phone)) {
            alert('Phone number must be exactly 10 digits.');
            return;
        }

        // Print form data to the console
        console.log({
            name,
            email,
            password,
            phone,
            gender,
            sports
        });

        userCount++;
        userCountDiv.textContent = `Number of Registered Users: ${userCount}`;

        alert('Form submitted successfully!');

        // Close the modal
        modal.style.display = 'none';

        // Reset the form
        signupForm.reset();
    };

});

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
}