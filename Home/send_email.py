#!/usr/bin/env python3 

# Importing the necessary modules 
import smtplib, ssl 
from email.mime.text import MIMEText 
from email.mime.multipart import MIMEMultipart 

# Creating a class for sending emails 
class SendEmail: 
    def __init__(self):
        self.sender_email = "noreplayalansmith@gmail.com"; 
        self.receiver_email = "cmbonu@protonmail.com"; 
        self.password = "ilovepam!100%"; 

    # Creating a method for sending the email 
    def sendMessage(self, sender_name, sender_email, sender_message): 
        # Execute the block of code below to send the email message 
        message = MIMEMultipart("alternative") 
        message["Subject"] = f"Message from {sender_name}"; 
        message["From"] = self.sender_email
        message["To"] = self.receiver_email

        # Creating a plain text 
        text = f"""
            sender email {sender_email} \n 
            {sender_message}
        """

        # Turn the message into a plain MIMEText objects 
        part1 = MIMEText(text, "plain"); 

        # Adding the text part to the MIMEMultipart message 
        message.attach(part1); 

        # Create a secure connection with the server and send the email 
        context = ssl.create_default_context() 
        with smtplib.SMTP("smtp.gmail.com", 587) as server: 
            server.starttls(context=context)
            server.login(self.sender_email, self.password)
            server.sendmail(
                self.sender_email, self.receiver_email, message.as_string() 
            )


# 
# email = SendEmail(); 
# email.sendMessage("Nedu", "How are you today")