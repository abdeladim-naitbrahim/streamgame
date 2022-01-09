"use strict";
console.log('back background');


function onError(error) {
    console.error(`Error: ${error}`);
  }
  
 function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
      browser.tabs.sendMessage(
        tab.id,
        {greeting: "send start"}
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
