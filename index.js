// function shout(string) {
//   return string.toUpperCase();
// }


// function logShout(string){
//   console.log(string.toUpperCase())
// }
// function logWhsiper(string){
//   console.log(string.toLowerCase());
// }
// logShout('hello')
// logWhsiper('HELLO')

function sayHiToHeadphonedRoomhearmate(string){
  if(string === string.toLowerCase()){
    return 'I cant hear you'
  }
  else if(string === string.toUpperCase()){
    return 'YES INDEED'

  }
  else if (string === 'Lets have dinner together'){
    return 'I would love to.'

  }
  
}

console.log(sayHiToHeadphonedRoomhearmate('hello'))
console.log(sayHiToHeadphonedRoomhearmate('HELLO'))
console.log(sayHiToHeadphonedRoomhearmate('Lets have dinner together'))
