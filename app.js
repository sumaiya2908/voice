const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = [
    'mere samne vali khidki pe ek chand ka tukda rehta hai',
    'Isme mera ghaata tera kuch nahi jaata','Han Apna Kaam Kar',
    'Mai Kyun Karu Bhai',
    'Tu apna dekh',
    'Nikal yaha se',
    'Tera Kya jaa raha hai',
    'I am good unlike you',
    'tere muh pe chhipkali'
];
const speechRecognition = 
    window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.lang = 'hi-IN'

recognition.onstart = function() {
    console.log('Voice is activated, you can speak to microphone');

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