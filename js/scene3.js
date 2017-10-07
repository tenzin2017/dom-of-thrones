function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage');
  desert = document.querySelector('#desert');
  stageImg = stage.querySelector('#stage-img');
  desertImgSrc = desert.getAttribute('src');
  stageImg.setAttribute('src', desertImgSrc);

  

  // Setup Cast

  // Character 1
  danContainer = document.createElement('div');
  stage.append(danContainer);
  danContainer.style.position = 'absolute';
  danContainer.style.width = '10%';
  danContainer.style.height = '20%';
  danContainer.style.top = '50%';
  danContainer.style.left = '20%';

  danContainer.style.border = 'none';
  danContainer.style.background = 'none';

  dan = document.querySelector('#danerys');
  danContainer.append(dan);

  danDress = document.querySelector('#red-dress');
  danContainer.append(danDress);

  danContainer.style.height = '38%';
  dan.style.width = '80%';
  dan.style.position = 'absolute';
  dan.style.top = 0;
  dan.style.left = '20%';
  danDress.style.position = 'absolute';
  danDress.style.bottom = 0;

  // Character 2
  dronContainer = document.createElement('div');
  stage.append(dronContainer);
  dronContainer.style.position = 'absolute';
  dronContainer.style.width = '10%';
  dronContainer.style.height = '20%';
  dronContainer.style.top = '50%';
  dronContainer.style.left = '80%';

  dronContainer.style.border = 'none';
  dronContainer.style.background = 'none';

  dron = document.querySelector('#drogo');
  dron.style.transform = 'rotateY(180deg)';
  dronContainer.append(dron);

  dronDress = document.querySelector('#bulky-man');
  dronContainer.append(dronDress);

  dronContainer.style.height = '38%';
  dron.style.width = '80%';
  dron.style.position = 'absolute';
  dron.style.top = 0;
  dron.style.left = '20%';
  dronDress.style.position = 'absolute';
  dronDress.style.bottom = 0;

  // Setup Props

  // Prop 1  Dragon's egg
    egg = document.querySelector('#egg');
    egg.style.position = 'absolute';
    egg.style.height = '10%';
    egg.style.top = '10%';
    egg.style.left = '55%';
    stage.append(egg);

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '15%';
  })
  frame(function() {
    danContainer.style.left = '25%';
  })
  frame(function() {
    dronContainer.style.left = '75%';
  })

  frame(function() {
    egg.style.top = '17%';
  })
  frame(function() {
    danContainer.style.left = '27%';
  })
  frame(function() {
    dronContainer.style.left = '70%';
  })

  frame(function() {
    egg.style.top = '20%';
  })
  frame(function() {
    danContainer.style.left = '30%';
  })
  frame(function() {
    dronContainer.style.left = '60%';
  })

  frame(function() {
    egg.style.top = '25%';
  })
  frame(function() {
    danContainer.style.left = '40%';
  })
  frame(function() {
    dronContainer.style.left = '57%';
  })

  frame(function() {
    egg.style.top = '30%';
  })

  frame(function() {
    egg.style.top = '40%';
  })

  frame(function() {
    egg.style.top = '45%';
  })

  frame(function() {
    egg.style.display = 'none';
  })

  // Stage direction 2



}
