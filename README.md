This is a simple React-based authentication app that includes user registration, login, and profile management functionalities. The app allows users to register, log in, edit their profile, and log out. User data is stored in the browser's localStorage.


In this app, I have created 3 components 
1. Register.js :- This component allow the user to register themselves when they register, It simply store their data in localstorage
2. Login.js - This component allow the user to login themselves by entering the email and password, when user click on login then first it will check that is there someone with that email or not if there is then it will check the password and then it will navigate user to profile page and sore your email in localstorage as loggedInuser
3. Profile.js - This component allows you to view your info and edit it too but you can not change the email and whatever we change in this page it get change in  localstorge but it will make sure that you are login or not. 