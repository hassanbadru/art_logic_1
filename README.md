
# Encoder/Decoder - Art+Logic Exercise

## Description
This is an web application that users to encode and decode 16-bit data

## Set Up / Running App
- Download & unpack .zip file
- Assuming you already have *python* and *pip*, install requirements using `​ pip install -r requirements.txt` within command prompt or terminal *(if not, check out [How to install python & pip ](https://pip.pypa.io/en/stable/installing/))*
- Go to 
- Create an admin user with the command `python manage.py createsuperuser`
- Run the command `python manage.py runserver`
- On your browser, go to http://127.0.0.1:8000/ or whatever server address was provided in terminal

*Note: On your browser, go to http://127.0.0.1:8000/admin to access admin*

## Exercise Requirements
For this task, you need to write a small program including a pair of functions that can
- [x] Convert an integer into a special text encoding and then
- [x] Convert the encoded value back into the original integer.
Assuming that your solution works correctly and cleanly enough to move forward in this process, these
functions will need to be used in your part 2 submission.
#### The Encoding Function
This function needs to accept a signed integer in the 14-bit range [-8192..+8191] and return a 4 character
string.
The encoding process is as follows:
1. Add 8192 to the raw value, so its range is translated to [0..16383]
2. Pack that value into two bytes such that the most significant bit of each is cleared
3. Format the two bytes as a single 4-character hexadecimal string and return it.

#### The Decoding Function
Your decoding function should accept two bytes on input, both in the range [0x00..0x7F] and recombine
them to return the corresponding integer between [-8192..+8191]

## Folder Structure
```
.Hassan_Badru.zip
├── Art_Logic_Env
│   ├── bin
│   │   ├── activate
│   ├├── README.md
└── art_logic
    ├── README.md
    ├── art_logic
    │   ├── __init__.py
    │   ├── __init__.pyc
    │   ├── settings.py
    │   ├── settings.pyc
    │   ├── urls.py
    │   ├── urls.pyc
    │   ├── wsgi.py
    │   └── wsgi.pyc
    ├── art_logic_app
    │   ├── __init__.py
    │   ├── __init__.pyc
    │   ├── admin.py
    │   ├── admin.pyc
    │   ├── apps.py
    │   ├── fixtures
    │   │   └── art_logic_app.json
    │   ├── migrations
    │   │   ├── 0001_initial.py
    │   │   ├── 0001_initial.pyc
    │   │   ├── 0002_auto_20180515_2039.py
    │   │   ├── 0002_auto_20180515_2039.pyc
    │   │   ├── 0003_auto_20180519_2226.py
    │   │   ├── 0003_auto_20180519_2226.pyc
    │   │   ├── __init__.py
    │   │   └── __init__.pyc
    │   ├── models.py
    │   ├── models.pyc
    │   ├── myfunctions.py
    │   ├── myfunctions.pyc
    │   ├── serializers.py
    │   ├── serializers.pyc
    │   ├── tests.py
    │   ├── urls.py
    │   ├── urls.pyc
    │   ├── utils.pyc
    │   ├── views.py
    │   └── views.pyc
    ├── db.sqlite3
    ├── frontend
    │   ├── README.md
    │   ├── build
    │   │   ├── asset-manifest.json
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   ├── service-worker.js
    │   │   └── static
    │   │       ├── css
    │   │       │   ├── main.a203576f.css
    │   │       │   └── main.a203576f.css.map
    │   │       ├── js
    │   │       │   ├── main.c96fb44e.js
    │   │       │   └── main.c96fb44e.js.map
    │   │       └── media
    │   │           └── intro-bg.fb30f247.jpg
    │   ├── 
    │   ├── package.json
    │   ├── public
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   └── manifest.json
    │   ├── src
    │   │   ├── App.js
    │   │   ├── App.test.js
    │   │   ├── css
    │   │   │   ├── App.css
    │   │   │   └── index.css
    │   │   ├── img
    │   │   │   └── intro-bg.jpg
    │   │   ├── index.js
    │   │   ├── logo.svg
    │   │   └── registerServiceWorker.js
    │   └── yarn.lock
    ├── manage.py
    └── media
        └── ConvertedData.txt
```
## Technology Stack Used
### Django / Python
### REACT JS
### REST API

## How App Works (Expectations)
### REACT Single Page
