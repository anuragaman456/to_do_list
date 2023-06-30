 let inputs=document.getElementById("inp");
 let text=document.querySelector(".text");

 function Add() 
 {
    if(inputs.value==""){ 
        alert("Please Enter Task")
    }
    else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value}   <img src="image.webp" alt="image" height="20 px" width="20px" id="image2">`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("img").addEventListener("click",remove);
        function remove()
        {
            newEle.remove();
        }
    }

 }