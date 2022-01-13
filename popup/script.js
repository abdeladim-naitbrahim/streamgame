let page = browser.extension.getBackgroundPage();

jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;           
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};



$(document).ready(function(e) {
        $("#bt1").click(function(){
			$("#file1").trigger('click');
		});

    $("#bt2").click(function(){
			$("#file2").trigger('click');
		});

    $("#tm").ForceNumericOnly();
    $("#tm").on('change', function() {
      console.log( this.value );
      page.settime(parseInt(this.value))
    });

    $("#power").ForceNumericOnly();
    $("#power").on('change', function() {
      console.log( this.value );
      page.setcoefitionpower(parseInt(this.value))
    });
    creatpointsvalues();

    });




//var input1 = document.querySelector('input[type=file]'); // see Example 4
let input1=$("#file1");
console.log(input1);
let input2=$("#file2");
input1.change (function (event){ console.log("ch1");ch (1);});
console.log(input1.onchange);
input2.change(function (event){console.log("ch2");ch (2);});
const input=[input1,input2];



function ch (i) {

  console.log("change");
    var file = input[i-1][0].files[0];
    //drawOnCanvas(file,i);   // see Example 6
    displayAsImage(file,i); // see Example 7
    console.log($("#bt"+i));
    $("#bt"+i).hide();
    $("#bt"+i).parent().parent().find('h3').hide();
  };
function drawOnCanvas(file,i) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var dataURL = e.target.result,
        c = document.querySelector('canvas'), // see Example 4
        ctx = c.getContext('2d'),
        img = new Image();

    img.onload = function() {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    img.src = dataURL;
  };

  reader.readAsDataURL(file);
}

function displayAsImage(file,i) {
  var imgURL = URL.createObjectURL(file),
  img = $("#image"+i)[0];//document.createElement('img');
//console.log(img.src);
//console.log(imgURL);
/*  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };
*/
  img.src = imgURL;
  if(i==1)
  page.background(file);
  else
  {
    addenemmy(i+1);
    page.addenemmy(file,i-2)
  }
  //else
  //browser.downloads.download({ url : imgURL})
  //document.body.appendChild(img);
}
function addenemmy(i) 
{

 let $x=$(".myblock:eq(3)").clone(false).appendTo("body")//.attr("id","image"+i)//.$("#image2").attr("id","image"+i)
 $x.find("#image2").attr("id","image"+i);
 $x.find("#image"+i).attr("src","http://macgroup.org/blog/wp-content/uploads/2011/10/iphone-camera-icon-150x150.jpg");
 $x.find("#upfile2").attr("id","upfile"+i);
 $x.find("#file2").attr("id","file"+i);
 $x.find("#bt2").attr("id","bt"+i);
 $("#bt"+i).show();
 input[i-1]=$("#file"+i);
 //console.log(input)
 $("#file"+i).change(function (event){//console.log("");
 ch (i);});

id="upfile2"
id="file2"
id="bt2"
  //x > $("#image2").attr("id","image"+i);
  //console.log(x.innerHTML)
  //x.appendTo("body");

  $("#bt"+i).click(function(){
    $("#file"+i).trigger('click');
  });
  
}
