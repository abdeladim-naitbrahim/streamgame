console.log('comments');
function get_rose_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-a24hmf-DivChatRoomMessage");//childNodes;
    return Array.prototype.slice.call(x);
}
function get_normal_comments()
{
    //console.log("get html comments");
    const x = document.getElementsByClassName("tiktok-smm0lt-DivChatMessageList ex6o5345")[0].getElementsByClassName("tiktok-1t802xs-DivChatRoomMessage-StyledChatMessageItem e11g2s300");//childNodes;
    return Array.prototype.slice.call(x).map(x=>{return {comment:x,type:"comment"}});
}
function get_html_comments()
{
    return get_normal_comments();
}
function get_data_from_html(x0)
{
    x=x0.comment;
    x.id="Bnight";
    let name=x.childNodes[1].childNodes[0].childNodes[0].innerHTML;
    let image=x.childNodes[0].childNodes[0].childNodes[0].src;
    //console.log(image.outerHtml)
    console.log(image)
    let comment=x.childNodes[1].childNodes[1].innerHTML;
    let y={name,image,comment,type:x0.type};
    return y;
}
function get_all_comments_data()
{
   // console.log("get all comments");
    const x = get_html_comments();    
    let y=x.filter(x=>x.comment.id=="").map(get_data_from_html);
    return y;
}
function get_filtered_comments_data()
{
   // console.log("get comment");
    let x= get_all_comments_data();
    return x;
}
function get_comments()
{
    comments=[];
    let x=get_filtered_comments_data();    
    return x/*.map((x0)=>{
        points.addpoint(x0);
        return "<div>"+'<div class="profileimage">'+x0.image+"</div>"+"<div>"+x0.name+"</div>"+"<div>"+x0.comment+"</div>"+"</div>"})*/
}
