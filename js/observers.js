const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const head = document.querySelector(".ham");


const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      head.classList.add("nav-line");
      
    } else {
      header.classList.remove("nav-scrolled");
      head.classList.remove("nav-line");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

var open=true;


head.addEventListener("click", function() {
const head = document.querySelector(".ham");
  if(open){
    document.querySelector(".nav__list").style.display= "block";
    document.querySelector(".site-logo").style.transform="translate(-5px, -160px)";
    open=false;
  }
  else{
    document.querySelector(".nav__list").style.display= "none";
    document.querySelector(".site-logo").style.transform="translate(-5px, -30px)";
    open=true;
  }
});