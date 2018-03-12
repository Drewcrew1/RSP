const choices = ['Rock','Paper','Scissors'];


let compPlay = function() {
	let rand = Math.floor(Math.random() * choices.length);
	return choices[rand];

}
let scorein = document.querySelector('.score');
let lostin = document.querySelector('.lost');
let tiein = document.querySelector('.tie');
let playerSel;
let compSel;
let tie = 0;
let score = 0;
let lost = 0;
let playGame = function(playerSel, compSel) {



				 compSel = compPlay();
						if(compSel === 'Rock' && playerSel === 'Paper'){
							 score += 1;
							 scorein.innerHTML = score;
							outcome.innerHTML = 'You win Paper beats Rock';
						} else if (compSel === 'Rock' && playerSel === 'Rock'){
							tie += 1;
							tiein.innerHTML = tie;
							outcome.innerHTML = 'Tie no one wins.';
						} else if ( compSel === 'Rock' && playerSel === 'Scissors') {
							lost += 1;
							lostin.innerHTML = lost;
							outcome.innerHTML = 'You lose Rock beats Paper';
						} else if (compSel === 'Paper' && playerSel === 'Rock'){
							lost += 1;
							lostin.innerHTML = lost;
							outcome.innerHTML = 'You lose Paper beats Rock';
						} else if ( compSel === 'Paper' && playerSel === 'Paper') {
							tie += 1;
							tiein.innerHTML = tie;
							outcome.innerHTML = 'Tie no one wins';
						} else if (compSel === 'Paper' && playerSel === 'Scissors'){
							score += 1;
							scorein.innerHTML = score;
							outcome.innerHTML = 'You win Scissors beats Paper';
						} else if ( compSel === 'Scissors' && playerSel === 'Paper') {
							lost += 1;
							lostin.innerHTML = lost;
							outcome.innerHTML = 'You lose Scissors beats Paper';
						} else if (compSel === 'Scissors' && playerSel === 'Rock'){
							 score += 1;
							 scorein.innerHTML = score;
							outcome.innerHTML = 'You win Rock beats Paper';
						} else if ( compSel === 'Scissors' && playerSel === 'Scissors') {
							tie += 1;
							tiein.innerHTML = tie;
							outcome.innerHTML = 'Tie no one wins';
							}



	}


let outcome = document.querySelector('.outcome');
let choice = document.querySelectorAll('.choice');
choice.forEach((button) => {
	button.addEventListener('click', (e) => {
		playerSel = button.innerHTML;
		playGame(playerSel, compSel);

	});

});
