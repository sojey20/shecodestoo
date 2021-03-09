var currentTestimony = 0;
var numTestimonies = document.getElementsByClassName("testimony").length;

showTestimony(currentTestimony);

function nextTestimony() { 
  if (++currentTestimony >= numTestimonies) currentTestimony = 0;
  showTestimony(currentTestimony); 
}

function prevTestimony() { 
  if (--currentTestimony < 0) currentTestimony = numTestimonies - 1;
  showTestimony(currentTestimony); 
}

function showTestimony(showIndex) {
  console.log('index = ', showIndex)
  var slides = document.getElementsByClassName("testimony");
  if (showIndex >= slides.length) showIndex = 0;
  if (showIndex < 0) showIndex = slides.length - 1;
  for (var i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
    slides[i].className = "testimony";
  }
  slides[showIndex].style.display = "block";
  slides[showIndex].className += " activeTestimony";
}
