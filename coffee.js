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

  const temperature = {
    'ЭСПРЕССО':90,
    'МОЛОКО': 85,
    'ЛАТТЕ': 93, 
    'КАПУЧИНО': 93, 
    'БАНАНОВЫЙ ЛАТТЕ': 93, 
    'ВАНИЛЬНЫЙ КАПУЧИНО': 93, 
    'ФЛЭТ УАЙТ': 100
  }

  const MilkSpending ={
    'ЛАТТЕ': 100, 
    'КАПУЧИНО': 80, 
    'ФЛЭТ УАЙТ': 120,
    'МОЛОКО': 50
  }

  let glasses = {
      '250': 5,
      '380':6
  }


  const time = {
    'main':3,
    'author':5,
    'custom':8
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

  let syrupCoffee = {
    'БАНАНОВЫЙ ЛАТТЕ':  'БАНАНОВЫЙ',
    'ВАНИЛЬНЫЙ КАПУЧИНО': 'ВАНИЛЬНЫЙ'
  }


function checkGlasses(){
    let isGlassesEnough = true;
        if (glasses[380] < 1) {
          console.log(`--Памятка: Нужно заказать стаканы`);
          isGlassesEnough = false;
          return isGlassesEnough
        }
      return isGlassesEnough
    }

function checkMilk(coffee){
  
    let isMilkEnough = true;
    if(typeof MilkSpending[coffee] !== "undefined"){
    if (VolumeSyrupMilk["МОЛОКО"]< MilkSpending[coffee.toUpperCase()]){
        console.log(`--Памятка: Нужно заказать молоко`);
        isMilkEnough = false;
        return isMilkEnough;
    }
  }
    return isMilkEnough
}


function checkSyrup(Syrup){
    
    if (VolumeSyrupMilk[Syrup]< 50 ){
        console.log(`--Памятка: Нужно заказать  ${Syrup}`);
      
        return false;
    }
    return true
}
//проверяют наличие всех ингредиентов
function baseDrinks(coffee){
    let glasses=checkGlasses();
    let milk=checkMilk(coffee);
    if (glasses===false || milk===false){
      return false;
    }
    return true;
}

function authorDrinks(coffee){
  let check = baseDrinks(coffee);
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

// считает объем напитка в стакане
function calculateVolumeGlasses(volume, filler){
  let allVolume = volume + Volume[filler];
  return allVolume;
}

//выбрать объем стакана
function chooseGlass(volume){
  let glass=0;
  if(volume<=250 && glasses[250]>0){
    glass=250;
    return glass;
  }
  else if(volume<=380 && glasses[380]>0 ){
    glass=380;
    return glass;
  }
  else{
    glass=0;
    return glass;
  }
}
//считает стоимость
function calculateCost( Cost,item){
 return Cost+cost[item];
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
  const Syrup=document.getElementById('countSyrup'); 
  const Milks=document.getElementById('countMilk'); 
  const costCoffee=document.getElementById('cost'); 
  const name=document.getElementById('name'); 
  const name1=document.getElementById('name1');
  const name2=document.getElementById('name2');
  const board = document.getElementById('board'); 
  let countSyrup=0;
  let Cost = 0;
  let AllCost=0;
  let volume = 0;
  let volumeSyrup=0;
  let milk = 0;
  let syrupVanilla = 0;
  let syropBanana = 0;
  let glass =250;
  let coffee1 =' ';
  buttonEspresso.addEventListener("click", function(){
    let coffee = 'ЭСПРЕССО';
    let checkIngredients= baseDrinks(coffee);
    let checkVolume= calculateVolumeGlasses(volume, coffee);
    glass = chooseGlass(checkVolume);
    Cost=0;
    if(checkIngredients===true && glass!==0 ){
      board.style.visibility = 'visible'; 
      board.src='espresso.png';
      board.alt=' ';
      if(coffee1!==coffee){
        coffee1 = 'ЭСПРЕССО';
        Cost= calculateCost( Cost,coffee);
        costCoffee.placeholder= Cost+AllCost; 
        costCoffee.style.visibility = 'visible';
        name.innerHTML=  coffee1.toLowerCase();
      }
    }
    else{
      board.src=' '; 
      board.style.visibility = 'hidden'; 
    }
        
  })
  
  buttonLatte.addEventListener("click", function(){
    let coffee = 'ЛАТТЕ';
    let checkIngredients= baseDrinks(coffee);
    let checkVolume= calculateVolumeGlasses(volume, coffee);
    glass = chooseGlass(checkVolume);
    Cost=0;
    if(checkIngredients===true && glass!==0){
      board.style.visibility = 'visible'; 
      board.src='latte.png';
      board.alt=' ';
      if(coffee1!==coffee){
        coffee1 = 'ЛАТТЕ';
        Cost= calculateCost( Cost,coffee);
        costCoffee.placeholder= Cost+AllCost; 
        costCoffee.style.visibility = 'visible';
        name.innerHTML= coffee1.toLowerCase();
      }
    }
  
    else{
      board.src=' '; 
      board.style.visibility = 'hidden'; 

    }
    
  })

  buttonCappuccino.addEventListener("click", function(){
    let coffee = 'КАПУЧИНО';
    let checkIngredients= baseDrinks(coffee);
    let checkVolume= calculateVolumeGlasses(volume, coffee);
    glass = chooseGlass(checkVolume);
    Cost=0;
    volume =0;
    if(checkIngredients===true && glass!==0){
      board.style.visibility = 'visible'; 
      board.src='cap.png';
      board.alt=' ';
      if(coffee1!==coffee){
        coffee1 = 'КАПУЧИНО';
        Cost= calculateCost( Cost,coffee);
        costCoffee.placeholder= Cost+AllCost; 
        costCoffee.style.visibility = 'visible';
        volume+=milk;
        name.innerHTML= coffee1.toLowerCase();
      }
    }
    else{
      board.src=' '; 
      board.style.visibility = 'hidden'; 
    }
  })

  buttonBanana.addEventListener("click", function(){
    let coffee = 'БАНАНОВЫЙ ЛАТТЕ';
    let checkIngredients= authorDrinks(coffee);
    let checkVolume= calculateVolumeGlasses(volume, coffee);
    glass = chooseGlass(checkVolume);
    Cost=0;
    if(checkIngredients===true && glass!==0){
      board.style.visibility = 'visible'; 
      board.src='banana.png';
      board.alt=' ';
      if(coffee1!==coffee){
        coffee1 = 'БАНАНОВЫЙ ЛАТТЕ';
        Cost= calculateCost( Cost,coffee);
        costCoffee.placeholder= Cost; 
        costCoffee.style.visibility = 'visible';
        name.innerHTML= coffee1.toLowerCase();
      }
    }
    else{
      board.src=' '; 
      board.style.visibility = 'hidden'; 
    }
    
  })
  
  buttonVanilla.addEventListener("click", function(){
    let coffee = 'ВАНИЛЬНЫЙ КАПУЧИНО';
    let checkIngredients= authorDrinks(coffee);
    let checkVolume= calculateVolumeGlasses(volume, coffee);
    glass = chooseGlass(checkVolume);
    Cost=0;
    if(checkIngredients===true && glass!==0){
      board.style.visibility = 'visible'; 
      board.src='vanilla.png';
      board.alt=' ';
      if(coffee1!==coffee){
        coffee1 = 'ВАНИЛЬНЫЙ КАПУЧИНО';
        Cost= calculateCost( Cost,coffee);
        costCoffee.placeholder= Cost; 
        costCoffee.style.visibility = 'visible';
        name.innerHTML= coffee1.toLowerCase();
      }
    }
    else{
      board.src=' '; 
      board.style.visibility = 'hidden'; 
    }

  })

  buttonFlet.addEventListener("click", function(){
    let coffee = 'ФЛЭТ УАЙТ';
    let checkIngredients= authorDrinks(coffee);
    let checkVolume= calculateVolumeGlasses(volume, coffee);
    glass = chooseGlass(checkVolume);
    Cost=0;
    if(checkIngredients===true && glass!==0){
      board.style.visibility = 'visible'; 
      board.src='flet.png';
      board.alt=' ';
      if(coffee1!==coffee){
        coffee1 = 'ФЛЭТ УАЙТ';
        Cost= calculateCost( Cost,coffee);
        costCoffee.placeholder= Cost; 
        costCoffee.style.visibility = 'visible';
        name.innerHTML= coffee1.toLowerCase();
      }
    }
    else{
      board.src=' '; 
        board.style.visibility = 'hidden'; 
    }

  })

  buttonMilk.addEventListener("click", function(){
    let Milk='МОЛОКО';
    let checkmilk=checkMilk(Milk);
    let checkVolume= calculateVolumeGlasses(volume, Milk);
    glass = chooseGlass(checkVolume);
    if(checkmilk===true && glass!==0){
      boardMilk.style.visibility = 'visible'; 
      boardMilk.src='milk.png';
      boardMilk.alt=' ';
      AllCost= calculateCost( AllCost,Milk);

        if(milk+50 <= glass){
        costCoffee.placeholder= Cost+AllCost; 
        costCoffee.style.visibility = 'visible';
        name1.innerHTML = 'с молоком';
        milk+=50;
        Milks.placeholder=milk;
        volume+=milk;
        }
    }
    else{
      Milks.placeholder=milk;
    }
    Milks.style.visibility = 'visible';
  })

  
  buttonSyrup.addEventListener("click", function(){
    countSyrup+=1;
    if(countSyrup>2){
      Syrup.placeholder='2';
    }
    else{
      Syrup.placeholder= countSyrup;
    }
    
    boardSyrup.style.visibility = 'visible'; 
    Syrup.style.visibility = 'visible';
  })


  buttonClose.addEventListener("click", function(){
    countSyrup=0;
  boardSyrup.style.visibility = 'hidden'; 
  boardMilk.style.visibility = 'hidden'; 
  board.style.visibility = 'hidden'; 
  Syrup.style.visibility = 'hidden';
  name.style.visibility = 'hidden'; 
  costCoffee.style.visibility = 'hidden';  
})

buttonPay.addEventListener("click", function(){
glasses[glass]--;

})

})