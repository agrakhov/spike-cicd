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
(venv)/src$ python manage.py startapp todo (for creating app)  
(venv)/src$ python manage.py migrate