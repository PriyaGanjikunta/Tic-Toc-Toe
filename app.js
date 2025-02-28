let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg1");
let resetbtn = document.querySelector("#reset-btn");

let turnO = true;

const winPattern = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText='O';
            turnO=false;
        }else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="" &&  pos1===pos2 && pos2===pos3 ){
            console.log("Winner", pos1 );
            disableBoxes();
            msg.innerText=`Congractulations, Winner is ${pos1}`;
            msg.classList.remove("hide");
        }
    }
}

const resetBoxes = () =>{
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}

resetbtn.addEventListener("click", () => {
    resetBoxes();
})
