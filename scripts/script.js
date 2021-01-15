var x=0;
function changeTheme() {
    if(x==0)
    {
        p=document.getElementById("para");
        p.style.color ="black";
        document.getElementById("head").style.color="black";
        document.getElementById("body").style.backgroundColor="white";
        document.getElementById("credits").style.color="black";
        document.getElementById("profile").src="Photos/circle-cropped-2.png";
        document.getElementById("cross1").src="Photos/image.png";
        document.getElementById("cross2").src="Photos/image.png";
        img=document.getElementById("geek1");
        img.src="Photos/logo_light.png";
        img.style.height="165px";
        img.style.position="relative";
        img.style.left="20px";
        img.style.top="0px";

        document.getElementById("geek2").style.display="none";
        x=x+1;
    }
    else
    {
        p=document.getElementById("para");
        p.style.color ="white";
        document.getElementById("head").style.color="white";
        document.getElementById("body").style.backgroundColor="#1D1E20";
        document.getElementById("geek1").src="Photos/vector.png";
        document.getElementById("geek2").src="Photos/vector copy.png";
        document.getElementById("geek2").style.display="block";
        document.getElementById("profile").src="Photos/circle-cropped.png";
        img.style.position="absolute";
        document.getElementById("credits").style.color="white";
        document.getElementById("cross1").src="Photos/Vector-2.png";
        document.getElementById("cross2").src="Photos/Vector-3.png";
        img.style.height="125px";
        img.style.height="108px";
        img.style.left="50px";
        img.style.top="80px";
        x=x-1;
    }

    
} 