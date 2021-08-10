const greetings='Hello how are you';

function string(text){
  let reverse= '' ;
  for(const letter of text)
    {
      console.log(letter);
      reverse= letter + reverse;
    }
    
}
const reversed=string(greetings);
console.log(reversed);