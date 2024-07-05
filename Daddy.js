
document.getElementById("button1").onclick=function() {
    let p=document.getElementById("hlo").value;
    let k=Number(p);
    console.log(p);

document.getElementById("button2").onclick=function() {
    let q=document.getElementById("oyy").value;
    let l=Number(q);
    console.log(q);
    
        document.getElementById("pop").onclick=function() {
            let sum=k+l;
            console.log(sum);
            document.getElementById("ans").textContent=`Ans:${sum}`;
        
        }
        document.getElementById("ppop1").onclick=function() {
            let sub=k-l;
            console.log(sub);
            document.getElementById("ans").textContent=`Ans:${sub}`;
    
    
       } 
       document.getElementById("ppop2").onclick=function() {
         let mul=k*l;
         console.log(mul);
         document.getElementById("ans").textContent=`Ans:${mul}`;

       }
       document.getElementById("pop1").onclick=function() {
         let div=k/l;
         console.log(div);
         document.getElementById("ans").textContent=`Ans:${div}`;

       }
       document.getElementById("ppop3").onclick=function() {
         let pow=k**l;
         console.log(pow);
         document.getElementById("ans").textContent=`Ans:${pow}`;

       }
       document.getElementById("ppop4").onclick=function(){ 
        document.getElementById("hlo").value=" ";
        document.getElementById("oyy").value=" ";
        document.getElementById("ans").textContent="Ans:";
        

      }
    
    }

}

    
