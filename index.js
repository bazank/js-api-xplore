import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    //useMongoClient: true
    useNewUrlParser: true
});
mongoose.connect('mongodb://localhost/inventory', {
    //useMongoClient: true
    useNewUrlParser: true
});

//boody-parse setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
        res.send(`Server edduka kati ku Lujji nkumi ssatu ${PORT}`)
);

app.listen(PORT, () => 
        console.log(`your server is on port ${PORT}`)
        )