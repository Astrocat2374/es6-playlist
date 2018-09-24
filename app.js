console.log('data', data);

//Renders songs

var newSong;
var songBlock = document.querySelector('#data');

/*for (i = 0; i < data.length; i++) {
    songTemplate = `
    <img src=${data[i].image} class='image'></img>
    <h2>${data[i].title}</h2>
    <h3>${data[i].artist}</h3>
    ` ;
    newSong = document.createElement('div');
    songBlock.appendChild(newSong).id = i;
    document.getElementById(i).className = 'song';
    newSong.innerHTML = songTemplate;
}
*/

//Filter script
var filterJazz = data.filter(song => {
    return song.genre === 'Jazz';
}).map(function(jazzMusic){
    console.log('jazzMusic', jazzMusic);
    songTemplate = `
    <img src=${jazzMusic.image} class='image'></img>
    <h2>${jazzMusic.title}</h2>
    <h3>${jazzMusic.artist}</h3>
    ` ;
    newSong = document.createElement('div');
    songBlock.appendChild(newSong).id = jazzMusic;
    document.getElementById(jazzMusic).className = 'song';
    newSong.innerHTML = songTemplate;
})