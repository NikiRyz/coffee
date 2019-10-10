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
    'ФЛЭТ УАЙТ': 120
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

  const volume ={
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
    if (VolumeSyrupMilk["МОЛОКО"]< MilkSpending[coffee.toUpperCase()]){
        console.log(`--Памятка: Нужно заказать молоко`);
        isMilkEnough = false;
        return isMilkEnough;
    }
    return isMilkEnough
}


function checkSyrup(Syrup){
    let isSyrupEnough = true;
    if (VolumeSyrupMilk[Syrup]< 50 ){
        console.log(`--Памятка: Нужно заказать  ${Syrup}`);
        isSyrupEnough = false;
        return isSyrupEnough;
    }
    return isSyrupEnough
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
  const board = document.getElementById('board'); 
    
  buttonEspresso.addEventListener("click", function(){
    board.style.visibility = 'visible'; 
    board.src='espresso.png';
    
  })
  
  buttonLatte.addEventListener("click", function(){
    board.style.visibility = 'visible'; 
    board.src='latte.png';
    
  })

  buttonCappuccino.addEventListener("click", function(){
    board.style.visibility = 'visible'; 
    board.src='cap.png';
    

  })

  buttonBanana.addEventListener("click", function(){
    board.style.visibility = 'visible'; 
    board.src='banana.png';
    
  })
  
  buttonVanilla.addEventListener("click", function(){
    board.style.visibility = 'visible'; 
    board.src='vanilla.png';
    
  })

  buttonFlet.addEventListener("click", function(){
    board.style.visibility = 'visible'; 
    board.src='flet.png';
  })

  buttonMilk.addEventListener("click", function(){
    boardMilk.style.visibility = 'visible'; 
  })

  
  buttonSyrup.addEventListener("click", function(){
    boardSyrup.style.visibility = 'visible'; 
  })
})