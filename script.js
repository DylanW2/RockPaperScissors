document.addEventListener("DOMContentLoaded", function(){
    let playerDecision;
    let computerDecision;
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");
    let choicesText = ["Rock", "Scissors", "Paper"]
    let choices = {
        "rock": 0,
        "scissors": 1,
        "paper": 2
    };
    input.addEventListener("keydown",(event)=>{
        if (event.key === "Enter") {
            if (event.target.value in choices){
                playerDecision = choices[event.target.value];
                computerDecision = Math.floor(Math.random()*3);
                let playerChoiceText = choicesText[playerDecision];
                let computerChoiceText = choicesText[computerDecision];
                if (playerDecision == computerDecision){
                    output.textContent = `Draw! ${playerChoiceText} ties with ${computerChoiceText}`;
                }
                else if((playerDecision - computerDecision == -1)||(playerDecision - computerDecision == 2)){
                    output.textContent = `You WIN! ${playerChoiceText} beats ${computerChoiceText}`;
                }
                else{
                    output.textContent = `You LOSE! ${playerChoiceText} loses to ${computerChoiceText}`;
                }
            }
            else{
                output.textContent = `Invalid Input`;
            }
        }
    });
});