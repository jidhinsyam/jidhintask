const express = require('express');
const bookRouter = require('./src/routes/bookRouter');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
res.status(200).json({
    message:"Hello World"
})
})

app.get('/api/user', (req, res) => {
  const User= {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age:'19',
    userName:'tyu',
    password:'eee',
  };
  res.status(200).json({
    data:User
  });
});
 
app.use('/api/book',bookRouter)
app.all('*', (req, res) => {
    return res.status(404).json({ 
        message: 'You have reached an invalid route.' 
    });
  });


app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}/api/user`);
});