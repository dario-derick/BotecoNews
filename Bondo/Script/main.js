
//nav bar function
const logo = document.querySelector('.logo')
const sidenav =document.querySelector('.nav-wrapper')
const icon = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-close')


function showMenu(){
    sidenav.style.display="block"
    logo.style.display='none'
    icon.style.display='none'
}
function closeMenu(){
    sidenav.style.display='none'
    logo.style.display='block'
    icon.style.display='block'
}
icon.addEventListener('click', showMenu)
close.addEventListener('click', closeMenu)

///image slider function
let currentSlide = 0;
  const slides = document.querySelectorAll('.gallery-item');
  const totalSlides = slides.length;

  const showSlide = (index) => {
    if (index >= totalSlides) currentSlide = 0;
    if (index < 0) currentSlide = totalSlides - 1;
    document.querySelector('.gallery-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  document.querySelector('.next').addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
  });

  // Auto-slide every 3 seconds

  ///contact form validation
 
    document.getElementById("myform").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Get form values
        const name = document.getElementById("Name").value.trim();
        const phone = document.getElementById("Phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate fields
        if (name === "" || phone === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

       
        const phonePattern = /^(\+?\d{10,15})$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        
        alert("Message sent successfully!");
        this.reset(); 
    });

   
    window.onscroll = function() {
      const btn = document.getElementById("scrollTopBtn");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
  
    // Scroll to top function with smooth behavior
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    ///contact form
    document.getElementById("myform").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("Name").value.trim();
      const phone = document.getElementById("Phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || phone === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
      }

      const phonePattern = /^(\+?\d{10,15})$/;
      if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }

      alert("Message sent successfully!");
      this.reset();
    });


