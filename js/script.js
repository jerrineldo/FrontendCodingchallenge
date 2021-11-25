window.onload = pageReady;

function pageReady(){

  let testimonials = document.querySelectorAll(".testimonial");
  let nextbuttons = document.querySelectorAll(".next-button");
  let previousbuttons = document.querySelectorAll(".previous-button");
  
  testimonials.forEach( testimonial => {
    testimonial.style.display = "none";
  });

  testimonials[0].style.display = "flex";

  let testimonialnumber = 0;

  nextbuttons[0].addEventListener('click',nextTestimonial);
  previousbuttons[0].addEventListener('click',previousTestimonial);

  function previousTestimonial(){

    testimonials[testimonialnumber].style.display = "none";
    testimonialnumber--;
    if(testimonialnumber < 0){
      testimonialnumber = testimonials.length - 1;
    }
    nextbuttons[testimonialnumber].addEventListener('click',nextTestimonial);
    previousbuttons[testimonialnumber].addEventListener('click',previousTestimonial);
    testimonials[testimonialnumber].style.display = "flex";

  }

  function nextTestimonial(){

    testimonials[testimonialnumber].style.display = "none";
    testimonialnumber++;

    if(testimonialnumber > (testimonials.length - 1)){
      testimonialnumber = 0;
    }
    nextbuttons[testimonialnumber].addEventListener('click',nextTestimonial);
    previousbuttons[testimonialnumber].addEventListener('click',previousTestimonial);
    testimonials[testimonialnumber].style.display = "flex";

  }
}