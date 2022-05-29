#!/usr/bin/env python3 

# Importing the necessary modules 
import os 
import logging 
from flask import Flask, url_for 
from flask_cors import CORS 
from datetime import datetime 

# Importing some necessary routes 
from Home.homeRoutes import home 
from Projects.projectRoutes import project
from Interships.intershipsRoutes import interships 

# Creating the flask application 
app = Flask(__name__) 
app.config["TEMPLATES_AUTO_RELOD"] = True 

# Adding the cross-origin
CORS(app) 

# Register the views using the flask blueprint 
app.register_blueprint(home, url_prefix="/")
app.register_blueprint(project, url_prefix="/projects")
app.register_blueprint(interships, url_prefix="/interships")

# Logging the configurations to a file on disk 
logging.basicConfig(filename="requests.log", level=logging.DEBUG,
                        format='%(asctime)s %(message)s %(filename)s %(module)s %(pathname)s',
                        datefmt='%m/%d/%Y %I:%M:%S %p')

# Handling custom error pages
@app.errorhandler(404)
def page_not_found(e):
    # Execute this route if the user navigates to a route that does not exist
    # return render_template('404.html'), 404;
    return "Error 404", 404; 

# Handling error request 500
@app.errorhandler(500)
def internal_server_error(e):
    # Execute this route if the request generated gives an internal server error
    # return render_template('500.html'), 500;
    return "Bad Request, try again", 500; 

# Adding functions for updating the web application on reload
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

# Creating a function called dated url for tracking the changes made
def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                 endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)


# Running the flask application 
host = "192.168.0.200"
port = 80
if __name__ == "__main__":
    # print(f"Server is running on {host}:{port}")
    # app.run(port=port, host=host)
    # app.run(port=5001, 
    #         host="localhost",
    #         debug=True)
    app.run() 