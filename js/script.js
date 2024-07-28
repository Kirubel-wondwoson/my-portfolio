/* ============== Typing Animation ============== */
 var typed = new Typed(".typing", {
   strings: ['','Web Developer', 'SWE Student','Math and Physics Enthusast','Freelancer'],
   typeSpeed:100,
   BackSpeed:60,
   loop:true
});
/* ==============      Aside       ============== */
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length;
      for(let i = 0 ; i < totalNavList ; i++){
        const a = navList[i].querySelector('a');
        a.addEventListener('click',function(){
          for(let j = 0 ; j < totalNavList ; j++){
            navList[j].querySelector('a').classList.remove('active');
          }
          this.classList.add('active');
          showCase(this);
        })
      }
function showCase(element){
  for(let i = 0 ; i < totalSection ; i++){
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}