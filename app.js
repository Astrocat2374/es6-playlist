console.log('data', data);

//Renders songs

var newSong;


function render () {
    console.log('Rendered Music')
    data.map(allMusic => {
        let songBlock = document.querySelector('#data');
        songTemplate = `
        <img src=${allMusic.image} class='image'></img>
        <h2>${allMusic.title}</h2>
        <h3>${allMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${allMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
}

window.onload = render;

//Filter All

const filterAll = document.querySelector('#filter-all').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    //Removes previously rendered music
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.map(allMusic => {
        let songBlock = document.querySelector('#data');
        console.log('allMusic', allMusic);
        songTemplate = `
        <img src=${allMusic.image} class='image'></img>
        <h2>${allMusic.title}</h2>
        <h3>${allMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${allMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})

//Filter rock script

const filterRock = document.querySelector('#filter-rock').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.filter(song => {
        return song.genre === 'Rock';
    }).map(function(rockMusic){
        let songBlock = document.querySelector('#data');
        console.log('rockMusic', rockMusic);
        songTemplate = `
        <img src=${rockMusic.image} class='image'></img>
        <h2>${rockMusic.title}</h2>
        <h3>${rockMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${rockMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})