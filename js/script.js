const rulesBtn = document.querySelector('.app-container__btn-rules')
const closeBtn = document.querySelector('.modal__btn-close')
const playAgainBtn = document.querySelector('.result-summary__btn-play-again')
const modal = document.querySelector('.modal')
const appContainer = document.querySelector('.app-container')
const userChoiceBtns = document.querySelector('.user-choice')
const resultChoices = document.querySelector('.result')
const resultSummaryContainer = document.querySelector('.result-summary')
const resultTextWinLose = document.querySelector('.result-summary__win-or-lose')
const preResultHouseCircle = document.querySelector('.result__house__choice--preview')
const resultHouseCircle = document.querySelector('.result__house__choice--final')
const resultHouseImg = document.querySelector('.result__img__house')
const resultUserCircle = document.querySelector('.result__user__choice')
const resultUserImg = document.querySelector('.result__img')
const scoreboard = document.querySelector('.scoreboard')
const winnerBorder = document.querySelector('.winner-borders')

let currentScore = 0
//Open rules
rulesBtn.addEventListener('click',()=>{
modal.classList.remove('hidden')
appContainer.classList.add('blurred')
})

//Close rules
closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden')
    appContainer.classList.remove('blurred')
    })


//choosing your toss
    userChoiceBtns.addEventListener('click', function(e){
    const clicked = e.target;
    const choices = [
        'result__house__choice--scissors',
        'result__house__choice--spock',
        'result__house__choice--paper',
        'result__house__choice--lizard',
        'result__house__choice--rock'
    ]
         const randomChoice = Math.floor(Math.random() * choices.length);

        
        //reusable function triggered on user choice
        const revealResult = function(userChoice,win1,win2,draw,lose1,lose2){
            resultChoices.classList.remove('hidden')
            preResultHouseCircle.classList.remove('hidden')
            userChoiceBtns.classList.add('hidden')
            resultUserCircle.classList.add('result__user__choice--'+userChoice)
            resultUserImg.src=`images/icon-${
                resultUserCircle.classList.toString().slice(43)}.svg`
                
                setTimeout(() => {
                    resultSummaryContainer.classList.remove('hidden')
                    resultHouseCircle.classList.remove('hidden')
                    preResultHouseCircle.classList.add('hidden')
                    resultHouseCircle.classList.add(choices[randomChoice])
                    resultHouseImg.src=`images/icon-${
                        resultHouseCircle.classList.toString().slice(74)}.svg`
                        
                        if (resultHouseCircle.classList.contains('result__house__choice--'+win1) || resultHouseCircle.classList.contains('result__house__choice--'+win2)){  
                            resultTextWinLose.textContent = 'You win'
                            currentScore+=1
                            scoreboard.textContent=currentScore
                            resultUserCircle.classList.add('winner-borders')
                        }
                            if(resultHouseCircle.classList.contains('result__house__choice--'+draw)){
                                resultTextWinLose.textContent='draw'
                            }
                            else if (resultHouseCircle.classList.contains('result__house__choice--'+lose1)||resultHouseCircle.classList.contains('result__house__choice--'+lose2)){
                                resultTextWinLose.textContent='you lose'
                                currentScore-=1
                                scoreboard.textContent=currentScore
                                resultHouseCircle.classList.add('winner-borders')
                            }
                    }, 2000);}
                        
                        
                    if(clicked.closest('.user-choice__btn-circle--scissors')){

                        revealResult('scissors','lizard','paper','scissors','rock','spock')
                    }
                    if(clicked.closest('.user-choice__btn-circle--spock')){
                        revealResult('spock','rock','scissors','spock','lizard','paper')
                    }
                    if(clicked.closest('.user-choice__btn-circle--paper')){
                        revealResult('paper','rock','spock','paper','lizard','scissors')
                    }
                    if(clicked.closest('.user-choice__btn-circle--lizard')){
                        revealResult('lizard','spock','paper','lizard','rock','scissors')
                    }
                    if(clicked.closest('.user-choice__btn-circle--rock')){
                        revealResult('rock','lizard','scissors','rock','paper','spock')
                    }
                 })
  

//play again
playAgainBtn.addEventListener('click', ()=>{
    resultUserImg.src= ''
    resultHouseCircle.classList.remove('winner-borders')
    resultUserCircle.classList.remove('winner-borders')
    resultHouseCircle.classList.remove(resultHouseCircle.classList.item(2))
    userChoiceBtns.classList.remove('hidden')
    resultUserCircle.classList.remove(resultUserCircle.classList.item(1))
    resultHouseCircle.classList.add('hidden')
    resultChoices.classList.add('hidden')
    resultSummaryContainer.classList.add('hidden')
})
