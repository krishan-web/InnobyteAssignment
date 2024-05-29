# InnoByte

Hello, We will learn about User Management API that includes features such as user
registration, login, user profile management, and OTP-based login. This API will serve as the backend
for a web applicaƟon. Additionally, after a user successfully signs up, an email confirmation will be
sent.

## TECH STACK

+ Backend: Node.js (Express.js)
+ Frontend: React.js
+ Database: MongoDB 
+ Email Service: Node-mailer 

## PROJECT TASK:
  **NOTE**: You can Skip Initialize step. Instead you have to do<br/> 
  `npm install`
           
### 1.Backend Development: 
+ **Initialize Your Project:**<br/>
  `npm init`         
  **npm init** command will ask you the information about project name, version, description, entry point and many more.   

+ **Install Dependencies:**<br/>
 `npm install express`
        
+ **Install Mongoose** from the command line using **npm**.       
 `npm install mongoose`

+ **Install jsonwebtoken** from the command line using **npm**.<br/>
 `npm i jsonwebtoken`

+ **Install Crypto** from the command line using **npm**.<br/>
 `npm i crypto-js`
     
+ **Install Nodemailer** from the command line using **npm**.<br/>
  `npm install nodemailer`<br/>
  
+ **Install Cors** from the command line using **npm**.<br/>
  `npm i cors`<br/>
  **CORS** is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
       

## How to Connect to Database(MongoDb): 
   1. Go to MongoDb website: <https://www.mongodb.com/>.
   2. Build Your free Cluster.
   3. Install MongoDb Compass in your System.
   4. When you will click on Connect(Free Cluster that we build).
   5. You'll se a pop-up on which you have to right Click on Compass then you have to click on *I have MongoDB Compass installed*.
   6. Copy the connection string, then open MongoDB Compass
      e.g "mongodb+srv: //<username>:<password>@user.uwkuqey.mongodb.net/"
   7. Paste this url here `mongoose.connect('url',{dbName: User} )` and also in MongoDb Compass too.

## 2. Frontend Development:
   #### Getting Started with Create React App
+ **Initialize Your Project:**
   ```js
    npx create-react-app my-app
    cd my-app
    npm start
    ```
  **npx** it's a package runner tool that comes with npm *5.2+*. 
        
+ **Install React Router DOM** from the command line using **npm**.<br/>
  `npm i react-router-dom`

+ **Install Recoil** from the command line using **npm**.<br/>
  `npm install recoil`
       
+ **Install Axios** from the command line using **npm**.<br/>
  `npm install axios`<br/>
  **Axios** : To make request to the backend(.post,.put,.get,.delete and many more).

+ **Install react-toastify** from the command line using **npm**.<br/>
  `npm install react-toastify`
       

## 3. Build & Deployment:
 ### Backend: 
 To move into the Server directory:<br/>
  `cd Server`<br/>
 To start the backend server, run:<br/>
  `node index.js` 
 ### Frontend:
  To move into the client directory:<br/>
   `cd client`<br/>
  To build and start the frontend development server, run:<br/>
  `npm start`<br/>
  To create a production build for deployment, run:<br/>
  `npm run build`

## 4. Output:
![Reference Image](/screenshots/pic.png)
    


        
       

          
