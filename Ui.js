const attackPointlink={like:browser.runtime.getURL("resource/image/like.png")
,subscribe:browser.runtime.getURL("resource/image/follow.png")
,share:browser.runtime.getURL("resource/image/share.png"),donation:"",comment:''
}
function creatpointsvalues()
{


    Object.keys(attackPoint).forEach(x=>{
        if(x=="comment"||x=="donation")
        return;
        let y=$('<div class="point"><img src="" alt=""><span >'+attackPoint[x]*coefitionpower+' attack</span>')
        y.find('img').attr('src',attackPointlink[x])
        y.appendTo(".instruction")
    })
    Object.keys(donationlink).forEach(x=>{
        let y=$('<div class="point"><img src="" alt=""><span>'+donationpoint[x]*coefitionpower+' attack</span>')
        y.find('img').attr('src',donationlink[x])
        y.appendTo(".instruction")
    })
}

function fillvalue()
{
    if($('instruction').length>=0)
creatpointsvalues();
else
setInterval(x=>{
    fillvalue();
}
,1000)

}

//fillvalue()

