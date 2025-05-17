import express from 'express' // Don't forget to add line "type" : "module" in package.json.

const app = express();
const port = process.env.PORT || 3000 ;



app.get('/',(req,res) => {

  res.send("Welcome to home page.")

})

app.get("/api/jokes",(req,res) => {

  const jokes = [
    {
      id : 1,
      title : 'A joke',
      content : 'This is a joke'
    },
    
    {
      id : 2,
      title : 'Another joke',
      content : 'This is another joke'
    },
    
    {
      id : 3,
      title : 'A third joke',
      content : 'The third joke',
    }

  ]

  res.send(jokes);

})

app.listen(port,() => {

  console.log(`Listening at http://localhost:${port}/`)

})