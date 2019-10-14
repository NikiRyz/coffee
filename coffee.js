const cost = {
  'ЭСПРЕССО':90,
  'ЛАТТЕ': 130, 
  'КАПУЧИНО': 110, 
  'БАНАНОВЫЙ ЛАТТЕ': 150, 
  'ВАНИЛЬНЫЙ КАПУЧИНО': 150, 
  'ФЛЭТ УАЙТ': 100,
  'МОЛОКО': 25,
  'ВИШНЕВЫЙ СИРОП': 35
}

const MilkSpending ={
  'ЛАТТЕ': 100, 
  'КАПУЧИНО': 80, 
  'ФЛЭТ УАЙТ': 120,
  'МОЛОКО': 50
}
let syrupCoffee = {
  'БАНАНОВЫЙ ЛАТТЕ':  'БАНАНОВЫЙ',
  'ВАНИЛЬНЫЙ КАПУЧИНО': 'ВАНИЛЬНЫЙ'
}

const Volume ={
  'ЭСПРЕССО':100,
  'ЛАТТЕ': 250, 
  'КАПУЧИНО': 250, 
  'БАНАНОВЫЙ ЛАТТЕ': 300, 
  'ВАНИЛЬНЫЙ КАПУЧИНО': 300, 
  'ФЛЭТ УАЙТ': 280,
  'МОЛОКО': 50,
  'ВИШНЕВЫЙ СИРОП': 50
}

let VolumeSyrupMilk = {
    'ВАНИЛЬНЫЙ':500,
    'БАНАНОВЫЙ':500,
    'ВИШНЕВЫЙ':500,
    'МОЛОКО':1000
}


let glasses = {
  '250': 5,
  '380':6
}

const temperature = {
  'ЭСПРЕССО':90,
  'МОЛОКО': 85,
  'ЛАТТЕ': 93, 
  'КАПУЧИНО': 93, 
  'БАНАНОВЫЙ ЛАТТЕ': 93, 
  'ВАНИЛЬНЫЙ КАПУЧИНО': 93, 
  'ФЛЭТ УАЙТ': 100
}
const time = {
  'main':3,
  'author':5,
  'custom':8
}

//проверяют наличие ингредиентов в кофемашине
function checkGlasses(glasses){
      if (glasses['250'] < 1) {
        console.log(`Памятка: Нужно заказать стаканы 250мл`);
      }
      if (glasses['380'] < 1) {
        console.log(`Памятка: Нужно заказать стаканы 380мл`);
        return false
      }
    return true
  }


function checkMilk(coffee){
 // console.log(coffee)
  if(typeof MilkSpending[coffee] !== "undefined"){
   
  if (VolumeSyrupMilk['МОЛОКО']< MilkSpending[coffee.toUpperCase()]){
      console.log(`Памятка: Нужно заказать молоко`);
      return false
  }
}
  return true
}


function checkSyrup(Syrup){
  if (VolumeSyrupMilk[Syrup]< 50){
      console.log(`Памятка: Нужно заказать  ${Syrup}`);
      return false;
  }
  return true
}


// считает объем напитка в стакане
function calculateVolumeGlasses(allvolume, filler){
let newallVolume = allvolume + Volume[filler];
return newallVolume;
}

//выбрать объем стакана
function chooseGlass(allvolume,glasses){
let glass=0;
if(allvolume <= 250 && glasses['250']!==0){
 // console.log('я взял стакан 250');
  glass=250;
  return glass;
}
else {
  glass = 380;
 // console.log('я взял стакан 380');
  return glass;
}
}

// проверяет возможность долить в стакан что-то еще
function checkVolume(coffee,syrup,milk){
  let allvolume=Number(coffee)+Number(syrup)+Number(milk)
 // console.log(allvolume)
let glass= chooseGlass(allvolume,glasses);
console.log(glass)
if(allvolume<=glass){

  return true
} else{
  return false
}
}


//считает стоимость
function calculateCost( allcost,item){
return allcost+cost[item];
}

