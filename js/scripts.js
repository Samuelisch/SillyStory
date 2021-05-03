const customName = document.getElementById('custom-name');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertX = ["Jabba the Hutt", "Big Daddy", "Santa Claus", "Donald Trump", "Colonel Sanders", "Eggy Mc'Eggplant", "Boaty Mc'Boatface"];
let insertY = ["the soup kitchen", "Disneyland", "the White House", "Universal Studios", "the Sahara", "the Willy Wonka Factory"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away", "exploded into a thousand pieces", "curled up into a ball and rolled away", "turned into John Coltrane and played Giant Steps"];

//for use with multiple lines from different arrays
function randomValueFromArr(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

function result() {
    let newStory = storyText; //don't replace original text
    let xItem = randomValueFromArr(insertX);
    let yItem = randomValueFromArr(insertY);
    let zItem = randomValueFromArr(insertZ);

    newStory = newStory
        .split(' ')
        .map(word => {
            return word == ':insertx:' ? xItem 
            : word == ':inserty:,' ? yItem + ',' 
            : word == ':insertz:.' ? zItem + '.'
            : word
        })
        .join(' ');

        if(customName.value !== '') {
            let name = customName.value;
            newStory = newStory.replace('Bob', name);
        }
        
        if(document.getElementById("uk").checked) {
            let weight = `${Math.round(300 / 14)} stone`;
            let temperature =  `${Math.round((94 - 32) * (5/ 9))} centigrade`;
            newStory = newStory.replace('94 fahrenheit', temperature);
            newStory = newStory.replace('300 pounds', weight);
        }
        
        story.textContent = newStory;
        story.style.visibility = 'visible';
  }

randomize.addEventListener('click', result);