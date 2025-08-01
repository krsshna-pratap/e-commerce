const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors'); 

// created a db connection -> you can also create a separate file for this and then import/use that file here 

mongoose.connect('mongodb+srv://krsshna_pratap:Ky118881@cluster0.6surjrw.mongodb.net/').then(() => console.log('DB connected successfully')).catch((error)=> console.log(error))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/', 
        methods : ['GET', 'POST', 'DELETE', 'PUT'], 
        allowedHeaders : [
            'Content-Type', 
            'Authorization', 
            "Cache-Control", 
            'Expires', 
            'Pragma'
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`server is now running on port ${PORT}`));