# Todobackend
Spike on cicd stuff

### Pre-setup
sudo easy_install pip (if error = sudo: pip: not found, run sudo apt install python-pip)  
sudo pip install django==1.11.1  
sudo pip install virtualenv  
todobackend$ virtualenv venv (venv is added to .gitignore)  
source venv/bin/activate
(venv)$ pip install pip --upgrade  
(venv)$ pip install django==1.11.1  
(venv)$ pip install djangorestframework  
(venv)$ pip install django-cors-headers  
---
For correct VSCODE environment:  
(venv)$ pip install pylint  
(venv)$ pip install pylint-django  
To open editor with correct pylint: (venv)$ code .  
Add to vscode settings: "python.linting.pylintArgs": ["--load-plugins", "pylint_django"]
to run pylint on all folder files: (in folder) find . -iname "*.py" |xargs pylint
---  
(venv)/src$ python manage.py startapp todo (for creating app)  
(venv)/src$ python manage.py migrate  
(venv)/src$ python manage.py runserver  
(venv)/src$ pip install mysql-python (if mysql_config not found: sudo apt install libmysqlclient-dev, if Python.h not found error: sudo apt install python-dev)  
