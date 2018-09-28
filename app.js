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

//Filter Hard Rock

const filterHardRock = document.querySelector('#filter-hard-rock').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.filter(song => {
        return song.genre === 'Hard Rock';
    }).map(function(hardRockMusic){
        let songBlock = document.querySelector('#data');
        console.log('hardRockMusic', hardRockMusic);
        songTemplate = `
        <img src=${hardRockMusic.image} class='image'></img>
        <h2>${hardRockMusic.title}</h2>
        <h3>${hardRockMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${hardRockMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})

//Filter Classic Rock

const filterClassicRock = document.querySelector('#filter-classic-rock').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.filter(song => {
        return song.genre === 'Classic Rock';
    }).map(function(classicRockMusic){
        let songBlock = document.querySelector('#data');
        console.log('classicRockMusic', classicRockMusic);
        songTemplate = `
        <img src=${classicRockMusic.image} class='image'></img>
        <h2>${classicRockMusic.title}</h2>
        <h3>${classicRockMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${classicRockMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})

//Filter Pop Rock

const filterPopRock = document.querySelector('#filter-pop-rock').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.filter(song => {
        return song.genre === 'Pop Rock';
    }).map(function(popRockMusic){
        let songBlock = document.querySelector('#data');
        console.log('popRockMusic', popRockMusic);
        songTemplate = `
        <img src=${popRockMusic.image} class='image'></img>
        <h2>${popRockMusic.title}</h2>
        <h3>${popRockMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${popRockMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})

//Filter Pop

const filterPop = document.querySelector('#filter-pop').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.filter(song => {
        return song.genre === 'Pop';
    }).map(function(popMusic){
        let songBlock = document.querySelector('#data');
        console.log('popMusic', popMusic);
        songTemplate = `
        <img src=${popMusic.image} class='image'></img>
        <h2>${popMusic.title}</h2>
        <h3>${popMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${popMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})

//Filter dance

const filterDance = document.querySelector('#filter-dance').addEventListener('click', function() {
    let child = document.querySelector('#data');
    let parent = document.querySelector('#data-parent');
    parent.removeChild(child);
    console.log('Deleted');
    child = document.createElement('div');
    parent.appendChild(child).id = 'data';
    console.log('Added new div');
    data.filter(song => {
        return song.genre === 'Dance';
    }).map(function(danceMusic){
        let songBlock = document.querySelector('#data');
        console.log('danceMusic', danceMusic);
        songTemplate = `
        <img src=${danceMusic.image} class='image'></img>
        <h2>${danceMusic.title}</h2>
        <h3>${danceMusic.artist}</h3>
        <br>
        <br>
        <br>
        <audio controls src=${danceMusic.music}>Your web browser does not support the <code>Audio</code> element</audio>
        ` ;
        newSong = document.createElement('div');
        songBlock.appendChild(newSong).className = 'song';
        newSong.innerHTML = songTemplate;
    })
})