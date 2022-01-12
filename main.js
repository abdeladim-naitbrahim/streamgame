"use strict";
let creeperimage=browser.runtime.getURL("resource/image/creeper.png");
let enemmys=[creeperimage];
let currentenemy=0;
let enemycount=1;
let instructionimage=browser.runtime.getURL("resource/image/instruction.png");
let reactElement;
let comment_space;
let game_space;
let canvas_space;
let canvas_parrent
let comments;
let htmlboard;
let image_background="";
$.get(browser.runtime.getURL("resource/leaderboard.html"), function(html_string)
   {
    htmlboard=html_string;
   });


browser.runtime.onMessage.addListener(request => {
    if(request.setting.background!="")
    {
       // setbackgroundasync(request.setting.background);
       image_background=request.setting.background
       

    }
    if(request.setting.enemmys.length>0)
    {
        console.log(request.setting.enemmys)
        enemmys=(request.setting.enemmys);  
        enemycount=enemmys.length;      
    }       
    {
        duration=request.setting.time
    } 
    startplay();
    return Promise.resolve({response: "start recived"});
  });

async function setbackgroundasync(url) 
{
    if($('.myDiv').length>0)
    {
        $('.myDiv')[0].style["background-image"]='url('+url+')';
        console.log('found')
    }
    else
    {
        console.log('not found')
        await sleep(1);
        setbackgroundasync(url) 
    }
}
//lifecycle();





function startplay()
{
    console.log("startplay");
    currentenemy=0;
    canvas_parrent=creat_canvas()
    newGame();
}


async function asyncplay() 
{
    //console.log("asyncplay0")
   comments=await get_comments();
   //console.log("asyncplay")
   //console.log(comments);
    playgame(comment_space,game_space,comments);   
}
  
 function playloop()
 {
     if(gloabalpower<=0)
     clearcomment()
    else if(!playing && gloabalpower>0)
    {
     //   console.log("playing");
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
    let xx0=document.createElement("div");
    //xx0.css({"widht":"100%","heght":"100%","z-index":"99","background": "black"});
    $("body").append($("<div>", {css:{"width":"100%","height":"100%","z-index":"99","background-color": "black","position": "absolute","top": "0px","left":"0px"}}));
    let x = document.createElement("div")//document.getElementsByClassName("tiktok-7pi9to-DivLiveContainer e1b7vb0i0")[0];
    //x.style.cssText='height:80% ; --height:calc(45%); width:var(--height) ; z-index:100 ; margin:auto ;  position: absolute ; bottom:0px'
    x.style.cssText='height:80% ; aspect-ratio: 0.56; ; z-index:100 ; margin:auto ;  position: absolute ;top: 50%;    transform: translate(-50%, -50%);    left: 50%; box-shadow: -2.5px -2.5px 5px 5px rgba(33, 6, 166, 0.45);'
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



