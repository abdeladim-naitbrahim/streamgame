
const donationlink=
{Mirror:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/840b3d6e362053e4eb83af0ca7228762~tplv-obj.png",

Football:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/c043cd9e418f13017793ddf6e0c6ee99~tplv-obj.png",

Hi:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/1339a0381f235a3e4011d6d8a0bead6a~tplv-obj.png",

"Hand Wave":"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/63135affee2016240473cab8376dfe74~tplv-obj.png",

GG:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/3f02fa9594bd1495ff4e8aa5ae265eef~tplv-obj.png",

Gamepad:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8ebe28a907bb6237fa3b11a97deffe96~tplv-obj.png",

"Mini Speaker":"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/728cc7436005cace2791aa7500e4bf95~tplv-obj.png",

Doughnut:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/4e7ad6bdf0a1d860c538f38026d4e812~tplv-obj.png",

TikTok:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/802a21ae29f9fae5abe3693de9f874bd~tplv-obj.png",

"Ice Cream Cone":"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/968820bc85e274713c795a6aef3f7c67~tplv-obj.png",

Weights:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a99fc8541c7b91305de1cdcf47714d03~tplv-obj.png",

Rose:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/eba3a9bb85c33e017f3648eaf88d7189~tplv-obj.png",

"Magic Letter":"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/df825153f014609f2093488846ae184d~tplv-obj.png",

"Finger Heart":"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/a4c4dc437fd3a6632aba149769491f49.png~tplv-obj.png",

Lollipop:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/7d055532898d2060101306de62b89882~tplv-obj.png",

Mic:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/8d4381b7d2272ffc14227c3705832e24~tplv-obj.png",

Perfume:"https://p16-webcast.tiktokcdn.com/img/maliva/webcast-va/20b8f61246c7b6032777bb81bf4ee055~tplv-obj.png"}



let donationpoint=//{rose:5,doghunt:20,tiktok:2};
{ Mirror:10,

    Football:10,
    
    Hi:10,
    
    "Hand Wave":10,
    
    GG:10,
    
    Gamepad:10,
    
    "Mini Speaker":10,
    
    Doughnut:10,
    
    TikTok:10,
    
    "Ice Cream Cone":10,
    
    Weights:10,
    
    Rose:10,
    
    "Magic Letter":10,
    
    "Finger Heart":10,
    
    Lollipop:10,
    
    Mic:10,
    
    Perfume:10}


console.log("dn2")
function setdonationtext(comment)
{

   /* donationlink.keys.array.forEach(element => {
        texttype[element]='<span class="tiktok-1r7t292"><span>sent</span><span><img src="'+donationlink[element]+'"></span><span>x1</span></span>' ;
    });  
*/
    let x=getdonationtype(comment)
    //console.log('<span class="tiktok-1r7t292"><span><img src="'+donationlink[x.type]+'"></span><span>x'+x.duplicat+'</span></span>' );
    return '<span class="tiktok-1r7t292"><span><img src="'+donationlink[x.type]+'"></span><span>x'+x.duplicat+'</span></span>' ;  
}
function getdonationtype(comment) 
{
    result={type:"Rose",duplicat:donationpoint.Rose}


    Object.keys(donationlink).forEach(element => {
        if(comment.innerHTML.includes(donationlink[element]))
        {
            result.type=element;
           
        }
    });
    reg=/<\/span><span>x(\d*)<\/span>/
    result.duplicat=parseInt(comment.innerHTML.match(reg)[1]||"1")
    return result;
}
function getdonationdamage(comment) 
{
    let x=getdonationtype(comment)
    return donationpoint[x.type]*x.duplicat
}