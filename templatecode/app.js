let express = require('express');
let app = express();
let port = 9110;
let morgan = require('morgan');
let cors = require('cors');
const { format } = require('morgan');

const menu = [
    {"name":"Category","link":"/category"},
    {"name":"Products","link":"/products"}
]

let categoryRouter = require('./src/controller/categoryController')(menu);
let productRouter = require('./src/controller/productController')(menu);

//use Morgan
app.use(cors())
app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));
//ejs file path
app.set('views','./src/views');
//view engine name
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//default
app.get('/',(req,res) => {
    //res.send('Hii From Express');
    res.render('first',{title:'This code is for EJS'})
});


app.use('/category',categoryRouter);
app.use('/products',productRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log(`Running on port ${port}`)
});