//проверяют наличие всех ингредиентов для напитках
function baseDrinks(coffee,glasses){
  let glasses1=checkGlasses(glasses);
  let milk=checkMilk(coffee);
  if (glasses1===false || milk===false){
    return false;
  }
  return true;
}

function authorDrinks(coffee,glasses){
let check = baseDrinks(coffee,glasses);
let checksyrup = checkSyrup(syrupCoffee[coffee])
if (coffee== "ФЛЭТ УАЙТ" && check===false){
  return false;
}
if (coffee!= "ФЛЭТ УАЙТ" && check===false || checksyrup===false )
{
  return false;
}
return true;
}


//функции для кнопок
function buttonBaseCoffee(coffee,img,coffee1,costCoffee,name,type,glasses){
  let checkIngredients;
  const buttonMilk=document.getElementById('milk'); 
  const buttonSyrup=document.getElementById('syrup');

  if(type==='author'){ 
    checkIngredients= authorDrinks(coffee,glasses);
    buttonMilk.style.visibility = 'hidden'; 
    buttonSyrup.style.visibility = 'hidden'; 
  }
  else{checkIngredients= baseDrinks(coffee,glasses);
    buttonMilk.style.visibility ='visible'; 
    buttonSyrup.style.visibility ='visible'; 
  }
 
  if(checkIngredients===true){
    board.style.visibility = 'visible'; 
    board.src=img;
    board.alt=' ';
    if(coffee1!==coffee){
      coffee1 = coffee;
      Cost= calculateCost( 0,coffee);
      costCoffee.placeholder= Cost; 
      costCoffee.style.visibility = 'visible';
      name.innerHTML=  coffee1.toLowerCase();
      name.style.visibility ='visible'; 
    }
  }
  else{
    board.src=' '; 
    board.style.visibility = 'hidden'; 
  }    
}

