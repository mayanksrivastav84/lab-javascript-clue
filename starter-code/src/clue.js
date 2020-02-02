var mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: "45",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  };
  
  var drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: "26",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
  };
  
  var profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: "22",
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  };
  
  var missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: "31",
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  };
  
  var mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: "36",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  };
  
  var mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: "62",
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  };
  
  // Weapons
  var rope = {
    name: "rope",
    weight: "10"
  };
  
  var knife = {
    name: "knife",
    weight: "10"
  };
  
  var candlestick = {
    name: "candlestick",
    weight: "8"
  };
  
  var dumbbell = {
    name: "dumbbell",
    weight: "2"
  };
  
  var poison = {
    name: "poison",
    weight: "30"
  };
  
  var axe = {
    name: "axe",
    weight: "2"
  };
  
  var bat = {
    name: "bat",
    weight: "15"
  };
  
  var trophy = {
    name: "trophy",
    weight: "25"
  };
  
  var pistol = {
    name: "pistol",
    weight: "20"
  };
  
  var dinning_room = {
    name: "Dinning Room"
  };
  
  var Conservatory = {
    name: "Conservatory"
  };
  var Kitchen = {
    name: "Kitchen"
  };
  var Study = {
    name: "Study"
  };
  var Library = {
    name: "Library"
  };
  var Billiard_Room = {
    name: "Billiard Room"
  };
  var Lounge = {
    name: "Lounge"
  };
  var Ballroom = {
    name: "Ballroom"
  };
  var Hall = {
    name: "Hall"
  };
  var Spa = {
    name: "Spa"
  };
  var Living_Room = {
    name: "Living Room"
  };
  var Observatory = {
    name: "Observatory"
  };
  var Theater = {
    name: "Theater"
  };
  var Guest_House = {
    name: "Guest House"
  };
  var Patio = {
    name: "Patio"
  };
  
  // Characters Collection
  var charactersArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
  ];
  
  // Rooms' Collection
  var roomsArray = [
    rope,
    knife,
    candlestick,
    dumbbell,
    poison,
    axe,
    bat,
    trophy,
    pistol
  ];
  
  // Weapons Collection
  var weaponsArray = [
    dinning_room,
    Conservatory,
    Kitchen,
    Study,
    Library,
    Billiard_Room,
    Lounge,
    Ballroom,
    Hall,
    Spa,
    Living_Room,
    Observatory,
    Theater,
    Guest_House,
    Patio
  ];


  //Iteration2: Create the mystery 

  function randomSelector(array) {
    var random = array[Math.round(Math.random() * array.length)];
    return random;
  }

//Pick Mystery
function pickMistery(array1, array2, array3) {
    misteryEnvelope = {};
    var character = randomSelector(array1);
    var room = randomSelector(array2);
    var weapon = randomSelector(array3);
    misteryEnvelope.character = character;
    misteryEnvelope.room = room;
    misteryEnvelope.weapon = weapon;
    return misteryEnvelope;
  }


  misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray);


  //Reveal Mystery
  function revealMystery(misteryEnvelope) {
    console.log (
      misteryEnvelope.character.first_name,
      misteryEnvelope.character.last_name,
      `killed Mr. Boddy using`,
      misteryEnvelope.weapon.name,
      `in the`,
      misteryEnvelope.room.name
    );
  }
  
  revealMystery(misteryEnvelope);
  
