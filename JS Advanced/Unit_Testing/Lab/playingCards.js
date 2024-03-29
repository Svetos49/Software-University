function playingCards(face, suit) {
    const validFaces = ['2', '3','4','5','6','7,', '8', '9', '10', 'J', 'Q', 'K', 'A'];
     const suitToString = {
         'S': '\u2660',
         'H': '\u2665',
         'D': '\u2666',
         'C': '\u2663',
     };
       if(validFaces.includes(face) == false) {
           throw new Error('Invalid face');
       } else if(Object.keys(suitToString).includes(suit) == false) {
           throw new Error('Invalid suit');
       }
      return {
          face,
          suit,
          toString() {
              return `${face}${suitToString[suit]}`
          }
      };
}
  const card = playingCards('J', 'D')
 
  console.log('' + card);
  console.log(`${card}`);
playingCards('A', 'S')
playingCards( '11', 'S')
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));
console.log(playingCards('A', 'M'));