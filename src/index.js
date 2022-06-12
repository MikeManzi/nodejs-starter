const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const path = require ('path');
require('./config/db.config');

const userRouter = require ('./routes/user.route');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter)

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


