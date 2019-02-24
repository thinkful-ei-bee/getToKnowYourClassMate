
// Add Event Listeners here:
'use strict';
const PEOPLE=[
  {id: cuid(), name: 'Eddie_Bueno', img: 'assets/images/01_Eddie_Bueno.png'},
  {id: cuid(), name: 'James_Scherernges', img: 'assets/images/02_James_Scherernges.png'},
  {id: cuid(), name: 'Jody', img: 'assets/images/03_Jody.png'},
  {id: cuid(), name: 'David_Baker', img: 'assets/images/04_David_Baker.png'},
  {id: cuid(), name: 'Laural_Butler', img: 'assets/images/05_Laural_Butler.png'},
  {id: cuid(), name: 'David_Bolin', img: 'assets/images/06_David_Bolin.png'},
  {id: cuid(), name: 'David_Liang', img: 'assets/images/07_David_Liang.png'},
  {id: cuid(), name: 'Farah_Gustafson', img: 'assets/images/08_Farah_Gustafson.png'},
  {id: cuid(), name: 'Joel_Corey', img: 'assets/images/09_Joel_Corey.png'},
  {id: cuid(), name: 'Enrique_Montemayor', img: 'assets/images/10_Enrique_Montemayor.png'},
  {id: cuid(), name: 'Jay_Lee', img: 'assets/images/11_Jay_Lee.png'},
  {id: cuid(), name: 'Rich_Greenhill', img: 'assets/images/12_Rich_Greenhill.png'}
  ];


function createGridElement(){
  console.log('creating element for grid ran');
}


function makeIndexArrayForId(n){
  console.log('make array for labeling item from PEOPLE to html element');
  let array = [];
  for(let i=0;i<n;i++){
    array.push(i);
  }
  return array;
}

function shuffleArray(array){
  console.log('shuffle array so create random index');
  
    let i = 0
      , j = 0
      , temp = null;
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
  }

function generateGrid(n){
  let array = makeIndexArrayForId(n);
  shuffleArray(array);
  console.log('testing array',array);
  let gridElementString = [];
  for (let i = 0;i<n;i++){
    gridElementString.push(`<div class="col-3">
  <div id = ${array.pop()} class="box">for protrait</div>
</div>`);
  }
  return gridElementString.join('');
  
}

function drawGrids(){
  console.log('draw grids for images ran');
  $('#start-game').on('click',function(event){
    console.log('test start game button');
    let elementString = generateGrid(12); 
   $('main .row').html(elementString);
  });

}




function classmateGame(){
  console.log('game handle,ran');
  drawGrids();
  createGridElement();
}

$(classmateGame);  



