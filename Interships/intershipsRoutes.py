#!/usr/bin/env python3 

# Importing the necessary modules 
from flask import Blueprint 
from flask import render_template, redirect, url_for 

# Creating the blueprint for the interships routes 
interships = Blueprint("interships", __name__, template_folder="templates", 
                        static_folder="static"); 

# Creating the home page route for interships 
@interships.route("/", methods=["GET"])
def HomePage():
    # Setting the home page for the interships routes 
    return render_template("interships.html"); 