$(document).ready(function(e) {
        $("#setting").click(function(){
          console.log('setting')
          window.open('setting.html' ,"MsgWindow", "width=600,height=1024")
		});

    $("#start").click(function(){
      console.log('setting')
      start();
});
  });
function start()
{
  let page = browser.extension.getBackgroundPage();
  page.start();
}