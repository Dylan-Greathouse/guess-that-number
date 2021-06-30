// import functions and grab DOM elements

const feedback = document.getElementById('feedback');
const inputId = document.getElementById('input-id');
const btnCheck = document.getElementById('btn-check');
const resetBtn = document.getElementById('reset-btn');
// initialize state

let numberGuess = Math.floor(Math.random() * 20);
//console.log(numberGuess);

  


let guess = 4;



// set event listeners 
btnCheck.addEventListener('click', () => {
    if (guess === 1) {
        btnCheck.disabled = true;
        return feedback.textContent = `Button has been disabled. Try again another time.`;
    }
    if (Number(inputId.value) === numberGuess) {
        btnCheck.disabled = true;
        return feedback.textContent = `You did it with ${guess} tries left, Congrats!`;
    } else if (Number(inputId.value) > numberGuess) {
        guess--;
        return feedback.textContent = `Sorry that was wrong... try a smaller number. ${guess} tries.`;
    } else {
        guess--;
        return feedback.textContent = `Sorry that was wrong... try a higher number. ${guess} tries.`;
    }
});

resetBtn.addEventListener('click', () =>{
    location.reload();
    
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
