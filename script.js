// Array of bass players
const bassPlayer = ['Mark King', 'James Jamerson', 'Bootsy Collins', 'Flea', 'John Entwhistle', 'Ron Carter', 'Herbie Flowers', 'Larry Graham', 'Pino Palladino', 'Paul MacCartney', 'Bill Wyman', 'Marcus Miller'];

// Array of Stage Moves
const stageMoves = ['threw some shapes at ', 'did the "helicopter" on stage at ', 'duck-walked at ', 'flossed like a boss at '];

// Array of venues
const venues = ['Ronnie Scotts', 'The Jazz Cafe', 'The Dirty Duck', 'The Cock Inn', 'Fanny on the Hills\' atrium', 'The Hairy Lemon', 'The Fox and Firkin', 'The Fat Badger', 'The Tickled Trout', 'The Royal Albert', 'The Bull and Specticles', 'Wig and Gavel'];

// Array of Chops 
const chops = ['rocked hard with', 'broke a string with', 'wanged a twanger with', 'slappered da bass with', 'punched', 'kissed', 'then refused to play with', 'wowwed the audience with', 'moon walked with', 'heckled the audence with', 'played naked with', 'fell over with'];

//Array of Artists
const artist = ['The Wurzels', 'Madonna', 'The cast of Neighbours', 'Atomic Rooster', 'Taylor Swift', 'Morrisey', 'the Kardashians', 'Kajagoogoo', "the Polperro Fishermen's Choir", 'Motorhead', 'Prince', 'Rick Astley'];

// Function to create Random Number
function lastsNightsGig() {
  //create a random number based on the input array
  function getRandNum(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  //creating random indexes for the arrays
  let bassistRand = bassPlayer[getRandNum(bassPlayer)];
  let stageMovesRand = stageMoves[getRandNum(stageMoves)];
  let venuesRand = venues[getRandNum(venues)];
  let chopsRand = chops[getRandNum(chops)];
  let artistRand = artist[getRandNum(artist)];

  //create string
  let resultString = `${bassistRand} ${stageMovesRand}${venuesRand} and ${chopsRand} ${artistRand}`;
  
    console.log("At last nights gig:")
    console.log(resultString + "!");
};

lastsNightsGig();

 