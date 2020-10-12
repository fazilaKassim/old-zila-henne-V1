var tabs = document.querySelectorAll('.tabs a')

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e)

        var li = this.parentNode
        var div =this.parentNode.parentNode.parentNode
        if(li.classList.contains('active')){
       return false   
        }
        
        var div = this.parentNode.parentNode.parentNode
 
div.querySelector('.tabs .active').classList.remove('active')
    

        li.classList.add('active')

div.querySelector('.tab-content.active').classList.remove('active')  
   div.querySelector(this.getAttribute('href')).classList.add('active')
        
        
    })
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
}