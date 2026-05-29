// 1. Navigation Menu Functions
function openMenu() {
    document.body.classList.add("body--menu-open");
}

function closeMenu() {
    document.body.classList.remove("body--menu-open");
}

// 2. Testimonial Slider Data Array
const testimonials = [
    {
        title: "Amazing User Experience",
        para: "T REACT Demonstrates Hard Work, Communication and Accountability",
        avatar: "/assests/Cool Cat PFP.jpg",
        name: "Carl Murrow",
        role: "Director, Cat Inc."
    }, 
    {
        title: "The Ultimate Template Hub",
        para: "Incredibly easy to set up and completely modular. It saved our team weeks of design work!",
        avatar: "/assests/Snoopy PFP.jpg",
        name: "Snoopy",
        role: "CEO"
    }, 
    {
        title: "Professionalism at its Finest",
        para: "Incredibly easy to set up and completely modular. It saved our team weeks of design work!",
        avatar: "/assests/My TimmyTom.jpg",
        name: "Timmy Tom",
        role: "Freelance Worker"
    }
];

let currentIndex = 0;

// 3. Slider Core Logic
function updateTestimonial(index) {
    document.querySelector('.testimonial__title').innerText = testimonials[index].title;
    document.getElementById('testimonial-para').innerText = testimonials[index].para;
    document.querySelector('.testimonial__avatar').src = testimonials[index].avatar;
    document.querySelector('.testimonial__name').innerText = testimonials[index].name;
    document.querySelector('.testimonial__role').innerText = testimonials[index].role;
}

function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0; 
    }
    updateTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1; 
    }
    updateTestimonial(currentIndex);
}