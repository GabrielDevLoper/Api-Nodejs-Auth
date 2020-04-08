import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

app.use(express.json());

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/mongo_jwt',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(routes);


app.listen(3333, () => {
    console.log('Backend Levantado');
});