import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import cors from 'cors';



const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://yourbestvacation:yourbestvaction123@cluster0.jf2rj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const Port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);