"use strict";
let creeperimage=browser.runtime.getURL("resource/image/creeper.png");
let instructionimage=browser.runtime.getURL("resource/image/instruction.png");
let reactElement;
let comment_space;
let game_space;
let canvas_space;
let canvas_parrent
let comments;
let htmlboard;
$.get(browser.runtime.getURL("resource/leaderboard.html"), function(html_string)
   {
    htmlboard=html_string;
   });


browser.runtime.onMessage.addListener(request => {
    startplay();
    return Promise.resolve({response: "start recived"});
  });


//lifecycle();





function startplay()
{
    console.log("startplay");
    canvas_parrent=creat_canvas()
    newGame();
}


async function asyncplay() 
{
    console.log("asyncplay0")
   comments=await get_comments();
   console.log("asyncplay")
   console.log(comments);
    playgame(comment_space,game_space,comments);   
}
  
 function playloop()
 {
    if(!playing && gloabalpower>0)
    {
        console.log("playing");
        asyncplay();
        //console.log(gloabalpower);
        
    }
    setTimeout(() => {
        playloop();
    },  1000);
 } 


 //playloop();



function creat_canvas()
 {
    console.log("creat canvas");
    let x = document.createElement("div")//document.getElementsByClassName("tiktok-7pi9to-DivLiveContainer e1b7vb0i0")[0];
    x.style.cssText='height:80% ; --height:calc(45%); width:var(--height) ; z-index:100 ; margin:auto ;  position: absolute ; bottom:0px'
    document.body.insertBefore(x, document.body.lastChild);
    reactElement=ReactDOM.render(React.createElement(CanvasReact, null), x); 
    reactElement.begining(null);
    reactElement.update(0);
    return x;
 }
function get_canvas(x)
{

    //x.innerHTML="";
    console.log("get canvas");    
    reactElement.begining(null);
    reactElement.update(0);
    console.log(reactElement.innerHTML);
    //x.innerHTML='<div class="myDiv"><div class="comment"></div><div class="game">  <img class="creeper creeperanimated" src="'+creeperimage+'"></img> <div class="bar"></div> <img class="instruction" src="'+""+'"></img></div></div>';
    x=x.childNodes[0];return x;
}



