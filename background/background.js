"use strict";
console.log('back background');
const dotationpoint=
{ Mirror:10,

  Football:10,
  
  Hi:10,
  
  "Hand Wave":10,
  
  GG:10,
  
  Gamepad:10,
  
  "Mini Speaker":10,
  
  Doughnut:10,
  
  TikTok:10,
  
  "Ice Cream Cone":10,
  
  Weights:10,
  
  Rose:10,
  
  "Magic Letter":10,
  
  "Finger Heart":10,
  
  Lollipop:10,
  
  Mic:10,
  
  Perfume:10}
  const attackPoint={like:2,subscribe:3,share:4}

let setting={background:"",enemmys:[],time:20,dotationpoint,attackPoint,coefitionpower:1}



function background(file)
{
  var imgURL = URL.createObjectURL(file)
  setting.background=imgURL;
}

function addenemmy(file,i)
{
  var imgURL = URL.createObjectURL(file)
  setting.enemmys[i]=imgURL;
}
function settime(t) 
{
  setting.time=t;
}
function setpointattack(key,point) 
{
  setting.attackPoint[key]=point;
}
function setdotationpoint(key,point) 
{
  setting.dotationpoint[key]=point;
}
function setcoefitionpower(point) 
{
  setting.coefitionpower=point;
}

function onError(error) {
    console.error(`Error: ${error}`);
  }
  
 function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
      browser.tabs.sendMessage(
        tab.id,
        {greeting: "send start",setting}
      ).then(response => {
        console.log("start recuved");
        console.log(response.response);
      }).catch(onError);
    }
  }
  

function start()
{
    console.log('back start');
    (browser.tabs.query({
        currentWindow: true,
        active: true
      })).then(sendMessageToTabs).catch(onError);
}


function end()
{
    console.log('end start');
}
