var boxes:HTMLElement[];
boxes = [
    document.getElementById("a1"),
    document.getElementById("a2"),
    document.getElementById("a3"),
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
];
var turn:number;
var positionsUsed:HTMLElement[];
positionsUsed = [document.getElementById("cont"),]
function userGame(element:HTMLElement){
    turn = 1;
    if(positionsUsed.includes(element)){
        console.log("try other box");
    }else{
        element.innerHTML = "x";
        positionsUsed.push(element);
        turn = 0;
        aiGame(boxes);
        checkIfWin();
    }
};
var num;
var waiter;
function aiGame(arr:HTMLElement[]){
    num = Math.floor(Math.random() * 9);
    if(positionsUsed.includes(arr[num])){
        console.log("try other box");
        aiGame(boxes);
        checkIfWin();
    }else{
      waiter = setTimeout(function(){arr[num].innerHTML = "O";}, 500);
        positionsUsed.push(arr[num]);
        turn = 1;
        checkIfWin();
    }
}

function checkIfWin(){
    if(boxes[0].textContent === "x" && boxes[1].textContent === "x" && boxes[2].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[3].textContent === "x" && boxes[4].textContent === "x" && boxes[5].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[6].textContent === "x" && boxes[7].textContent === "x" && boxes[8].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[0].textContent === "x" && boxes[3].textContent === "x" && boxes[6].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[1].textContent === "x" && boxes[4].textContent === "x" && boxes[7].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[8].textContent === "x" && boxes[5].textContent === "x" && boxes[3].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[0].textContent === "x" && boxes[4].textContent === "x" && boxes[8].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }else if(boxes[2].textContent === "x" && boxes[4].textContent === "x" && boxes[6].textContent === "x"){
        alert("You won!");
        clearTimeout(waiter);
    }

    if(boxes[0].textContent === "O" && boxes[1].textContent === "O" && boxes[2].textContent === "O"){
        alert("You lose");
        clearTimeout(waiter);
    }else if(boxes[3].textContent === "O" && boxes[4].textContent === "O" && boxes[5].textContent === "O"){
        alert("You lose");
        clearTimeout(waiter);
    }else if(boxes[6].textContent === "O" && boxes[7].textContent === "O" && boxes[8].textContent === "O"){
        alert("You lose!");
        clearTimeout(waiter);
    }else if(boxes[0].textContent === "O" && boxes[3].textContent === "O" && boxes[6].textContent === "O"){
        alert("You lose!");
        clearTimeout(waiter);
    }else if(boxes[1].textContent === "O" && boxes[4].textContent === "O" && boxes[7].textContent === "O"){
        alert("You lose!");
        clearTimeout(waiter);
    }else if(boxes[8].textContent === "O" && boxes[5].textContent === "O" && boxes[3].textContent === "O"){
        alert("You lose!");
        clearTimeout(waiter);
    }else if(boxes[0].textContent === "O" && boxes[4].textContent === "O" && boxes[8].textContent === "O"){
        alert("You lose!");
        clearTimeout(waiter);
    }else if(boxes[2].textContent === "O" && boxes[4].textContent === "O" && boxes[6].textContent === "O"){
        alert("You lose!");
        clearTimeout(waiter);
    }
}
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
        userGame(this);
    });
}                                            
