$(document).ready(function(e) {
        $("#bt1").click(function(){
			$("#file1").trigger('click');
		});

    $("#bt2").click(function(){
			$("#file2").trigger('click');
		});
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
console.log(img.src);
console.log(imgURL);
  img.onload = function() {
    URL.revokeObjectURL(imgURL);
  };

  img.src = imgURL;
  //document.body.appendChild(img);
}

