let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let counterOverusedWords = 0;
let counterSentences = 0;

const storyWords = story.split(' ');

const betterWords = storyWords.filter(word => {
  if(!unnecessaryWords.includes(word)){
    return word;
  }
});

betterWords.forEach(word =>{
  if(word === overusedWords[0]){
    counterOverusedWords += 1;
  }else if (word === overusedWords[1]){
    counterOverusedWords += 1;
  } else if(word === overusedWords[2]){
    counterOverusedWords += 1;
  }
})

betterWords.forEach(entry =>{
  if(entry.includes('.') || entry.includes('!')){
    counterSentences += 1;
  }
})

const logMessage = () => {
console.log(`The total word count of the story is ${betterWords.length}.`);
console.log(`There are ${counterSentences} sentences in this story.`);
console.log(`The number of times each overused word appears is ${counterOverusedWords}.`);}

logMessage();
console.log(betterWords.join(' '));