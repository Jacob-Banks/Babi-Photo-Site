// storry array slot 0: img src,,, slot 1: img caption,,,slot 2: vidsrc,,, slot 3 vid caption 
var aliceFirstArray =[  ['./photos/soltitlte.jpg','Hello Baby Sol','',''],
                        ['./photos/sola.jpg','Frank and Harvey meet Sol','',''],
                        ['./photos/solbabi.jpg','Hi babi this is our baby','',''],
                        ['./photos/solbabic.jpg','We like the park','',''],
                        ['./photos/solnana.jpg','Sol likes it with Nana ','',''],
                        ['./photos/solbabia.jpg','Fun time with babi','',''],
                        ['./photos/solpark.jpg','Fam trip to the park','',''],
                        ['./photos/soldirt.jpg','We burried IT','',''],
                        ['./photos/solbath.jpg','I still dont trust them','',''],
                        ['./photos/soldry.jpg','Friends again','',''],
                        ['./photos/solsit.jpg','I can sit','','']
                     ];

var aliceSecondArray=[  ['./photos/cakee.jpg','franks bday','',''],
                        ['./photos/cakea.jpg','lish bday','',''],
                        ['./photos/cakec.jpg','party cake','',''],
                        ['./photos/cakef.jpg','what cake is this','',''],
                        ['./photos/cakeg.jpg','any excuse for cake','','']
                     ]

var aliceThirdArray= [  ['./photos/beach.jpg','we go to the beach','',''],
                        ['./photos/beacha.jpg', 'Sunscreen is fun','',''],
                        ['./photos/beachb.jpg','Frank wants to body surf','',''],
                        ['','','./photos/vidbeach.mp4','place mouse on pic to start vid'],
                        ['./photos/beachd.jpg','that was a fun swim','',''],
                        ['./photos/beache.jpg', 'Lunch time!','',''],
                        ['./photos/beachf.jpg','Mama we burried HG','',''],
                        ['./photos/beachg.jpg','Are you ready','',''],
                        ['./photos/beachi.jpg','I can surf to','',''],
                        ['./photos/beachw.jpg','test test test','',''],
                        ['./photos/beachlast.jpg','That was Fun','','']
                     ];

var aliceFourthArray=[  
                        ['./photos/hdress.jpg','Getting ready'],
                        ['./photos/hcost.jpg','ohh so pretty'],
                        ['./photos/htrick.jpg','going to all the doors in our house'],
                        ['./photos/hsol.jpg','they think the cow must stay inside'],
                        ['./photos/hlonely.jpg','2020 sucks']
                     ];
                     
// this varible tells function switchgrids which array to use
var storyarray ='empty';
//   array that displays, will get selected arrayed pushed into it.
var tellingStory = [''];
var index = 0;
// get source for story vids
var the_videocaption = document.getElementById("videocaption");
var the_video = document.getElementById("myVideoStory");
// get source for story img
var the_image = document.getElementById("the_image");
var the_discription = document.getElementById("the_discription");
// get source for homepage icons
let tini =document.getElementById('christi');
let lukas =document.getElementById('lukas');
let koby =document.getElementById('koby');
let kat =document.getElementById('kat');
let alice =document.getElementById('alice');
var vid = document.getElementById("myVideo");

//set src of telling storry array, run function to fill tellingstory, run function to launch story grid
function switchGrids(thisarray){
   storyarray= thisarray;
   fillArray();
   secondGrid();
}
   

// this function pushes the cliced on stories array into the telling story array
function fillArray(){
   switch(storyarray){
      case 'aliceStoryFirst':  
      for(let i = 0; i < aliceFirstArray.length; i++){
         tellingStory.push(aliceFirstArray[i]);
         }
      break;
      case 'aliceStoryThird':  
      for(let i = 0; i < aliceThirdArray.length; i++){
         tellingStory.push(aliceThirdArray[i]);
         }
      break;
      case 'aliceStorySecond':  
      for(let i = 0; i < aliceSecondArray.length; i++){
         tellingStory.push(aliceSecondArray[i]);
         }
      break;
      case 'aliceStoryFourth':  
      for(let i = 0; i < aliceFourthArray.length; i++){
         tellingStory.push(aliceFourthArray[i]);
         }
      break;
          }}    

// hide thumbnails,,, show story arrray
function secondGrid(){
   var firstGrid = document.getElementById('grid-container-two');
   var secondGrid =document.getElementById('grid-container-three');
   firstGrid.style.display='none';
   secondGrid.style.display='block';
}
//cycle through telling story img/vid on finish reload grandchild thumbnail page
function move(){
   if(index == tellingStory.length -1){   
      location.reload();
   }
   index++;
   the_video.src = tellingStory[index][2];
   the_videocaption.innerHTML = tellingStory[index][3];
   the_image.src = tellingStory[index][0];
   the_discription.innerHTML =tellingStory[index][1];
}
// set story vids to auto play on mouseover
function playVideoStory() { 
   the_video.autoplay = true;
   the_video.load();
}
// plays vid on hiome page
function playVideo() { 
   vid.autoplay = true;
   vid.load();
 }

// makes home page grandchild images biger on mouseover
function bigger(person) {
   switch(person){
      case 'tini':  
      tini.style.transform ='scale(1.5,1.5)';
      break;
      case 'lukas':  
      lukas.style.transform ='scale(1.5,1.5)';
      break;
      case 'koby':  
      koby.style.transform ='scale(1.5,1.5)';
      break;
      case 'kat':  
      kat.style.transform ='scale(1.5,1.5)';
      break;
      case 'alice':  
      alice.style.transform ='scale(1.5,1.5)';
      break; 
   }
    
} 
//resets grandchild imgs on mouse out
 let small=(person)=>{
   switch(person){
      case 'tini':  
      tini.style.transform ='scale(1,1)';
      break;
      case 'lukas':  
      lukas.style.transform ='scale(1,1)';
      break;
      case 'koby':  
      koby.style.transform ='scale(1,1)';
      break;
      case 'kat':  
      kat.style.transform ='scale(1,1)';
      break;
      case 'alice':  
      alice.style.transform ='scale(1,1)';
      break; 
   }
 }
 





