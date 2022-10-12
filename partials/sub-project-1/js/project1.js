let tmrId=null;
const circle=document.getElementById('cursor');
addEventListener('mousemove',(eventData)=>{
    if(tmrId!=null){
        clearTimeout(tmrId);
        tmrId=null;
    }
    circle.style.opacity=1;
    circle.style.left=`${eventData.pageX}px`;
    circle.style.top=`${eventData.pageY}px`;
    tmrId=setTimeout(()=>{
        circle.style.opacity=0;
    },3000);
    
    
});

document.body.addEventListener('mouseleave',()=>{
    circle.style.opacity=0;
    
});
document.body.addEventListener('mouseenter',()=>{
    circle.style.opacity=1;
});





