
var words = ['lobsterfest', 'beefsquatch', 'wagstaff', 'capoeira', 'quippiquisset', 'tina', 'bob', 'louise', 'linda', 'gene', 'teddy'];
var wordBank;
var tries;
var randomWord;
var hint;
var scoreboard;
var prevWord;

function init() {
    wordBank = [];
    tries = 7;
    randomWord = chooseWord()
    hint = underscoreReplace(randomWord);
    scoreboard = 0;
    prevWord = "";

    document.getElementById("hint").innerHTML = hint;
    document.getElementById("images").innerHTML = "<img id='linda' src='assets/images/linda.png' alt='linda'>"
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {


    // Determines which key was pressed.
    var letter = event.key;

    document.getElementById("hint").innerHTML = hint;
    console.log(letter);

    //check if letter is in word bank
    var inLetterBank = isLetterInBank(letter);
    if (inLetterBank === true) {
      
        
    } else {

        //Check if the user's letter guess exists in randomWord
        var correctGuess = isLetterInAnswer(letter);

        if (correctGuess === false) {
           
            wrongGuess(letter);
            
        }
    }



    document.getElementById("hint").innerHTML = hint;
    document.getElementById("letterbank").innerHTML = wordBank;
    checkIfWin();

}

function wrongGuess(letter) {
    wordBank.push(letter);
    tries--;
    document.getElementById("tries").innerHTML = tries;

    if (tries === 0) {
        restartGame();
    } else if (tries === 6){
        document.getElementById("images").innerHTML = "<img id='bun' src='assets/images/bun.png' alt='bun'>";
    } else if (tries === 5){
        document.getElementById("images").innerHTML = "<img id='buntom' src='assets/images/buntom.png' alt='buntom'>";
    } else if (tries === 4){
        document.getElementById("images").innerHTML = "<img id='buntomlet' src='assets/images/buntomlet.png' alt='buntomlet'>";
    } else if (tries === 3){
        document.getElementById("images").innerHTML = "<img id='buntomletpat' src='assets/images/buntomletpat.png' alt='buntomletpat'>";
    } else if (tries === 2){
        document.getElementById("images").innerHTML = "<img id='buntomletpatcon' src='assets/images/buntomletpatcon.png' alt='buntomletpatcon'>";
    } else if (tries === 1){
        document.getElementById("images").innerHTML = "<img id='burger' src='assets/images/burger.png' alt='burger'>";
    } 
    
}

function checkIfWin() {
    var found = false;
    for (var i = 0; i < hint.length; i++) {
        if (hint[i] === "_") {
            found = true;
        }
    }

    if (found === false) {
        console.log("You Win!");
        prevWord = randomWord;
        document.getElementById("previous").innerHTML = prevWord;
        restartGame();
        scoreboard++;
        document.getElementById("score").innerHTML = scoreboard;
        console.log("Score: " + scoreboard);
    }
}

function restartGame() {
    wordBank = [];
    tries = 7;
    randomWord = chooseWord();
    hint = underscoreReplace(randomWord);
    console.log("Game Restarted!");
    document.getElementById("hint").innerHTML = hint;
    document.getElementById("images").innerHTML = "<img id='linda' src='assets/images/linda.png' alt='linda'>"
    document.getElementById("tries").innerHTML = tries;
    document.getElementById("letterbank").innerHTML = wordBank;
}


function isLetterInAnswer(letter) {
    var correctGuess = false;
    for (var i = 0; i < randomWord.length; i++) {
        if (letter === randomWord[i]) {
            hint[i] = letter;
            correctGuess = true;
            

        }
    }
    return correctGuess;
}

function isLetterInBank(letter) {
    var inBank = false;
    for (var i = 0; i < wordBank.length; i++) {
        if (letter === wordBank[i]) {
            inBank = true;
        }
    }
    return inBank;
}

// This function will pick our word
function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// gets a word , returns underscores
function underscoreReplace(word) {
    var result = [];
    for (var i = 0; i < word.length; i++) {
        result.push("_");
    }

    return result;
}