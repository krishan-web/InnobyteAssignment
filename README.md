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

## PROJECT TASK
    **NOTE**: You can Skip Initialize step. Instead you have to do 
     ```javascript
      npm install
     ```
      
### 1.Backend Development 
       + **Initialize Your Project:**
         ```javascript
         npm init
         ```
         npm init command will ask you the information about project name, version, description, entry point and many more.   

       +  **Install Dependencies:**
        ```javascript
        npm install express
        ```
       + **Install Mongoose** from the command line using `npm`
        ```javascript
         npm install mongoose
        ```
        To create User Model
       + **Install jsonwebtoken** from the command line using `npm`
        ```javascript
          npm i jsonwebtoken
        ```
        To create token
       + **Install Crypto** from the command line using `npm`
       ```javascript
        npm i crypto-js
       ```
       + **Install Nodemailer** from the command line using `npm`
       ```javascript
       npm install nodemailer
       ```
       **Nodemailer** is a module for Node.js applications to allow easy as cake email sending.
       + **Install Cors** from the command line using `npm`
       ```javascript
       npm i cors
       ```
       CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
       

## How to Connect to Database(MongoDb): 
   1. Go to MongoDb website: <https://www.mongodb.com/>
   2. Build Your free Cluster.
   3. Install MongoDb Compass in your System.
   4. When you will click on Connect(Free Cluster that we build).
   5. You'll se a pop-up on which you have to right Click on Compass then you have to click on *I have MongoDB Compass installed*.
   6. Copy the connection string, then open MongoDB Compass
      e.g mongodb+srv://<username>:<password>@user.uwkuqey.mongodb.net/
   7. Paste this url here `mongoose.connect('url',{dbName: User} )` and also in MongoDb Compass too.

## 2. Frontend Integration:
   #### Getting Started with Create React App
      + **Initialize Your Project:**
        ```javascript
        npx create-react-app my-app
        cd my-app
        npm start
        ```
        `npx` it's a package runner tool that comes with npm *5.2+*. 
        
      + **Install React Router DOM** from the command line using `npm`
       ```javascript
        npm i react-router-dom
       ```

      + **Install Recoil** from the command line using `npm`
       ```javascript
        npm install recoil
       ```

      + **Install Axios** from the command line using `npm`
       ```javascript
        npm install axios
       ```
      *Axios*:To make request to the backend(.post,.put,.get,.delete and many more).

      + **Install Axios** from the command line using `npm`
       ```javascript
        npm install react-toastify
       ```

## 3. Output:
     ![Reference Image](/screenshots/pic.png)  
      




        
       

          
