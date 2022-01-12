"use strict";
console.log('back background');

let setting={background:"",enemmys:[],time:20}



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
