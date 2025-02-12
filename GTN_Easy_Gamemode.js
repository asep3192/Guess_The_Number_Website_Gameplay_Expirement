console.log("Welcome to Guess The Number\n");
console.log(" Directions: Guess the mystery number between 0-99. You have 7 guesses\n");

function guessTheNumber() {
    const y = Math.floor(Math.random() * 100);
    let r;
    let k = 0;

    while (r !== y && k < 7) {
        r = parseInt(prompt("Guess the Number!..."), 10);

        if (r > y) {
            console.log(r + " is greater than the mystery number");
        } else if (r < y) {
            console.log(r + " is less than the mystery number");
        } else {
            console.log("That number is correct!!");
        }
        k++;
    }

    console.log("\n");

    if (k === 7) {
        console.log("It took you " + k + " tries");
        console.log("The mystery number is " + y);
        console.log("Game Over\n");
    } else {
        console.log("It took you " + k + " tries\n");
        if (k > 6) {
            console.log("Great Job!");
        } else if (k > 1) {
            console.log("Excellent");
        } else {
            console.log("Magnificent");
        }
        const a = parseInt(prompt("Play Again? If yes press 1, if not press any number except 1"), 10);
        if (a === 1) {
            guessTheNumber();
        }
    }
}

guessTheNumber();

