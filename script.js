var playBtn = document.getElementById('music-yes');
var audio = new Audio();
var url = "Music/Index-song.mp3";
audio.src = url;
const buttonOne = document.getElementById('music-yes')
const buttonTwo = document.getElementById('music-no')


// Volume Slider Event Listener
document.getElementById('volumeSlider').addEventListener('input', function(e) {
    // Adjust the audio volume based on the slider's value
    audio.volume = e.target.value;
    console.log("Volume adjusted to: " + e.target.value);
});

//Plays music
playBtn.addEventListener('click', function() {
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play();
    console.log("Music is on!");
});


document.getElementById('music-yes').addEventListener('click', function() {

    //Hides button
    var musicButton = document.getElementById('Intromus'); 
    musicButton.style.opacity = '0';
    //console.log("Button gone!");

    //Hides container
    setTimeout(function() {
        var container = document.getElementById('container');
        container.style.display = 'block';
        container.style.opacity = '0';
        //console.log("Container hidden!");

        //Removes container
        setTimeout(function() {
            container.style.display = 'none';
            //console.log("Container gone!");

            //Brings back the real content
            setTimeout(function() {
                var introDisplay = document.getElementById('intropage');
                introDisplay.style.display = 'block';
                introDisplay.style.opacity = '0';
                //console.log("Content appears");
            }, 0000);

            //Shows the content
            setTimeout(function() {
                var introDisplay = document.getElementById('intropage');
                introDisplay.style.opacity = '1';
                //console.log("Content is real...");
            }, 2000);
        }, 3000);
    }, 1000);
});

document.getElementById('music-no').addEventListener('click', function() {

    // Hides it all
    var musicButton = document.getElementById('Intromus'); 
    musicButton.style.opacity = '0';
    //console.log("All is gone...");
});

