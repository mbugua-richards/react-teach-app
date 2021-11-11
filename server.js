const express = require('express');
const app = express();

app.get('/api/popular',(req,res)=>{
   const pop = [
      {
         title: "Title 1"
      },
      {
         title: "Title 2"
      },
      {
         title: "Title 3"
      },
      {
         title: "Title 4"
      },
      {
         title: "Title 5"
      },
      {
         title: "Title 6"
      },
      {
         title: "Title 7"
      },
      {
         title: "Title 8"
      },
      {
         title: "Title 9"
      }
   ]

   res.json(pop);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{`Server started at port ${PORT}`});