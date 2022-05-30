// Debug 
console.log('working!')

// Getting all the dom elements for the email page 
let email = document.getElementById("email-value"); 
let fullname = document.getElementById("fullname"); 
let email_message = document.getElementById("email-message"); 
let send_mail_btn = document.getElementById("send-email"); 
let message = document.getElementById("message"); 

// Declaring some necessary variables 
let email_value, fullname_value, email_message_value, data; 

// Adding event listener to the email input field 
email.addEventListener("click", (e) => {
    // On click 
    message.style.display = "none"; 
}); 
// Adding event listener to the message input field 
email_message.addEventListener("click", (e) => {
    // On click 
    message.style.display = "none"; 
})

// Adding event listener to the send mail button 
send_mail_btn.addEventListener("click", (event) => {
    // Getting the respective values 
    email_value = email.value; 
    fullname_value = fullname.value; 
    email_message_value = email_message.value; 

    // Checking if the fields are empty 
    if (email_value === "" || fullname_value === "" ) {
        message.style.display = "block"; 
        message.innerText = "Email or Fullname not specified!"; 
        return; 
        
    }

    // 
    else if (email_message_value === "") {
        // 
        message.style.display = "block"; 
        message.innerText = "Email message not specified!"; 
        return; 
    }

    // 
    else {
        // Converting the data into a json object 
        data = JSON.stringify({
            "Fullname": fullname_value, 
            "Email": email_value, 
            "Message": email_message_value
        }); 
        url = "/send-emails"; 

        // Setting up the fetch url 
        fetch(url, {
            method: "POST", 
            body: data, 
            headers: {
                "Content-type": "application/json; charset=UTF-*"
            }
        })
        .then(response => response.json())
        .then(data => {
            // On success 
            message.style.display = "block"; 
            message.innerText = data.message; 
        })

    }
})