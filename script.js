let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#reset-button");
// let newg = document.querySelector("#new-game");


let t = 0;

rbtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
    }
    enable();
})


const winp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const  disable=()=>{
    t=0;
    for(let box of boxes){
        box.disabled=true;
    }
}
const  enable=()=>{
    t=0;
    for(let box of boxes){
        box.disabled=false;
    }
     document.querySelector(".message").innerText="Winner--N/A";
}

boxes.forEach((x) => {
  x.addEventListener("click", () => {
     if(t==0){
        x.innerText="O";
        t=1;
     }
     else
     {
        x.innerText="X";
        t=0;
     }
     x.disabled=true;
     checkpattern();
  });
});

const checkpattern=()=>{
    for(let p of winp){
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1==pos2&&pos2==pos3&&pos3==pos1)
            {
                if(pos1=="O")
                {
                    console.log("winner is 1st");
                    document.querySelector(".message").innerText="Winner is 1st Player";
                    
                    alert("WE HAVE FOUND OUR WINNER");
                    
                }
                else{
                    console.log("winner is 2nd");
                    document.querySelector(".message").innerText=" Winner is 2nd Player";
                     alert("WE HAVE FOUND OUR WINNER");
                     
                    
                }
                disable();
            }
        }
    }
}

