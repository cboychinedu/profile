// When the user scrools the page, execute myFunction
window.onscroll = function() {staticScroll()};

// Get the header id
let header = document.getElementById("main-nav");

// Get the offset position of the navbar
let sticky = header.offsetTop;
let nav = document.getElementById("right-nav")

// Add the sticky class to the header when you reach its scrool position. Remove
// "sticky" when you leave the scroll position
function staticScroll()
{
    // Code execution
    if ( window.pageYOffset > sticky )
    {
        // if the condition is met, execute the code below
        header.classList.add("sticky");
        nav.classList.add('right-nav-sticky')
    }

    // Else condition
    else
    {
        // code execution
        header.classList.remove("sticky");
        nav.classList.remove('right-nav-sticky')
    }

    
};

document.addEventListener("mouseout", (event) =>{
    if (event.y <= 200 || event.y == 200 ) { nav.style.width = "0%"; }
    else if (event.y <= 250 || event.y == 250 ) { nav.style.width = "15%"}
    else if (event.y <= 300 || event.y == 300 ) { nav.style.width = "17%"}
    else if (event.y <= 400 || event.y == 400 ) { nav.style.width = "20%"; }
    else if ( event.y <= 450 || event.y == 450 ) { nav.style.width = "35%"; }
    else if ( event.y <= 500 || event.y == 500 ) { nav.style.width = "40%"; }
    else if ( event.y <= 550 || event.y == 550 ) { nav.style.width = "45%"; }
    else if ( event.y <= 600 || event.y == 600 ) { nav.style.width = "50%"; }
    else if ( event.y <= 650 || event.y == 650 ) { nav.style.width = "55%"; }
    else if ( event.y <= 700 || event.y == 700 ) { nav.style.width = "60%"; }
    else if ( event.y <= 750 || event.y == 750 ) { nav.style.width = "65%"; }
    else if ( event.y <= 800 || event.y == 800 ) { nav.style.width = "70%"; }
    else if ( event.y <= 850 || event.y == 850 ) { nav.style.width = "75%"; }
    else if ( event.y <= 860 || event.y == 860 ) { nav.style.width = "80%"; }
    else if ( event.y <= 870 || event.y == 870 ) { nav.style.width = "85%"; }
    else if ( event.y <= 890 || event.y == 890 ) { nav.style.width = "90%"; }
    else if ( event.y <= 950 || event.y == 950 ) { nav.style.width = "95%"; }
    else if ( event.y <= 1020 || event.y == 1020 ) { nav.style.width = "100%"; }
  
    // x: 1133
    // y: 1020
})

// 
document.addEventListener("mousemove", (event) =>{
    // 
    console.log(event.y); 
    if (event.y <= 200 || event.y == 200 ) { nav.style.width = "0%"; }
    else if (event.y <= 250 || event.y == 250 ) { nav.style.width = "15%"}
    else if (event.y <= 300 || event.y == 300 ) { nav.style.width = "17%"}
    else if (event.y <= 400 || event.y == 400 ) { nav.style.width = "20%"; }
    else if ( event.y <= 450 || event.y == 450 ) { nav.style.width = "35%"; }
    else if ( event.y <= 500 || event.y == 500 ) { nav.style.width = "40%"; }
    else if ( event.y <= 550 || event.y == 550 ) { nav.style.width = "45%"; }
    else if ( event.y <= 600 || event.y == 600 ) { nav.style.width = "50%"; }
    else if ( event.y <= 650 || event.y == 650 ) { nav.style.width = "55%"; }
    else if ( event.y <= 700 || event.y == 700 ) { nav.style.width = "60%"; }
    else if ( event.y <= 750 || event.y == 750 ) { nav.style.width = "65%"; }
    else if ( event.y <= 800 || event.y == 800 ) { nav.style.width = "70%"; }
    else if ( event.y <= 850 || event.y == 850 ) { nav.style.width = "75%"; }
    else if ( event.y <= 860 || event.y == 860 ) { nav.style.width = "80%"; }
    else if ( event.y <= 870 || event.y == 870 ) { nav.style.width = "85%"; }
    else if ( event.y <= 890 || event.y == 890 ) { nav.style.width = "90%"; }
    else if ( event.y <= 950 || event.y == 950 ) { nav.style.width = "95%"; }
    else if ( event.y <= 1020 || event.y == 1020 ) { nav.style.width = "100%"; }
    
    
   
    // x: 1133
    // y: 1020
})