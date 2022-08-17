

let allimg=["image/download (3).jpg","image/download.jpg","image/images.jpg","image/OIP 2.jpg"];


let find=document.getElementById("img");


  var index=0;
function next(){

   index++;

if(index>=allimg.length){

    index=0;

  find.src=allimg[index];



}
else{

    find.src=allimg[index];

}

}

function Prev(){

    index--;
 
 if(index<0){
 
     index=allimg.length-1;
 
   find.src=allimg[index];
 
 
 
 }
 else{
 
     find.src=allimg[index];
 
 }
 
 }
 






















// let images=["OIP.JPG","download (1).JPG","download.JPG"];

// let findimg=document.querySelector("img");



// var count=0;

// function next(){
// count++;

// if(count>=images.length){

// count=0;
// findimg.src=images[count];


// }else{

//     findimg.src=images[count];
// }

// }






// function Previous(){
//     count--;
    
//     if(count<0){
    
//     count=images.length-1;
//     findimg.src=images[count];
    
    
//     }else{
    
//         findimg.src=images[count];
//     }
    
    
    
    
    
    
    
//     }