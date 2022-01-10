let duration=600
class CanvasReact extends React.Component {
  constructor(props) {
    super(props);
    this.begining(props);
  }
  begining(props)
  {    
    this.state = {lose:false ,power: 100,attack:false };
    console.log("contricture:",this.state.power);
    this.myTimeout=setTimeout(() => {},  500);
  }
    render() {
      console.log(this.state.power)
      if( this.state.lose)
        return React.createElement(FinalReact,{bestScore:points.bestScore,listscore:points.finalpoints});
      else
        return React.createElement("div",{className:"myDiv"},React.createElement(CommentsReact,null),
      React.createElement("div",{className:"game"},     React.createElement(CreeperReact,{attack:this.state.attack}), React.createElement("div",{className:"bar"},React.createElement(BarReact,{power:this.state.power})), React.createElement("img",{className:"instruction",src:instructionimage}))
      );
    }
    update(damage)
    {
      gloabalpower=this.state.power;
      if(this.state.power<=0)
      {  
        this.setState({lose:true , power: 0,attack:true});
        console.log("finish");
      }
      else
      {
        clearTimeout(this.myTimeout)
        this.setState({lose:false , power: this.state.power>=damage? (this.state.power-damage):0,attack:true});
        this.setState({lose: this.state.power<=0 , power: this.state.power,attack:true});
        this.myTimeout=setTimeout(() => {
          this.setState({lose:this.state.lose , power: this.state.power,attack:false}
            );
            gloabalpower=this.state.power;
      },  1000);
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
    render() {
      return React.createElement("div",{className:"comment"});
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
      return React.createElement("img",{className:"creeper"+(this.props.attack?" creeperanimated":""),src:creeperimage});
    }
  }


  function createMarkup(props) 
  {
    //console.log(props.listscore[0].name);  
    let namereg=/@(\d)/g
    let pointreg=/@@(\d)/g
    let imagereg=/@@@(\d)/g

    let names=[];
    let points=[];
    let images=[];
    props.listscore.forEach(x => {
      console.log(x.name)
      console.log(x.point)
      console.log(x.image)
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
        this.myTimeout=setTimeout(() => {
          newGame();
      },  100);
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
    }
    render() {
      return React.createElement("div",{className:"myDiv"},React.createElement("div",{className:"gameOver"},React.createElement("h1",null,"Game finish")));
    }
  }



  
  