window.addEventListener("load", function(event) {
const buttonEspresso = document.getElementById('espresso'); 
const buttonLatte=document.getElementById('latte'); 
const buttonCappuccino=document.getElementById('cappuccino');
const buttonBanana=document.getElementById('banana'); 
const buttonVanilla=document.getElementById('vanilla'); 
const buttonFlet=document.getElementById('flet'); 
const buttonMilk=document.getElementById('milk'); 
const buttonSyrup=document.getElementById('syrup'); 
const buttonClose=document.getElementById('close'); 
const buttonPay=document.getElementById('pay'); 
const costCoffee=document.getElementById('cost'); 
const name=document.getElementById('name'); 
const name1=document.getElementById('name1');
const name2=document.getElementById('name2');
const board = document.getElementById('board'); 
const boardMilk = document.getElementById('boardMilk'); 
const boardSyrup = document.getElementById('boardSyrup'); 
let countSyrup=0;
let countMilk=0;
let coffee1 =0;
let CostSyrup=0;
let CostMilk=0;
let CostCoffee=0;
let volumeCoffe = 0;
let volumeSyrup=0;
let volumeMilk = 0;
buttonSyrup.style.visibility = 'hidden'; 


buttonEspresso.addEventListener("click", function(){

  buttonBaseCoffee("ЭСПРЕССО","img/espresso.png",coffee1,costCoffee,name,"base",glasses);
  volumeCoffe = Volume["ЭСПРЕССО"];
  CostCoffee = cost["ЭСПРЕССО"];
  name.style.visibility = 'visible'; 
  coffee1="ЭСПРЕССО";
  
}  
)

buttonLatte.addEventListener("click", function(){
  buttonBaseCoffee("ЛАТТЕ","img/latte.png",coffee1,costCoffee,name,"base",glasses);
  volumeCoffe = Volume["ЛАТТЕ"];
  CostCoffee = cost["ЛАТТЕ"];
  name.style.visibility = 'visible'; 
  coffee1="ЛАТТЕ";
})

buttonCappuccino.addEventListener("click", function(){
  buttonBaseCoffee("КАПУЧИНО","img/cap.png",coffee1,costCoffee,name,"base",glasses);
  volumeCoffe = Volume["КАПУЧИНО"];
  CostCoffee = cost["КАПУЧИНО"];
  name.style.visibility = 'visible'; 
  coffee1="КАПУЧИНО";
})

buttonBanana.addEventListener("click", function(){
  buttonBaseCoffee("БАНАНОВЫЙ ЛАТТЕ","img/banana.png",coffee1,costCoffee,name,"author",glasses);
  volumeCoffe = Volume["БАНАНОВЫЙ ЛАТТЕ"];
  CostCoffee = cost["БАНАНОВЫЙ ЛАТТЕ"];
  name.style.visibility ='visible'; 
  coffee1="БАНАНОВЫЙ ЛАТТЕ";
})

buttonVanilla.addEventListener("click", function(){
  buttonBaseCoffee("ВАНИЛЬНЫЙ КАПУЧИНО","img/vanilla.png",coffee1,costCoffee,name,"author",glasses);
  volumeCoffe = Volume["ВАНИЛЬНЫЙ КАПУЧИНО"];
  CostCoffee = cost["ВАНИЛЬНЫЙ КАПУЧИНО"];
  name.style.visibility = 'visible'; 
  coffee1="ВАНИЛЬНЫЙ КАПУЧИНО";
})

buttonFlet.addEventListener("click", function(){
  buttonBaseCoffee("ФЛЭТ УАЙТ","img/flet.png",coffee1,costCoffee,name,"author",glasses);
  volumeCoffe = Volume["ФЛЭТ УАЙТ"];
  CostCoffee = cost["ФЛЭТ УАЙТ"];
  name.style.visibility = 'visible'; 
  coffee1="ФЛЭТ УАЙТ";
})

buttonMilk.addEventListener("click", function(){

 let check = checkMilk('МОЛОКО');
 
 let check2=checkGlasses(glasses);

 if(coffee1===0 && check===true && check2===true){
   //console.log(coffee1)
  countMilk++;
   if(countMilk==1 &&  VolumeSyrupMilk['МОЛОКО']-250>=0){
    coffee1='МОЛОКО';
    buttonMilk.style.visibility = 'hidden'; 
    name1.innerHTML=  "стакан молока 250мл";
    name1.style.visibility = 'visible'; 
    CostCoffee = 125;
    costCoffee.placeholder=  CostCoffee; 
    volumeMilk = 250;
    boardMilk.style.visibility = 'visible'; 
    costCoffee.style.visibility = 'visible';  
    buttonEspresso.style.visibility = 'hidden';
    buttonCappuccino.style.visibility = 'hidden'; 
     buttonLatte.style.visibility = 'hidden'; 
    buttonBanana.style.visibility = 'hidden'; 
    buttonVanilla.style.visibility = 'hidden'; 
     buttonFlet.style.visibility = 'hidden'; 
   }
  //  if(countMilk==2 &&  VolumeSyrupMilk['МОЛОКО']-250>=0 ){
  //   coffee1='МОЛОКО';
  //   name1.innerHTML=  "стакан молока 380мл";
  //   name1.style.visibility = 'visible'; 
  //   CostCoffee =175;
  //   costCoffee.placeholder=  CostCoffee;   
  //   volumeMilk = 380;
  //   buttonSyrup.style.visibility = 'hidden'; 
  //  }
 }
 else{
  
  if(check===true && check2===true){
    
    coffee1='МОЛОКО';
    countMilk++;
    volumeMilk +=50;
    let check1 = checkVolume(volumeCoffe,volumeSyrup,volumeMilk);
    
    if(check1===true && countMilk===1){
      name1.innerHTML="с молоком";
      name1.style.visibility = 'visible'; 
      name.style.visibility = 'visible';
      boardMilk.style.visibility = 'visible'; 
      CostMilk+=25;
      let AllCost=CostCoffee+CostMilk+CostSyrup;
      costCoffee.placeholder=  AllCost; 
      costCoffee.style.visibility = 'visible'; 
    } 
    if(countMilk>=1){
      volumeMilk -=50;
      buttonMilk.style.visibility = 'hidden'; 
   
    }

  }
 }
})


buttonSyrup.addEventListener("click", function(){
 let check = checkSyrup("ВИШНЕВЫЙ");
 if(check===true){
  volumeSyrup+=50;
  
  let check1 = checkVolume(volumeCoffe,volumeSyrup,volumeMilk);
  if(check1===true){
    countSyrup+=1;
    boardSyrup.style.visibility = 'visible'
    buttonSyrup.style.visibility = 'visible';
   
    
      CostSyrup+=35;
      let AllCost=CostCoffee + CostSyrup+ CostMilk;
      name2.innerHTML=  "с вишневым сиропом";  
      name2.style.visibility = 'visible'; 
      if(countSyrup==2){
        name2.innerHTML=  "с двойным вишневым сиропом";
        name2.style.visibility = 'visible'; 
        boardSyrup.style.visibility = 'visible'
        buttonSyrup.style.visibility = 'hidden'; 
      } 
      costCoffee.placeholder=  AllCost;        
    
    
  }
  else{
    volumeSyrup-=50;
  }
 }  
}
)


buttonClose.addEventListener("click", function(){
countSyrup=0;
countMilk=0;
coffee1 = 0;
CostSyrup=0;
CostMilk=0;
CostCoffee=0;
volumeCoffe = 0;
volumeSyrup=0;
volumeMilk = 0;
buttonMilk.style.visibility = 'visible';
buttonSyrup.style.visibility = 'hidden'; 
boardSyrup.style.visibility = 'hidden'; 
boardMilk.style.visibility = 'hidden'; 
board.style.visibility = 'hidden'; 
name.style.visibility = 'hidden'; 
name1.style.visibility = 'hidden'; 
name2.style.visibility = 'hidden'; 
costCoffee.style.visibility = 'hidden';  
buttonEspresso.style.visibility = 'visible';
buttonCappuccino.style.visibility = 'visible'; 
 buttonLatte.style.visibility = 'visible'; 
buttonBanana.style.visibility = 'visible'; 
buttonVanilla.style.visibility ='visible'; 
 buttonFlet.style.visibility = 'visible'; 
})

buttonPay.addEventListener("click", function(){
 let milk='МОЛОКО';
 let vanilla='ВАНИЛЬНЫЙ КАПУЧИНО';
 let banana='БАНАНОВЫЙ ЛАТТЕ';

switch (coffee1) {
  
  case milk:
    VolumeSyrupMilk[ milk]-=volumeMilk;
    break;
  case vanilla:
    VolumeSyrupMilk['ВАНИЛЬНЫЙ']-=50;
    break;
  case banana:
    VolumeSyrupMilk['БАНАНОВЫЙ']-=50;
    break;
  default:
break;
}
if(volumeSyrup!==0){
  VolumeSyrupMilk['ВИШНЕВЫЙ']-=volumeSyrup;
}
let allvolume = volumeSyrup + volumeMilk + volumeCoffe;
let glass=chooseGlass(allvolume,glasses);
glasses[glass]-=1;
buttonMilk.style.visibility = 'visible'; 
buttonSyrup.style.visibility = 'hidden'; 
boardSyrup.style.visibility = 'hidden'; 
boardMilk.style.visibility = 'hidden'; 
board.style.visibility = 'hidden'; 
name.style.visibility = 'hidden'; 
name1.style.visibility = 'hidden'; 
name2.style.visibility = 'hidden'; 
costCoffee.style.visibility = 'hidden';  
buttonEspresso.style.visibility = 'visible';
buttonCappuccino.style.visibility = 'visible'; 
 buttonLatte.style.visibility = 'visible'; 
buttonBanana.style.visibility = 'visible'; 
buttonVanilla.style.visibility ='visible'; 
 buttonFlet.style.visibility = 'visible'; 
 
 countSyrup=0;
 countMilk=0;
 coffee1 = 0;
 CostSyrup=0;
 CostMilk=0;
 CostCoffee=0;
 volumeCoffe = 0;
 volumeSyrup=0;
 volumeMilk = 0;
})

})