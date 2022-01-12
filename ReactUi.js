let duration=20
let stop=false;
class CanvasReact extends React.Component {
  constructor(props) {
    super(props);
    this.update=this.update.bind(this);
    this.begining=this.begining.bind(this);
    this.begining(props);
  }
  begining(props)
  {    
    this.state=( {lose:false ,power: 100,attack:false,comments:[] });
    console.log("contricture:",this.state.power);
    this.myTimeout=setTimeout(() => {},  500);
  }
    render() {
      let stl=(image_background==""?{}:{"background-image": 'url("'+image_background+'")'})
      //console.log(this.state.power)
      //console.log(this.state.comments);
      if(!this.state.lose)
      stop=false;
      if( this.state.lose)
        {
          clearcomment();
          return React.createElement(FinalReact,{bestScore:points.bestScore,listscore:points.finalpoints});}
      else
        {
          return React.createElement("div",{className:"myDiv",style:stl},React.createElement(CommentsReact,{comments:this.state.comments}),
      React.createElement("div",{className:"game"},     React.createElement(CreeperReact,{attack:this.state.attack}), React.createElement("div",{className:"bar"},React.createElement(BarReact,{power:this.state.power})), React.createElement("img",{className:"instruction",src:instructionimage}))
      );}
    }
    update(x)
    {
      let damage;
      damage=(x==0?0:attackPoint[x.type]);
      gloabalpower=this.state.power;
      if(this.state.power<=0)
      {  
        this.setState({lose:true , power: 0,attack:true,comments:[]});
        console.log("finish");
      }
      else
      {
        clearTimeout(this.myTimeout)
        this.setState({lose:false , power: this.state.power>=damage? (this.state.power-damage):0,attack:true,comments:(x==0?(this.state.comments):([...this.state.comments,x]))});
        this.setState({lose: this.state.power<=0 , power: this.state.power,attack:true,comments:this.state.comments});
        this.myTimeout=setTimeout(() => {
          this.setState({lose:this.state.lose , power: this.state.power,attack:false,comments:this.state.comments}
          //this.setState({lose:this.state.lose , power: this.state.power,attack:false,comments:this.state.comments?.slice(0,this.state.comments.length-1)}
            );
            gloabalpower=this.state.power;
      },  1000);
      setTimeout(() => {       
        this.setState({lose:this.state.lose , power: this.state.power,attack:this.state.attack,comments:this.state.comments?.slice(1)}
          );
          gloabalpower=this.state.power;
    },  2000);
      }
      
    }

    componentDidMount()
    {
      
    }
    componentWillUnmount()
    {
      
    }
  }
  
  class CommentsReact extends React.Component {
    constructor(props) {
      super(props);
      this.state={comments:this.props.comments};
      console.log(this.state.comments);
    }
  /*addcomment(x)
  {
    //video_space1.innerHTML+='<div class="oncomment">'+'<div class="profileimage"><img src="'+x.image+'"></img></div>'+"<div>"+x.name+"</div>"+"<div>"+x.type+"</div>"+"</div>";   
    setState({comments:[this.state.comments,x]})
    setTimeout(() => {
       setState({comments:this.state.comments?.slice(0,this.state.comments.length-1)})
    },  2000);
  }*/
    render() {
      //console.log(this.props.comments[0]);
      return React.createElement("div",{className:"comment"},this.props.comments.map(x=>React.createElement(OneComment,{comment:x})));
    }
  }
  class BarReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { power: props.power };
      }
    render()
    {
        const stl={width:100+"%",margin:"auto",position:"relative",top: "50%",transform: "translate(0, -50%)",padding: "2px"};
        const stl2={width:this.props.power+"%",heigh:"100%",left:"0px"};
      return React.createElement("div",{id:"myBar", style:stl,className:"w3-container w3-blue w3-round-xlarge"},
      React.createElement("div",{id:"myBar", style:stl2,className:"w3-container w3-green w3-round-xlarge"},this.props.power+"%")
      );
    }
  }
  
  class CreeperReact extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return React.createElement("img",{className:"creeper"+(this.props.attack?" creeperanimated":""),src:enemmys[currentenemy]});
    }
  }


  function createMarkup(props) 
  {
    //console.log(props.listscore[0].name);  
    let namereg=/@(\d)/g
    let pointreg=/@@(\d)/g
    let imagereg=/@@@(\d)/g

    let names  = [];
    let points = [];
    let images = [];
    props.listscore.forEach(x => {
      //console.log(x.name)
      //console.log(x.point)
      //console.log(x.image)
      names.push(x.name);
      points.push(x.point);
      images.push(x.image);
    });

    let count=0;
    let htmlboard0=htmlboard.replace("@@@@",(totime(props.time)));
     htmlboard0=htmlboard0.replace(imagereg,(x,y)=>{return images[parseInt(y)-1]})//(x,y)=>{return ""})
    count=0;
    htmlboard0=htmlboard0.replace(pointreg,(x,y)=>{return points[parseInt(y)-1]})//(x)=>{return ""})
    count=0;
    htmlboard0=htmlboard0.replace(namereg,(x,y)=>{return names[parseInt(y)-1]})//(x)=>{return ""})
    
    //console.log(htmlboard);
    return {__html: htmlboard0};
  }
  function totime (sec_num) {
   //sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}
  function ReactBoard(props) {
    //return <div dangerouslySetInnerHTML={createMarkup()} />;
    //console.log(props.listscore[0].name);  
    return React.createElement("div",{dangerouslySetInnerHTML:createMarkup(props)});
  }


  class FinalReact extends React.Component {
    constructor(props) {
      super(props);
      this.state={firsttime:Math.floor(Date.now() / 1000),time:duration};
    }
    render() {
      this.time=duration+this.state.firsttime-Math.floor(Date.now() / 1000);
      //console.log(this.props.listscore[0].name);  
      if(this.time<=1)
      {        
        if(!stop)
        {this.myTimeout=setTimeout(() => {
          
          console.log("newgame")
          currentenemy++;
          currentenemy=currentenemy%enemycount;
          console.log(currentenemy)
          newGame();
      },  100);
      stop=true;}
      }
      else
      {
        this.myTimeout=setTimeout(() => {
          this.setState({firsttime:this.state.firsttime,time:this.time});
      },  100);
      }      
      if(this.time<=0)
      this.time=0;
      this.tempProps = JSON.parse(JSON.stringify(this.props));
      this.tempProps.time = this.time;
      Object.preventExtensions(this.tempProps);
      return React.createElement("div",{className:"myDiv"},React.createElement("div",{className:"gameOver"},
      //React.createElement("div",null,this.props.bestScore.name),
      //React.createElement("div",null,this.props.listscore.map(x=>(x.name+":"+x.point))),
          
      React.createElement(ReactBoard,this.tempProps)
      ));
    }
  }

  

  class OneComment extends React.Component {
    constructor(props) {
      super(props);
     // console.log(this.props);
    }
    render() {
     // console.log(this.props);
      //return React.createElement("div",{className:""},this.props.comment?.name);
       return React.createElement("div",{className:"comment0"},
        React.createElement("section",{className:"notification animation"},
            React.createElement("img",{src:this.props.comment?.image}),
            React.createElement("h6",null,this.props.comment?.name),
            React.createElement("div",{dangerouslySetInnerHTML:{__html:texttype[this.props.comment?.type||comment]}})
        )
    );
    }
  }



  
  