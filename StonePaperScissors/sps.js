let YourScore = 0;
let CompScore = 0;
let win = true;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const users = document.querySelector("#my-score")
const comps = document.querySelector("#comp-score")

const showDraw = () => {
    msg.innerText = "Party Its a DRAW !!"
    msg.style.backgroundColor = "gray" ;
}


const showWin = () => {
    if (win === true){
        msg.innerText= "USER WINS !! Partyyy"
        YourScore++;
        users.innerText = `${YourScore}`
        msg.style.backgroundColor = "#B0DB43" ;
    }
    else{
        msg.innerText= "Comp wins, sad party :("
        CompScore++
        comps.innerText = CompScore;
        msg.style.backgroundColor = "red" ;
    }
}

const playGame = (UserChoice) => {
    const CompChoiceIDX = Math.floor(Math.random() * 3);

    const CompChoice = choices[CompChoiceIDX].getAttribute("id")

    // if (CompChoice == "rock" && UserChoice == "paper"){
    //     console.log("User Wins")
    // }
    // if (CompChoice == "rock" && UserChoice == "scissor"){
    //     console.log("Comp Wins")
    // }
    // if (CompChoice == "paper" && UserChoice == "rock"){
    //     console.log("Comp Wins")
    // }
    // if (CompChoice == "paper" && UserChoice == "scissor"){
    //     console.log("User Wins")
    // }
    // if (CompChoice == "scissor" && UserChoice == "rock"){
    //     console.log("User Wins")
    // }
    // if (CompChoice == "scissor" && UserChoice == "paper"){
    //     console.log("Comp Wins")
    // }

    

    if ( UserChoice === CompChoice){
        showDraw();
    }else if (CompChoice=== "rock"){
        win = UserChoice==="scissor"? false:true;
        showWin()
    }else if (CompChoice=== "paper"){
        win = UserChoice==="rock"? false:true;
        showWin()
    }else if (CompChoice=== "scissor"){
        win = UserChoice==="paper"? false:true;
        showWin()
    }

}

choices.forEach((choice) =>{
    choice.addEventListener(("click"), () => {
        const UserChoice = choice.getAttribute("id");
        console.log("choice clicked", UserChoice);
        playGame(UserChoice);
    })
})