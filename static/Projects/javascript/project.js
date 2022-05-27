//
console.log('Working!'); 






// When the user scrools the page, execute myFunction
window.onscroll = function() {staticScroll()};

// Get the header id
let header2 = document.getElementById("main-nav");

// Get the offset position of the navbar
let sticky2 = header2.offsetTop;
let nav2 = document.getElementById("right-nav")

// Add the sticky class to the header when you reach its scrool position. Remove
// "sticky" when you leave the scroll position
function staticScroll()
{
    // Code execution
    if ( window.pageYOffset > sticky2 )
    {
        // if the condition is met, execute the code below
        header2.classList.add("sticky");
        nav2.classList.add('right-nav-sticky')
    }

    // Else condition
    else
    {
        // code execution
        header2.classList.remove("sticky");
        nav2.classList.remove('right-nav-sticky')
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

// Getting the dom element for the projects 
let steamTables = document.getElementById("steam-table-list"); 
let tempConverter = document.getElementById("temp-converter-list"); 
let cpuUsage = document.getElementById("cpu-usage-list"); 
let green_exchange = document.getElementById("green-exchange-list");
let fasgdiii = document.getElementById("fasgd-iii");  
let carWebsite = document.getElementById("cars-website"); 

// Adding event listener for the tempConverter list 
tempConverter.addEventListener("click", (event) => {
    // 
    console.log("Clicked"); 
}); 

// Adding event listener for the cpu usage 
cpuUsage.addEventListener("click", (event) => {
    // Redirecting the user to the project link 
    document.location.href = "https://gitlab.com/cboychinedu/cpu-utilization"; 
}); 

// Adding event listener for the steam table list 
steamTables.addEventListener("click", (event) => {
    // Redirecting the user to the steam table project 
    document.location.href = "https://gitlab.com/cboychinedu/steam-tables-analysis/-/tree/master"; 
}); 

// Adding event listener for green exchange 
green_exchange.addEventListener("click", (event) => {
    // Redirecting the user to green exchange 
    document.location.href = "https://gitlab.com/cboychinedu/green-exchange"; 
}); 

// Adding the event listener for fasgd-111 
fasgdiii.addEventListener("click", (event) => {
    // Redirecting the user to fasgd 
    document.location.href = "https://gitlab.com/cboychinedu/fasgd-iii"; 
}); 

// Adding the event listener for the carwebsite 
carWebsite.addEventListener("click", (event) => {
    // Redirecting the user to the project link 
    document.location.href = "https://github.com/cboychinedu/A-simple-car-website"; 
}); 