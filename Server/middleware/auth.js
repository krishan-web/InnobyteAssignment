// JSON Web Tokens (JWTs)
const jwt =require('jsonwebtoken')


// SECRET key for token.
const SECRET='hi169lm';

// middleware for the user authentication 
const userauthentication=(req,res,next)=>{

    const auth=req.headers.authorization; // Getting the token
    if(auth){
       const token=auth.split(' ')[1];
       jwt.verify(token,SECRET,(err,user)=>{ //verifying the token
           if(err) return res.sendStatus(403);
           // This user information is then attached to the req object for use in subsequent middleware functions or route handlers. 
           res.useremail=user.useremail;
           next();
       })
       
    }else {
       res.status(401).json({message:"Error! Token invalid."})
    }
}

module.exports={
    userauthentication,
    SECRET
}