const words = [
   "lorem",
   "ipsum",
   "dolor",
   "sit",
   "amet",
   "consectetur",
   "adipiscing",
   "elit",
   "sed",
   "eiusmod",
   "tempor",
   "incidinut",
   "labore",
   "aliqua",
   "magna",
   "commodo",
   "veniam",
   "nostrud",
   "fugiat",
   "nulla",
   "proident",
   "culpa",
   "officia",
   "deserunt",
   "mollit",
   "anim",
   "est",
   "laborum"
]

export function arrList(times, maxWords, minWords=1){
   const arr = [];
   const x = maxWords - (minWords - 1);

   for(let i=0; i<times; i++){
      const y = Math.floor(Math.random() * x) + minWords;
      arr.push(wordGen(y));
   }
   return arr;
}

const wordGen = (nr=0) =>{
   function rand(){
      return Math.floor(Math.random() * words.length) - 1;
   }

   const arr = [];
   let i = 0;

   do{
      arr.push(words[rand()]);
      i++;
   }while(i < nr)

   let text = arr.join(" ");
   text = text.replace(text[0],text[0].toUpperCase());

   return text;
}


