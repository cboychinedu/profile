#!/usr/bin/env python3 

# Importing the necessary modules 
import os
from flask import Blueprint 
from flask import send_file
from flask import render_template, redirect, url_for 

# Getting the path to the images 
os.getcwd() 

# Document path 

# Creating the blueprint home route 
home = Blueprint('home', __name__, template_folder="templates", 
                    static_folder="static"); 

# Creating the home page route 
@home.route("/", methods=["GET"])
def HomePage():
    # Setting the home page 
    return render_template("home.html"); 


# Creating the about page route 
@home.route("/about", methods=["GET"])
def AboutPage():
    # Setting the about page route 
    return render_template("about.html")


# Creating the contact page route 
@home.route("/contact", methods=["GET"])
def ContactPage():
    # Setting the contact page route 
    return render_template("contact.html")

# Creating a route for the recent work route 
@home.route("/recent-works", methods=["GET"])
def RecentWorks(): 
    # Setting the recent works page route 
    return render_template("recentWorks.html")

# Creating a route for the profile page 
@home.route("/profile", methods=["GET"])
def Profile(): 
    # Setting the profile page route 
    return render_template("profilePage.html")

# Creating a route for downloading the certification 
@home.route("/download/<name>", methods=["GET"])
def Download(name): 
    # Setting condition for the parsed url value 
    if name == "google": 
        # Send the user the google certifications 
        return send_file("static/Home/pdf/google.pdf", attachment_filename="google.pdf")

    # Setting the condition for facebook 
    elif name == "facebook": 
        # Send the user the facebook certifications 
        return send_file("static/Home/pdf/facebook.pdf", attachment_filename="facebook.pdf")

    # Settubg the condition for the spe download button 
    elif name == "spe": 
        # Send the user the spe certifications 
        return send_file("static/Home/pdf/spe_cert.pdf", attachment_filename="spe_cert.pdf")
