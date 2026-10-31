let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector("#Reset-btn");
let newbtn = document.querySelector("#New-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // playerX, playerO
let movecount = 0;
let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>
{
    turnO = true;
    movecount = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) =>
{
    box.addEventListener("click", () =>
    {
        if(turnO)
        {
            box.innerText = "O";
            box.style.color = "black";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            box.style.color = "#b0413e";
            turnO = true;
        }
        movecount++;
        box.disabled = true;
        checkWinner();
    })
})
const disableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        box.style.color = "";
    }
}
const showWinner = (Winner) =>
{
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const showdrawmatch = () =>
{
    msg.innerText = "Draw Match, Please Try Again!";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>
{
    for(let pattern of winpatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
                return;
            }
        }
    }
    if(movecount === 9)
    {
        showdrawmatch();
    }
}
newbtn.addEventListener("click", resetGame);
Resetbtn.addEventListener("click", resetGame);