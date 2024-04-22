import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Route/Data.route.js";
import signupUser from "./Models/Signup.model.js";

const app = express();
dotenv.config();

// Database connection
const mongoDBURI = process.env.MONGODB_URI;

mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(`Failed to connect: ${err}`);
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/data', router);

app.post("/signup",async (req,res)=>{
    let {username,email,password,confirmpassword}=req.body;

    if (password===confirmpassword) {

        let signupedUser=new signupUser({

            username:username,
            email:email,
            password:password,
            confirmpassword:confirmpassword,
        })


        await signupedUser.save()


        
    } else {
       res.send('password does not match!')
        
    }

})

app.post("/login", async (req, res) => {
    let { username, password } = req.body;

    let user = await signupUser.findOne({ username });

    if (user && user.password === password) {
        res.send('You are logged in');
    } else {
        res.status(401).json({ error: 'Username or password is incorrect!' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`);
});
