const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = [
    'Apna kaam kar',
    'Waat lag gyi bhai',
    'Du kya',
    'kuch bhi kuch bhi',
    'Apne baap ko mat sikha',
    'Gu jaisa  mu',
    'shakal dekhi hai apni',
    'magarmachh ke aansu mat ro'
];
const speechRecognition = 
    window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.lang = 'hi-IN'

recognition.onstart = function() {
    content.textContent='Voice is activated, you can speak to microphone';

};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    const random = Math.floor(Math.random()* greetings.length);
    readOutLoad(greetings[random]);
    content.textContent = greetings[random];

}


btn.addEventListener('click',()=>{
    recognition.start();
})



function readOutLoad(message){
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'hi-IN'
    speech.text= message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}