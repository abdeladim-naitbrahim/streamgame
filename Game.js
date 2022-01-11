let gloabalpower=100;
const attackPoint={comment:1,like:2,rose:2,subscribe:3,share:4}
const texttype={comment:"comment",like:"Send Like",rose:'<span class="tiktok-1r7t292"><span>sent</span><span><img src="https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.png"></span><span>x1</span></span>'
,subscribe:"Send Follow",share:"Send Share"}
class Point 
{
    constructor()
    {
      this.points = {};
      this.finalpoints=[];
      this.bestScore={}
    }
    clear()
    {
        this.points = {};
        this.finalpoints=[];
        this.bestScore={}
    }
    addpoint(comment)
    {        
       // console.log(comment.image);
        this.points[comment.name]={point:(this.points[comment.name]?.point||0)+attackPoint[comment.type],image:comment.image};    
        this.finalpoints=Object.keys(this.points).map(x=>({image:this.points[x].image,name:x,point:this.points[x].point})).sort((a,b)=>(-a.point+b.point)).slice(0, 5);
        //this.finalpoints=this.finalpoints.fill({name:"_",point:'_',image:""},this.finalpoints.length,5)
        while(this.finalpoints.length<5)
        this.finalpoints.push({name:"_",point:'0',image:""})
        //console.log(this.finalpoints[0]);
        this.bestScore=this.finalpoints[0];

    }
  }
let power;
let playing=false;
let points=new Point();
function attack(x)
{
    //console.log(x.type," ",attackPoint[x.type])    
    reactElement.update(x);
}
function addcomment0(x,video_space1)
{
    video_space1.innerHTML+='<div class="oncomment">'+'<div class="profileimage"><img src="'+x.image+'"></img></div>'+"<div>"+x.name+"</div>"+"<div>"+x.type+"</div>"+"</div>";   
    setTimeout(() => {
        video_space1.childNodes[0].remove();
    },  500);
}
function newGame()
{
    gloabalpower=100;
    points.clear();
    power=100;
    canvas_space=get_canvas(canvas_parrent);
    reactElement.update(0);
    comment_space=canvas_space.childNodes[0];
    game_space=canvas_space.childNodes[1];
    //comments=get_comments();
    comments=[];
    //canvas_space=get_canvas();
    //comment_space=canvas_space.childNodes[0];
    //game_space=canvas_space.childNodes[1];    
    playloop();
}
function endGame()
{
    gloabalpower=100;
    points.clear();
    power=100;
}
function playgame(video_space0,game_space0,comments)
{
    //playing=comments.length>0;
    //if(playing)
   // console.log("play the game");
    comments.forEach((x, i) => {
        setTimeout(() => {
            if(gloabalpower>0)
            {
            //addcomment(x,video_space0);
            points.addpoint(x);
            attack(x);}
            if(comments.length-1<=i)
            playing=false
        }, i * 1000);
      });
}