
function tikla(z){
    var a=document.getElementById(z);
    var koltukNo= document.getElementById("koltukNo");
    koltukNo.style.color="black";

    if(a.value=="X"){
        koltukNo.innerHTML="Koltuk No: Seçilen koltuk dolu!";

    }
    else{
        koltukNo.innerHTML="Koltuk No: "+a.value;

    }


}

function rezerveEt(){

   koltukNo.style.color="black";
   var a = koltukNo.innerHTML;
   var sayi = parseInt(a.substring(10));

   if(koltukNo.innerHTML!="Koltuk No: Seçilen koltuk dolu!"){
      

   document.getElementById(sayi).style.backgroundColor="red";
   document.getElementById(sayi).style.color="white";
   document.getElementById(sayi).value="X";
   koltukNo.innerHTML="Koltuk No: ";
   }
   else{
       koltukNo.style.color="red";
      
   }
 

    
    

   
}