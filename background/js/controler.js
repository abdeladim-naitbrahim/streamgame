"use strict";
console.log('back control');


function onError(error) {
    console.error(`Error: ${error}`);
  }
  
  function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
      browser.tabs.sendMessage(
        tab.id,
        {greeting: "Hi from background script"}
      ).then(response => {
        console.log("Message from the content script:");
        console.log(response.response);
      }).catch(onError);
    }
  }
  
  browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({
      currentWindow: true,
      active: true
    }).then(sendMessageToTabs).catch(onError);
  });


function start()
{
    console.log('back start');
}


function end()
{
    console.log('end start');
}
