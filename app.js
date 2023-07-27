const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const session = require('express-session')
const sessionSQL = require('connect-session-sequelize')(session.Store)
const flash = require('connect-flash')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express();
const handleCors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Ustaw właściwy adres URL Twojej aplikacji React
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
};
const mainRoutes = require('./routes/main')
const panelRoutes = require('./routes/panelRoutes')

const store = new sessionSQL({
    db: sequelize
  })
 



app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:3000', // Ustaw właściwy adres URL Twojej aplikacji React
  credentials: true, // Włącz przekazywanie plików cookie
}));
app.use(session({secret: 'test', resave: false, saveUninitialized: false, store: store, cookie: {
  sameSite: 'None',
  secure: true
}})) 

app.use(bodyParser.json());
app.use(flash())

app.options('*', handleCors);
app.use(handleCors);


app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  sequelize.query(`SELECT * FROM accounts WHERE id='${req.session.user.id}'`)
    .then(user => { 
      req.user = user[0][0];
      next();
    })
    .catch(err => console.log(err));
});



app.use(mainRoutes)
app.use(panelRoutes)

sequelize
.sync()
.then(result => {   
    console.log('CONNECT WITH DB success')
    app.listen(4000)
})
.catch(err => console.log(err))
