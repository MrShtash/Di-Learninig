class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const v1 = new Video('How 2 code', 'Pretty coder', 60);
v1.watch();
const v2 = new Video('Drums tutorial', 'Pretty drummer', 500);
v2.watch();

let arrVideo = [
    {title: 'Be a wrestler', uploader:'Champion', time: 3200},
    {title: 'How to cook', uploader:'Mom', time: 2300},
    {title: 'Motocross', uploader:'Dad', time: 3223},
    {title: 'Barmen skills', uploader:'Buddy', time: 2332},
    {title: 'JavaScript is good?', uploader:'Avner', time: 3232}
];

for (let item of arrVideo) {
    console.log(`${item.uploader} watched all ${item.time} of ${item.title}!`);
}