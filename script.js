let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true//playerX,Y

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide")
};

const disableBoxes =  () => {
    for(let box of boxes){
        box.disabled = true
    }
};

const enableBoxes =  () => {
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
};


boxes.forEach((box) => {
box.addEventListener("click",function(e){
    console.log("box was clicked")
    box.innerText = 'ABC'
    if(turnO){
        box.innerText = 'X'
        turnO = false
    }
    else{
        box.innerText = 'O'
        turnO = true
    }
    box.disabled = true;

    checkWinner();
})
});

const showWinner = (winner) => {
    msg.innerText = `Congratulation,winner is ${winner}` 
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner = () => {
    for(let patter of winPattern){
        // console.log(patter[0],patter[1],patter[2]);
            let Pos1Val = boxes[patter[0]].innerText
            let Pos2Val = boxes[patter[1]].innerText
            let Pos3Val = boxes[patter[2]].innerText
        
            if(Pos1Val != "" && Pos2Val != "" && Pos3Val != ""){
            if(Pos1Val === Pos2Val && Pos2Val === Pos3Val){
                // alert("jiit gaye bhai" + " wins");
                console.log("winner",Pos1Val)
                showWinner(Pos1Val);
            }
            else{
                console.log("no winner yet")
            }
        }

    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
