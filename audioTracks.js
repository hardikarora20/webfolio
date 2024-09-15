// Array of track information
const tracks = [
    {
        name: "Dancing In The Flames",
        singer: "The Weeknd",
        image: "https://images.genius.com/95223efa4c6363428237c8b6153e34c7.1000x1000x1.png", // Replace with the actual image URL
        url: "https://github.com/hardikarora20/webfolio/raw/main/files/audio/The%20Weeknd%20Dancing%20In%20The%20Flames.mp3"
    },
    {
        name: "Blinding Lights",
        singer: "The Weeknd",
        image: "https://images.genius.com/95223efa4c6363428237c8b6153e34c7.1000x1000x1.png", // Replace with another image URL
        url: "https://github.com/hardikarora20/webfolio/raw/main/files/audio/test.mp3" // Replace with another audio URL
    },
    {
        name: "Save Your Tears",
        singer: "The Weeknd",
        image: "https://your-image-url3.jpg", // Replace with another image URL
        url: "https://your-audio-url3.mp3" // Replace with another audio URL
    }
];

// Get the audio and image elements
let audio = document.getElementById('audioPlayer');
let isPlaying = false;
let imageElement = document.getElementById('audioimage');


const audioContainer = document.getElementById('audiocontainer');
const audioImage = document.getElementById('audioimage');


function togglePlay() {
    if (isPlaying) {
        audio.pause();  // Pause the audio
        audiodetails.classList.add('collapsed'); // Collapse the container
        audioContainer.classList.add('roundplayer'); // Collapse the container
        audioImage.classList.remove('rotating'); // Stop rotating image
    } else {
        audio.play();  // Play the audio
        audioContainer.classList.remove('roundplayer'); // Collapse the container
        audiodetails.classList.remove('collapsed'); // Expand the container
        audioImage.classList.add('rotating'); // Start rotating image
    }
    isPlaying = !isPlaying;  // Toggle play state
}

// Optional: Update the UI when the audio is playing or paused
audio.onplay = function() {
    audiodetails.classList.remove('collapsed');
    audioContainer.classList.remove('roundplayer');
    audioImage.classList.add('rotating');
};

audio.onpause = function() {
    audiodetails.classList.add('collapsed');
    audioContainer.classList.add('roundplayer');
    audioImage.classList.remove('rotating');
};

// Example event listener for clicking the image to toggle play/pause
audioImage.addEventListener('click', togglePlay);

/*
// Function to toggle play/pause and image rotation
function togglePlay() {
    if (isPlaying) {
        audio.pause();  // Pause the audio if it's playing
        imageElement.classList.remove('rotating'); // Stop rotating the image
    } else {
        audio.play();  // Play the audio if it's paused
        imageElement.classList.add('rotating'); // Start rotating the image
    }
    isPlaying = !isPlaying;  // Toggle the flag
}

// Optional: Update the UI with the play/pause state
audio.onplay = function() {
    imageElement.classList.add('rotating');
};

audio.onpause = function() {
    imageElement.classList.remove('rotating');
};
*/

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
    imageElement.classList.remove('rotating');
    isPlaying = false; // Reset isPlaying flag
}

// Function to update seek bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.getElementById('trackplayed').style.width = progress + '%';
});

// Add click event listener to the image to toggle play/pause
imageElement.addEventListener('click', togglePlay);
