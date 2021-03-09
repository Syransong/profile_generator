const readline = require('readline'); 

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let surveyAnswers = {};

r1.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`My name is ${answer}.`);
  surveyAnswers.name = answer; 

  r1.question("What's an activity you like doing?", (answer) => {
    console.log(`I enjoy ${answer} a lot!`)
    surveyAnswers.activity = answer; 

    r1.question("What do you listen to while doing that?", (answer) => {
      console.log(`I like to listen to ${answer} while ${surveyAnswers.activity}.`)
      surveyAnswers.music = answer;

      r1.question("Who is your favourite musical artist?", (answer) => {
        console.log(`${answer} is my favourite musical artist.`);
        surveyAnswers.musicalArtist = answer; 

        r1.question("What is your favourite song by your favourite artist?", (answer) => {
          console.log(`${answer} is my favourite song by ${surveyAnswers.musicalArtist}.`)
          surveyAnswers.faveSong = answer;

          r1.question("Which album is your favourite by your favourite artist?", (answer) => {
            console.log(`My favourite album by ${surveyAnswers.musicalArtist} is ${answer}.`)
            surveyAnswers.faveAlbum = answer;

            r1.question("Why do you like your favourite artist's music?", (answer) => {
              console.log(`I like ${surveyAnswers.musicalArtist}'s music a lot because ${answer}.`)
              surveyAnswers.reason = answer;
              

              console.log(`My name is ${surveyAnswers.name}. I enjoy ${surveyAnswers.activity} a lot! I like to listen to ${surveyAnswers.music} while ${surveyAnswers.activity}. ${surveyAnswers.musicalArtist} is my favourite musical artist. ${surveyAnswers.faveSong} is my favourite song by ${surveyAnswers.musicalArtist}.My favourite album by ${surveyAnswers.musicalArtist} is ${surveyAnswers.faveAlbum}. I like ${surveyAnswers.musicalArtist}'s music a lot because ${surveyAnswers.reason}.`)
              r1.close();
            })
          })
        })
      })
    })
  })
});
