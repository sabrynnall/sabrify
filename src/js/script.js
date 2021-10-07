import baseMusicas from "./baseMusicas.js";

const listaMusicas = document.querySelector('.listaMusicas');
const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;
atualizaPlayer(baseMusicas[0].artist, baseMusicas[0].name, baseMusicas[0].img);

const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay')

let musicaAtual = 0;

function construirPlaylist(musica, musicaId) {
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento);

}

for(let contador = 0; contador < baseMusicas.length; contador++) {
    construirPlaylist(baseMusicas[contador], contador);
}

function tocarMusica(evento){

    const elementoClicado = evento.currentTarget;

    if(elementoClicado.tagName == 'li'){
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];

        tagAudio.src = musicaSelecionada.path;
        musicaAtual = Number(musicaId);
        tagAudio.play();
        botaoPlay.classList.add('pause');
        atualizaPlayer(baseMusicas[musicaAtual].artist, baseMusicas[musicaAtual].name, baseMusicas[musicaAtual].img);

    } else {
        if(tagAudio.paused) {
            tagAudio.play();
            botaoPlay.classList.add('pause');
        } else {
            tagAudio.pause();
            botaoPlay.classList.remove('pause');
    }
}
botaoPlay.addEventListener('click', tocarMusica)

function pausarMusica(){
    tagAudio.pause();
    botaoPlay.classList.remove('pause');
}
botaoPausar.addEventListener('click', pausarMusica);
}

function tocarProximaMusica(){
    if(musicaAtual === baseMusicas.length - 1){
        musicaAtual = 0
    }else{
        musicaAtual++
    }

    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeArtista = baseMusicas[musicaAtual].artist;
    let nomeMusica = baseMusicas[musicaAtual].name;
    let fotoAlbum = baseMusicas[musicaAtual].img;
    atualizaPlayer(nomeArtista, nomeMusica, fotoAlbum)
    botaoPlay.classList.add('pause');
}
const btnControlNext = document.getElementById('btnControlNext');
btnControlNext.addEventListener('click', tocarProximaMusica)

function tocarMusicaAnterior(){
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length - 1
    }else{
        musicaAtual--
    }

    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeArtista = baseMusicas[musicaAtual].artist;
    let nomeMusica = baseMusicas[musicaAtual].name;
    let fotoAlbum = baseMusicas[musicaAtual].img;
    atualizaPlayer(nomeArtista, nomeMusica, fotoAlbum)
    botaoPlay.classList.add('pause');
}
const btnControlPrev = document.getElementById('btnControlPrev');
btnControlPrev.addEventListener('click', tocarMusicaAnterior);

const areaPlayerVolume = document.querySelector('.areaPlayerVolume input');

areaPlayerVolume.addEventListener('input', function(){
    tagAudio.volume = areaPlayerVolume.value;
})

function atualizaPlayer(nome, musica, foto){
    const nomeMusica = document.getElementById('nomeMusica');
    const nomeArtista = document.getElementById('nomeArtista');
    const fotoAlbum = document.getElementById('fotoAlbum');

    fotoAlbum.src = foto;
    nomeMusica.innerText = musica;
    nomeArtista.innerText = nome;
}