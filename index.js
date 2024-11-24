// Toggle Dropdown Menu
function toggleDropdown() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Close Dropdown when clicking outside
window.addEventListener('click', (event) => {
    const menu = document.querySelector('.menu');
    if (!menu.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// Toggle Category Content
function toggleCategory(index) {
    const categories = document.querySelectorAll('.category');
    const contents = document.querySelectorAll('.category-content');

    categories.forEach((category, i) => {
        if (i === index) {
            category.classList.add('active');
            contents[i].classList.add('active');
        } else {
            category.classList.remove('active');
            contents[i].classList.remove('active');
        }
    });
}


// Attach event listener to the submit button
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Collecting form data from inputs
    const formData = {
        benzin: document.querySelector('input[placeholder="Benzin"]').value,
        dizel: document.querySelector('input[placeholder="Dizel"]').value,

        elektrikEnerjisi: document.querySelector('input[placeholder="Elektrik enerjisi"]').value,
        qida: document.querySelector('input[placeholder="Qida"]').value,
        tebiQaz: document.querySelector('input[placeholder="Təbii qaz"]').value,

        malEti: document.querySelector('input[placeholder="Mal əti"]').value,
        toyuqEti: document.querySelector('input[placeholder="Toyuq əti"]').value,
        sud: document.querySelector('input[placeholder="Süd"]').value,
        terevez: document.querySelector('input[placeholder="Tərəvəz"]').value,
        meyve: document.querySelector('input[placeholder="Meyvə"]').value,

        smartfon: document.querySelector('input[placeholder="Smartfon"]').value,
        laptop: document.querySelector('input[placeholder="Laptop"]').value,
        koynek: document.querySelector('input[placeholder="Köynək"]').value,
        tshirt: document.querySelector('input[placeholder="T-Shirt"]').value,
        televizor: document.querySelector('input[placeholder="Televizor"]').value,

        plastikTorba: document.querySelector('input[placeholder="Plastik torba"]').value,
        plastikSushe: document.querySelector('input[placeholder="Plastik şüşə"]').value,
        plastikQab: document.querySelector('input[placeholder="Plastik qab"]').value,

        smokingFrequency: document.getElementById('smoking-frequency').value,
        exerciseFrequency: document.getElementById('exercise-frequency').value,
        waterIntake: document.getElementById('water-intake').value,
        socialEvents: document.getElementById('social-events').value,
        carUsage: document.getElementById('car-usage').value,
        planeTrips: document.getElementById('plane-trips').value,
        socialMediaUsage: document.getElementById('social-media-usage').value,
    };

    console.log(formData);
});
