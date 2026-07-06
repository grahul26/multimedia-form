// Form Submit
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log(`[Form Submission] Name: ${name}, Email: ${email}`);

    alert("Form Submitted Successfully!");

    form.reset();
});

// iFrame Loaded
const map = document.getElementById("map");

map.addEventListener("load", function () {
    console.log("[i-frame Loaded] Google Map Loaded Successfully");
});

// Audio Event
const audio = document.getElementById("audio");

audio.addEventListener("play", function () {

    const duration = Math.round(audio.duration);

    console.log(`[Audio] Played: sample.mp3 | Duration: ${duration}s`);
});

// Video Event
const video = document.getElementById("video");

video.addEventListener("play", function () {

    console.log("[Video] Played: sample.mp4 | Resolution: 720p");

});

// Responsive Layout
function checkLayout() {

    if (window.innerWidth <= 768) {

        console.log("[Layout] Columns collapsed on mobile breakpoint");

    }

}

checkLayout();

window.addEventListener("resize", checkLayout);

// Back To Top Button
const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});