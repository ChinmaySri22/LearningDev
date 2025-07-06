let boxes = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
let win= document.querySelector("#msg")
let newgame = document.querySelector("#new")
let newbtn = document.querySelector("#new-game")
let count=0;
let turnX = true; //if false turn is of player O

let winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];

const resetbtn = () => {
    turnX=true;
    enablebox();
    newgame.classList.add("hide");
    count=0;
}

const showWinner = (winner)=> {
    win.innerText = `Player ${winner} won.`
    newgame.classList.remove("hide");
}

const showDraw = ()=> {
    win.innerText = `Sorry, Khichdi pakk gayii`
    newgame.classList.remove("hide");
}

const disablebox = () => {
    for (let box of boxes){
        box.disabled=true;
    }
}

const enablebox = () => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        let cell1 = boxes[pattern[0]].innerText;
        let cell2 = boxes[pattern[1]].innerText;
        let cell3 = boxes[pattern[2]].innerText;

        if (cell1 != "" && cell2 != "" && cell3 != ""){
            if (cell1 === cell2 && cell2 === cell3){
                console.log(`WINNER IS ${cell2}`)
                disablebox();
                showWinner(cell2);
            }
            if (count==9){
                console.log(`Sorry, Khichdi pakk gayii`)
                showDraw();
                count=0;
            }
        }
    }
};

boxes.forEach((box)=>{
    
    box.addEventListener("click", () => {
        
        
        if (turnX==true){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;

        count++;
        checkWinner();
    });
});

reset.addEventListener("click",resetbtn)
newbtn.addEventListener("click",resetbtn)