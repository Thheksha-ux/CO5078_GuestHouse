let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
	slides[index].classList.remove("active");
	index = (index + 1) % slides.length;
	slides[index].classList.add("active");
}

setInterval(changeSlide, 4000);

document.getElementById("contactForm")
	?.addEventListener("submit", function (e) {
		e.preventDefault();
		alert("Message sent successfully!");
	});

const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
	img.addEventListener("click", () => {
		lightbox.style.display = "flex";
		lightboxImg.src = img.src;
	});
});
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Lightbox Functionality
       ========================= */

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.addEventListener("click", function () {
            lightbox.style.display = "none";
        });
    }

    /* =========================
       Testimonial Slider
       ========================= */

    const testimonials = document.querySelectorAll(".testimonial");
    let tIndex = 0;

    if (testimonials.length > 0) {
        setInterval(function () {
            testimonials[tIndex].classList.remove("active");
            tIndex = (tIndex + 1) % testimonials.length;
            testimonials[tIndex].classList.add("active");
        }, 5000);
    }

});

// Contact form message

document.addEventListener("DOMContentLoaded", function () {

	const form = document.querySelector("form");

	if (form) {
		form.addEventListener("submit", function (event) {
			event.preventDefault();

			alert("Thank you! Your message has been sent.");

			form.reset();
		});
	}

});
