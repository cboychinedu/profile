#!/usr/bin/env python3 

# Importing the necessary modules 
from flask import Blueprint 
from flask import render_template, redirect, url_for 

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
