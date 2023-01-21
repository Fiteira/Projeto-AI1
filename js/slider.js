var slideindex =0;
showSlides();
function showSlides()
{
  var i;
  var slides=document.getElementsByClassName("mySlides");
  var dots=document.getElementsByClassName("dot");

  for(i=0;i<slides.length;i++)
  {
     slides[i].style.display="none";
  }
  slideindex++;
  if(slideindex > slides.length)
  {
    slideindex = 1;
  }
  for(i=0;i < dots.length;i++)
  {
    dots[i].className=dots[i].className.replace("active","");
  }
   
  slides[slideindex-1].style.display="block";
  setTimeout(showSlides,2000);
}
