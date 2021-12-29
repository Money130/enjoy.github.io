// JavaScript Document
function activateNavigation() {
  const sections = document.querySelectorAll(".section");
  const navContainer = document.createElement("nav");
  const navItems = Array.from(sections).map((section) => {
    return `
                    <div class="nav-item" data-for-section="${section.id}">
                        <a href="#${section.id}" class="nav-link"></a>
                        <span class="nav-label">${section.dataset.label}</span>
                    </div>
                `;
  });

  navContainer.classList.add("nav");
  navContainer.innerHTML = navItems.join("");

  const observer = new IntersectionObserver(
    (entries) => {
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.classList.remove("nav-link-selected");
      });

      const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

      document
        .querySelector(
          `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
        )
        .classList.add("nav-link-selected");
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));

  document.body.appendChild(navContainer);
}


activateNavigation();




$(document).ready(function(e){
var windowWidth=$(window).width();
$("#round1").css({'left':windowWidth-500});



$(window).scroll(function(){
    var windowTop = $(window).scrollTop();
    
    if(windowTop>$("#a2").offset().top/2){
      $("#round1").css({'left':windowWidth/2-windowWidth*0.05-150});
      $("#round1").addClass("round-r");
    }
    if(windowTop<$("#a2").offset().top/2 || windowTop>$("#a3").offset().top/3*2){
      $("#round1").css({'left':windowWidth-500});
      $("#round1").removeClass("round-r");
    }
  });


});

