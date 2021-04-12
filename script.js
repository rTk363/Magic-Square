let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");
let btnreset=document.getElementById("btnreset");
let btncheck=document.getElementById("btncheck");
let hint=document.getElementById("hint");
let btnhow=document.getElementById("howbtn");
let btnhint=document.getElementById("hintbtn");
$("#hint-content").hide();
btn5.onclick=function(){
    btn1.classList.add("right");
    btn4.classList.add("up");
    btn7.classList.add("up");
    btn8.classList.add("left");
    btn9.classList.add("left");
    btn6.classList.add("down");
    btn3.classList.add("down");
    btn2.classList.add("right");
    setTimeout(function(){
        btn1.classList.remove("right");
        btn4.classList.remove("up");
        btn7.classList.remove("up");
        btn8.classList.remove("left");
        btn9.classList.remove("left");
        btn6.classList.remove("down");
        btn3.classList.remove("down");
        btn2.classList.remove("right");
        let a =btn1.innerHTML;
        btn1.innerHTML=btn4.innerHTML;
        btn4.innerHTML=btn7.innerHTML;
        btn7.innerHTML=btn8.innerHTML;
        btn8.innerHTML=btn9.innerHTML;
        btn9.innerHTML=btn6.innerHTML;
        btn6.innerHTML=btn3.innerHTML;
        btn3.innerHTML=btn2.innerHTML;
        btn2.innerHTML=a;

    },500);
    
    
}
btn1.onclick=function(){

    btn2.classList.add("down");
    btn5.classList.add("left");
    btn4.classList.add("diaup");
    setTimeout(function(){
        btn2.classList.remove("down");
        btn5.classList.remove("left");
        btn4.classList.remove("diaup");
        let a =btn2.innerHTML;
        btn2.innerHTML=btn4.innerHTML;
        btn4.innerHTML=btn5.innerHTML;
        btn5.innerHTML=a;
    },500);
    
    
}
btn3.onclick=function(){
    btn2.classList.add("diadown");
    btn5.classList.add("up");
    btn6.classList.add("left");
    setTimeout(function(){
        btn2.classList.remove("diadown");
        btn5.classList.remove("up");
        btn6.classList.remove("left");
        let a =btn2.innerHTML;
        btn2.innerHTML=btn5.innerHTML;
        btn5.innerHTML=btn6.innerHTML;
        btn6.innerHTML=a;
    },500);
    
}
btn7.onclick=function(){
    btn4.classList.add("right");
    btn8.classList.add("diaupanti");
    btn5.classList.add("down");
    setTimeout(function(){
        btn4.classList.remove("right");
        btn8.classList.remove("diaupanti");
        btn5.classList.remove("down");
        let a =btn4.innerHTML;
        btn4.innerHTML=btn8.innerHTML;
        btn8.innerHTML=btn5.innerHTML;
        btn5.innerHTML=a;
    },500);
}
btn9.onclick=function(){
    btn8.classList.add("up");
    btn6.classList.add("diadownanti");
    btn5.classList.add("right");
    setTimeout(function(){
        btn8.classList.remove("up");
        btn6.classList.remove("diadownanti");
        btn5.classList.remove("right");
        let a =btn8.innerHTML;
        btn8.innerHTML=btn6.innerHTML;
        btn6.innerHTML=btn5.innerHTML;
        btn5.innerHTML=a;
    },500);
}
btn2.onclick=function(){
    btn3.classList.add("down");
    btn1.classList.add("right2");
    btn4.classList.add("up");
    btn5.classList.add("left");
    btn6.classList.add("left");
    setTimeout(function(){
        btn3.classList.remove("down");
        btn1.classList.remove("right2");
        btn4.classList.remove("up");
        btn5.classList.remove("left");
        btn6.classList.remove("left");
        let a =btn3.innerHTML;
        btn3.innerHTML=btn1.innerHTML;
        btn1.innerHTML=btn4.innerHTML;
        btn4.innerHTML=btn5.innerHTML;
        btn5.innerHTML=btn6.innerHTML;
        btn6.innerHTML=a;
    },500);
}
btn6.onclick=function(){
    btn3.classList.add("down2");
    btn2.classList.add("right");
    btn5.classList.add("up");
    btn8.classList.add("up");
    btn9.classList.add("left");
    setTimeout(function(){
        btn3.classList.remove("down2");
        btn2.classList.remove("right");
        btn5.classList.remove("up");
        btn8.classList.remove("up");
        btn9.classList.remove("left");
        let a =btn3.innerHTML;
        btn3.innerHTML=btn2.innerHTML;
        btn2.innerHTML=btn5.innerHTML;
        btn5.innerHTML=btn8.innerHTML;
        btn8.innerHTML=btn9.innerHTML;
        btn9.innerHTML=a;
    },500);
    
}
btn8.onclick=function(){
    btn9.classList.add("left2");
    btn6.classList.add("down");
    btn5.classList.add("right");
    btn4.classList.add("right");
    btn7.classList.add("up");
    setTimeout(function(){
        btn9.classList.remove("left2");
        btn6.classList.remove("down");
        btn5.classList.remove("right");
        btn4.classList.remove("right");
        btn7.classList.remove("up");
        let a =btn9.innerHTML;
        btn9.innerHTML=btn6.innerHTML;
        btn6.innerHTML=btn5.innerHTML;
        btn5.innerHTML=btn4.innerHTML;
        btn4.innerHTML=btn7.innerHTML;
        btn7.innerHTML=a;
    },500);
    
}
btn4.onclick=function(){
    btn7.classList.add("up2");
    btn8.classList.add("left");
    btn5.classList.add("down");
    btn2.classList.add("down");
    btn1.classList.add("right");
    setTimeout(function(){
        btn7.classList.remove("up2");
        btn8.classList.remove("left");
        btn5.classList.remove("down");
        btn2.classList.remove("down");
        btn1.classList.remove("right");
        let a =btn7.innerHTML;
        btn7.innerHTML=btn8.innerHTML;
        btn8.innerHTML=btn5.innerHTML;
        btn5.innerHTML=btn2.innerHTML;
        btn2.innerHTML=btn1.innerHTML;
        btn1.innerHTML=a;
    },500);

}
btnreset.onclick=function(){
    btn1.innerHTML=1;
    btn2.innerHTML=2;
    btn3.innerHTML=3;
    btn4.innerHTML=4;
    btn5.innerHTML=5;
    btn6.innerHTML=6;
    btn7.innerHTML=7;
    btn8.innerHTML=8;
    btn9.innerHTML=9;

}
btncheck.onclick=function(){
    var s = new Array(3);
    for( var i=0;i<3;i++){
        s[i]=new Array(3);
    }
    s[0][0]=btn1.innerHTML;
    s[0][1]=btn2.innerHTML;
    s[0][2]=btn3.innerHTML;
    s[1][0]=btn4.innerHTML;
    s[1][1]=btn5.innerHTML;
    s[1][2]=btn6.innerHTML;
    s[2][0]=btn7.innerHTML;
    s[2][1]=btn8.innerHTML;
    s[2][2]=btn9.innerHTML;
    if(cost(s)===0)
    {
        btn1.classList.add("win");
        btn2.classList.add("win");
        btn3.classList.add("win");
        btn4.classList.add("win");
        btn5.classList.add("win");
        btn6.classList.add("win");
        btn7.classList.add("win");
        btn8.classList.add("win");
        btn9.classList.add("win");
        setTimeout(function(){
            btn1.classList.remove("win");
            btn2.classList.remove("win");
            btn3.classList.remove("win");
            btn4.classList.remove("win");
            btn5.classList.remove("win");
            btn6.classList.remove("win");
            btn7.classList.remove("win");
            btn8.classList.remove("win");
            btn9.classList.remove("win");
        },700);
    }
    else{
        btn1.classList.add("wrong");
        btn2.classList.add("wrong");
        btn3.classList.add("wrong");
        btn4.classList.add("wrong");
        btn5.classList.add("wrong");
        btn6.classList.add("wrong");
        btn7.classList.add("wrong");
        btn8.classList.add("wrong");
        btn9.classList.add("wrong");
        setTimeout(function(){
            btn1.classList.remove("wrong");
            btn2.classList.remove("wrong");
            btn3.classList.remove("wrong");
            btn4.classList.remove("wrong");
            btn5.classList.remove("wrong");
            btn6.classList.remove("wrong");
            btn7.classList.remove("wrong");
            btn8.classList.remove("wrong");
            btn9.classList.remove("wrong");
        },700);
    }
}
hint.onclick=function()
{
    $("#hint-content").toggle(300);

}
btnhint.onclick=function()
{
    $("#how-to-play").hide(300);
    $("#hint-content").toggle(300);
}
btnhow.onclick=function(){
    $("#hint-content").hide(300);
    $("#how-to-play").toggle(300);
}
function cost(s) {
    var min_cost = 45;
    var all_squares =
    [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],
    ];

    for(var k = 0; k < 8; k++){
        var cost = 0;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                cost += Math.abs(s[i][j] - all_squares[k][i][j]);
            };
        };
        if( min_cost > cost ){ min_cost = cost };
    };
    return min_cost;
}

