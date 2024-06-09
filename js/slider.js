 var slide= document.getElementsByClassName('slide');
var dot= document.getElementsByClassName('dot');
 var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
 var n=0;
 var  i;

  function  disno() {
      for (i = 0; i < slide.length; i++) {
          slide[i].style.display = 'none';
      }
  }

   function no_active() {
          for(i=0; i<dot.length; i++)
          {
             dot[i].classList.remove('active') ;
          }

      }



 function  carosel()
 {
     n++;
     if (n> slide.length-1)
     {
         n=0;
     }
     disno();
     no_active();
     slide[n].style.display ='block';
     dot[n].classList.add('active') ;

 }
 setInterval(carosel,2000);

prev.addEventListener('click',function (e)
 {
 e.preventDefault();
 n++;
  if (n> slide.length-1)
  {
      n=0;
  }

 disno();
     no_active();
     slide[n].style.display ='block';
     dot[n].classList.add('active') ;

 })
    next.addEventListener('click',function (e)
 {
     e.preventDefault();
     n--;
     if (n<0)
     {
         n=slide.length-1;
     }

     disno();
     no_active();
     slide[n].style.display ='block';
     dot[n].classList.add('active') ;
 })
