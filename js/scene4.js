function scene4() {

    // Setup Stage
  stage = document.querySelector('#stage');
  kingsLanding = document.querySelector('#kings-landing');
  stageImg = stage.querySelector('#stage-img');
  kingsImgSrc = kingsLanding.getAttribute('src');
  stageImg.setAttribute('src', kingsImgSrc);

   //Setup caste


  // Character 1
  nedContainer = document.createElement('div');
  stage.appendChild(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '20%';
  nedContainer.style.left = '90%';

  nedContainer.style.border = 'none';
  nedContainer.style.background = 'none';

  ned = document.querySelector('#ned');
  nedContainer.append(ned);

  leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);

  ned.style.border = 'none';
  ned.style.width = '70%'
  leather.style.border = 'none';
  ned.style.position = 'absolute';
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.bottom = 0;

  // Character 2
  danContainer = document.createElement('div');
  stage.append(danContainer);
  danContainer.style.position = 'absolute';
  danContainer.style.width = '10%';
  danContainer.style.height = '20%';
  danContainer.style.top = '20%';
  danContainer.style.left = '70%';

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



  // Setup Props


  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    nedContainer.style.top = '30%';
    nedContainer.style.left = '90%';
  })

  frame(function(){
    danContainer.style.top = '30%';
    danContainer.style.left = '70%';
  })
  frame(function() {
    nedContainer.style.top = '30%';
    nedContainer.style.left = '85%';
  })

  frame(function(){
    danContainer.style.top = '30%';
    danContainer.style.left = '65%';
  })
  frame(function() {
    nedContainer.style.top = '30%';
    nedContainer.style.left = '80%';
  })

  frame(function(){
    danContainer.style.top = '30%';
    danContainer.style.left = '60%';
  })
  frame(function() {
    nedContainer.style.top = '35%';
    nedContainer.style.left = '70%';
  })
  frame(function(){
    danContainer.style.top = '50%';
    danContainer.style.left = '60%';
  })
  frame(function() {
    nedContainer.style.top = '40%';
    nedContainer.style.left = '65%';
  })
  frame(function(){
    danContainer.style.top = '55%';
    danContainer.style.left = '60%';
  })
  frame(function() {
    nedContainer.style.top = '50%';
    nedContainer.style.left = '65%';
  })
  frame(function() {
    nedContainer.style.display = 'none';
  })
  frame(function(){
    danContainer.style.display = 'none';
  })




}
