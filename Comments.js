console.log('comments');
function get_rose_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-a24hmf-DivChatRoomMessage");//childNodes;
    return Array.prototype.slice.call(x).map(x=>{return {comment:x,type:"rose"}});
}

function get_like_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-njvkbs-DivChatRoomMessage-StyledLikeMessageItem e12fsz0m0");//childNodes;
    return Array.prototype.slice.call(x).map(x=>{return {comment:x,type:"like"}});
}
function get_share_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-1yqmv63-DivChatRoomMessage-StyledSocialMessageItem ejgm6zf0");//childNodes;
    return Array.prototype.slice.call(x).map(x=>{return {comment:x,type:"share"}});
}

function get_subscribe_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-1yqmv63-DivChatRoomMessage-StyledSocialMessageItem ejgm6zf0");//childNodes;
    return Array.prototype.slice.call(x).map(x=>{return {comment:x,type:"subscribe"}});
}

function get_normal_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-1t802xs-DivChatRoomMessage-StyledChatMessageItem e11g2s300");//childNodes;
    return Array.prototype.slice.call(x).map(x=>{return {comment:x,type:"comment"}});
}






const sleep = ms => new Promise(res => setTimeout(res, ms));

function get_html_comments()
{
    return [...get_rose_comments(),...get_like_comments(),...get_subscribe_comments(),...get_share_comments()].filter(x=>x.comment.id=="").slice(0,3); //[...get_normal_comments(),...get_rose_comments(),...get_like_comments(),...get_share_comments(),...get_subscribe_comments()];
}
async function get_data_from_html(x0)
{
    x=x0.comment;
    x.id="Bnight";
    let name=x.childNodes[1].childNodes[0].childNodes[0].innerHTML;
    //let image=""//x.childNodes[0].childNodes[0].childNodes[0].src;
    //console.log(image.outerHtml)
    //console.log(image)
    let comment=""//x.childNodes[1].childNodes[1].innerHTML;
    x.childNodes[1].childNodes[0].childNodes[0].click();
    let image=undefined//document.getElementsByClassName("tiktok-1vkqxtw-DivUserCardContainer e1dsbczr1")[0].childNodes[0].childNodes[0].childNodes[0].src;
    
    while(!image)
    {
        image=document.getElementsByClassName("tiktok-1vkqxtw-DivUserCardContainer e1dsbczr1")[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.src;
        //console.log("not yet: ",name);
        await sleep(100);        
    }
    image=document.getElementsByClassName("tiktok-1vkqxtw-DivUserCardContainer e1dsbczr1")[0].childNodes[0].childNodes[0].childNodes[0].src;
    document.getElementsByClassName("tiktok-1vkqxtw-DivUserCardContainer e1dsbczr1")[0].childNodes[0].childNodes[2].click();
    while(document.getElementsByClassName("tiktok-1vkqxtw-DivUserCardContainer e1dsbczr1")[0])
    {
        //console.log("close: ",name);
        await sleep(100);
    }
    console.log(image);
    let y={name,image,comment,type:x0.type};
    
    return y;
}
async function get_all_comments_data()
{
   // console.log("get all comments");
    const x = get_html_comments();
    if(x.length>0)
    playing=true;  
    //let y=await (x.filter(x=>x.comment.id=="").map( await get_data_from_html));
    let z =x.filter(x=>x.comment.id=="");
    let y=[];
    for(let i=0;i<z.length;i++)
    {
        let a=z[i];
        let b=await await get_data_from_html(a);
        y.push(b);
    }
   // console.log("get_all_comments_data")
    return y;
}
async function get_filtered_comments_data()
{
   // console.log("get comment");
    let x=await get_all_comments_data();
    console.log("get_filtred_comments_data")
    return x;
}
async function get_comments()
{
    comments=[];
    let x=await get_filtered_comments_data();
    console.log("get_comment")
    //comments=x    
    return x/*.map((x0)=>{
        points.addpoint(x0);
        return "<div>"+'<div class="profileimage">'+x0.image+"</div>"+"<div>"+x0.name+"</div>"+"<div>"+x0.comment+"</div>"+"</div>"})*/
}
