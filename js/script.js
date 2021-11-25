//function called only after the page loads
window.onload = pageReady;

function pageReady(){

  let testimonials = document.querySelectorAll(".testimonial");
  let nextbuttons = document.querySelectorAll(".next-button");
  let previousbuttons = document.querySelectorAll(".previous-button");
  
  //Make all the testimonials disappear
  testimonials.forEach( testimonial => {
    testimonial.style.display = "none";
  });

  //Show the first testimonial
  testimonials[0].style.display = "flex";

  //Variable to hold the index of the testimonial to be shown
  let testimonialnumber = 0;

  //Adding onclick event listeners to the next and previous buttons in the testimonial
  nextbuttons[0].addEventListener('click',nextTestimonial);
  previousbuttons[0].addEventListener('click',previousTestimonial);

  //function to go to previous testimonial
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

  //function to go to next testimonial
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