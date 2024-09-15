const headTextContainer = document.querySelector("#headtext");
const initial = "hardik";
// const final = initial;

for(var i = 0; i < initial.length; i++){
    setInterval(function () {
        headTextContainer.innerText += initial.charAt(i);
    }, 100);
}

// chinese to eng -> effect
// floating header with options

// headTextContainer.innerText="heay";

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#floatingheader li');
    
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseout', () => {
            if (!item.matches(':hover')) {
                item.classList.remove('hovered');
            }
        });
    });
});

document.querySelectorAll('ul#floatingheader li').forEach(item => {
    item.addEventListener('touchstart', function() {
        this.classList.toggle('hover');
    });
});

// Get the audio and image elements
let audio = document.getElementById('audioPlayer');
let isPlaying = false;
let imageElement = document.getElementById('audioimage');
let lastRotation = 0; // Track the last rotation angle
let rotationInterval = null; // To store the setInterval for smooth rotation

// Function to toggle play/pause and image rotation
function togglePlay() {
    if (isPlaying) {
        audio.pause();  // Pause the audio if it's playing
        stopRotation(); // Stop rotating the image smoothly
    } else {
        audio.play();  // Play the audio if it's paused
        startRotation(); // Start rotating the image
    }
    isPlaying = !isPlaying;  // Toggle the flag
}

// Function to start rotating the image
function startRotation() {
    imageElement.classList.add('rotating');
    rotationInterval = setInterval(() => {
        lastRotation = (lastRotation + 1) % 360; // Update the rotation angle
        imageElement.style.transform = `rotate(${lastRotation}deg)`;
    }, 30); // Change this value for rotation speed
}

// Function to stop rotating the image smoothly
function stopRotation() {
    imageElement.classList.remove('rotating');
    clearInterval(rotationInterval); // Stop updating the rotation angle
}

// Function to load track and update the display
function loadTrack(trackIndex) {
    const track = tracks[trackIndex];

    // Update the image
    imageElement.style.backgroundImage = `url(${track.image})`;

    // Update the title and singer
    document.getElementById('tracktitle').textContent = track.name;
    document.getElementById('singername').textContent = track.singer;

    // Update the audio source
    audio.src = track.url;
    audio.load(); // Load the new audio source

    // Reset the seek bar
    document.getElementById('trackplayed').style.width = '0%';

    // Stop rotation initially
    stopRotation();
    isPlaying = false; // Reset isPlaying flag
}

// Function to update seek bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('trackplayed').style.width = progress + '%';
});

// Add click event listener to the image to toggle play/pause
imageElement.addEventListener('click', togglePlay);
