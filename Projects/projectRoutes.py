#!/usr/bin/env python3 

# Importing the necessary modules 
from flask import Blueprint 
from flask import render_template, redirect, url_for 

# Creating the blueprint for the project routes 
project = Blueprint('project', __name__, template_folder="templates", 
                        static_folder="static"); 

# Creating the home page route 
@project.route("/", methods=["GET"])
def HomePage():
    # Setting the home page for the projects routes 
    return render_template("projects.html"); 