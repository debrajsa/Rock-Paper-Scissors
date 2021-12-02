# Rock Paper Scissors

We’re going to make a simple implementation of grade-school classic “rock paper scissors”. For the moment we’re just going to play the game from the browser console.
We will use prompt() to get input from the user, but to start playerSelection is hard-coded as rock.

## Assignment

1. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
2. Write a function called playGame plays Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then display a string that declares the winner like so: "You Lose! paper beats rock."
3. If computer and player tie, display a string saying "It's a tie"
4. Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
