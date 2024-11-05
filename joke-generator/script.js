const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const jokeBox = document.querySelector("#jokeBox");

const randomJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            if (item.type === "single") {
                jokeBox.textContent = item.joke;
            } else {
                jokeBox.textContent = `${item.setup} - ${item.delivery}`;
            }
        })
        .catch(err => {
            jokeBox.textContent = "Oops! Couldn't fetch a joke. Try again!";
            console.error(err);
        });
}

const laugh = () => {
    let sound = new Audio('./sound/sitcom-laughing-1.mp3');
    sound.play();
}