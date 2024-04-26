let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('.newgame');
let winnerance = document.querySelector('.winanc');
let turno = true;

let winnerpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turno = true;
    enabledBoxes();
    winnerance.classList.add('hide');
    newGameBtn.classList.add('hide');
}

boxes.forEach(box => {
    box.addEventListener('click', function(){
        if(turno){
            box.innerText='o';
            turno=false;
         }else{
            box.innerText='x'
            turno=true;
         }
         box.disabled=true;

        checkWinner();
     });
});

const disabledBoxes= () =>{
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
};

const enabledBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
    }
};

const showWinner = (winner) => {
    winnerance.innerText=`Congratulations, winner is ${winner}`;
    winnerance.classList.remove('hide');
    newGameBtn.classList.remove('hide');
    disabledBoxes();
}

const checkWinner = () =>{
    for(let pattern of winnerpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);

