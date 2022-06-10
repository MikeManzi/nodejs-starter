import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


