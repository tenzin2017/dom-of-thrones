function scene2() {

    // Setup Stage
  stage = document.querySelector('#stage');
  castle = document.querySelector('#castle');
  stageImg = stage.querySelector('#stage-img');
  castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

   //Setup caste


  // Character 1
  nedContainer = document.createElement('div');
  stage.appendChild(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';

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
  joffreyContainer = document.createElement('div');
  stage.append(joffreyContainer);
  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '8%';
  joffreyContainer.style.height = '31%';
  joffreyContainer.style.top = '55%';
  joffreyContainer.style.left = '55%';

  joffreyContainer.style.border = 'none';
  joffreyContainer.style.background = 'none';

  joffrey = document.querySelector('#joffrey');
  joffreyContainer.append(joffrey);
  joffrey.style.width = '75%';
  joffrey.style.position = 'absolute';
  joffrey.style.top = 0;
  joffrey.style.left = '33%';

  kingWardrobe = document.querySelector('#king');
  joffreyContainer.append(kingWardrobe);
  king.style.position = 'absolute';
  king.style.bottom = 0;


  // Setup Props
  sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position = 'absolute';
  sword.style.top = '77%';
  sword.style.left = '31%';
  sword.style.height = '5%';

  // Prop 1
  sword.style.transform = 'rotateY(150deg)';
  // Prop 2

  // Action!

  // Stage direction 1
 //Start  Frame1      SWORD FRAMES
  frame(function() {
    sword.style.top = '77%';
    sword.style.left = '31%';
  })

  //frame2
  frame(function() {
    sword.style.top = '74%';
    sword.style.left = '36%';
  })

  //frame3
  frame(function(){
    sword.style.top = '71%';
    sword.style.left = '41%';
  })

  //frame4
  frame(function(){
    sword.style.top = '68%';
    sword.style.left = '47%';
  })

  // Stage direction 2
//End Frame5
  frame(function() {
    sword.style.top = '64%';
    sword.style.left = '53%';
  })


  //JOFFREY HEAD frame
  frame(function(){
    joffrey.style.top = 0;
    joffrey.style.left = '33%';
    joffrey.style.transform = 'rotateZ(220deg)'
  })

  frame(function(){
    joffrey.style.top = '17%';
    joffrey.style.left = '90%';
    joffrey.style.transform = 'rotateZ(140deg)'
  })

  frame(function(){
    joffrey.style.top = '35%';
    joffrey.style.left = '160%';
    joffrey.style.transform = 'rotateZ(260deg)';
  })

  frame(function(){
    joffrey.style.top = '55%';
    joffrey.style.left = '230%';
    joffrey.style.transform = 'rotateZ(180deg)';
  })

  frame(function(){
    joffrey.style.top = '75%';
    joffrey.style.left = '300%';
    joffrey.style.transform = 'rotateZ(100deg)';
  })

}
