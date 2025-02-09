import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import setAuthRoutes from './routes/authRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 'html' yerine 'ejs' kullanıyoruz

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

setAuthRoutes(app);

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});