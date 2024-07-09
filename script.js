document.addEventListener("DOMContentLoaded", function(){
    let playerDecision;
    let computerDecision;
    let gameState = "playing";
    let playerScore = 0, cpuScore = 0;
    const inputs = document.querySelectorAll(".option");
    const playerScoreText = document.querySelector("#playerScore");
    const cpuScoreText = document.querySelector("#cpuScore");
    const result = document.querySelector("#outcome");
    const arena = document.querySelector("#game");
    const againButton = document.querySelector("#againButton");
    const playerDecisionImage = document.querySelector("#playerDecisionImage");
    const cpuDecisionImage = document.querySelector("#cpuDecisionImage");
    againButton.style.display = 'none';
    againButton.disabled = true;
    let choices = {
        "rock": 0,
        "scissors": 1,
        "paper": 2
    };
    function reset(){
        displayImage(playerDecisionImage, 0, false);
        displayImage(cpuDecisionImage, 0, true);
        playerScore = 0, cpuScore = 0;
        gameState = "playing";
        result.textContent = "";
        againButton.style.display = 'none';
        againButton.disabled = true;
        playerScoreText.textContent = "Player: "+playerScore;
        cpuScoreText.textContent = "CPU: "+cpuScore;
    }
    function intermission(){
        gameState="intermission";
        againButton.style.display = 'block'; 
        againButton.disabled = false;
    }
    function gameWin(){
        result.textContent = "Player Wins";
        intermission();
    }
    function gameLose(){
        result.textContent = "Player Loses";
        intermission();
    }
    function output(outcome){
        switch(outcome){
            case 'draw':
                break;
            case 'win':
                playerScore++;
                break;
            case 'lose':
                cpuScore++;
                break;
        }
        if((playerScore >= 5)||(cpuScore >= 5)){
            if(playerScore >= 5){
                gameWin();
            }
            else{
                gameLose();
            }
        }
        playerScoreText.textContent = "Player: "+playerScore;
        cpuScoreText.textContent = "CPU: "+cpuScore;
    }
    function displayImage(element, decision, cpu){
        switch(decision){
            case 0:
                element.src = "./images/rock.png";
                break;
            case 1:
                if(cpu){element.src = "./images/scissorscpu.png";}
                else{element.src = "./images/scissorsplayer.png";}
                break;
            case 2:
                element.src = "./images/paper.png";
                break;
        }
    }
    inputs.forEach(input => {
        input.addEventListener("click",(e)=>{
            if (gameState=="playing"){
                let selected = e.target.closest('.option');
                playerDecision = choices[selected.id];
                console.log(playerDecision);
                computerDecision = Math.floor(Math.random()*3);
                displayImage(playerDecisionImage, playerDecision, false);
                displayImage(cpuDecisionImage, computerDecision, true);
                if (playerDecision == computerDecision){
                    output('draw');
                }
                else if((playerDecision - computerDecision == -1)||(playerDecision - computerDecision == 2)){
                    output('win');
                }
                else{
                    output('lose');
                }
            }
        });
    });
    againButton.addEventListener("click",(e)=>{
        reset();
    })
});