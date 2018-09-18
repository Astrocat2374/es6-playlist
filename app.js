var song = document.createElement('div')
var songBlock = document.querySelector('#data');

var songData = data.map((i)=>{
    songBlock.appendChild(song);
    songBlock.innerHTML = songData;
    return songTemplate = `
    <img src=${image}></img>
    <h2>${title}</h2>
    <h3>${artist}</h3>
    ` ;
})