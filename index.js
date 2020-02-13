import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';

const app = express();
const PORT = 4000 || process.env.PORT;

//mongoose conection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// bodyparser  -- allowing body parser to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app); ///

app.get('/', (req,res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
