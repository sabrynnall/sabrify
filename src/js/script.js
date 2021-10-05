const baseMusicas = [
    {
        'name':'Carismatos',
        'artist':'Northon Pinheiro',
        'path':'./src/audio/Carismatos.mp3',
        'album':'Alma Nua',
    },
    {
        'name':'Motivos (Washer)',
        'artist':'João Manô',
        'path':'./src/audio/Motivos (Washer).mp3',
        'album':'Ecoar',
    },
    {
        'name':'Paciência',
        'artist':'João Manô',
        'path':'./src/audio/Paciência.mp3',
        'album':'Volver',
    },
    {
        'name':'Passa Tempo (feat. Ramon Souza)',
        'artist':'Julhin de Tia Lica',
        'path':'./src/audio/Passa Tempo (feat. Ramon Souza).mp3',
        'album':'Auto do Céu',
    },
    {
        'name':'Passará',
        'artist':'Northon Pinheiro',
        'path':'./src/audio/Passará.mp3',
        'album':'Alma Nua',
    },
    {
        'name':'Primeiro (feat. João Manô)',
        'artist':'Ana Heloysa',
        'path':'./src/audio/Primeiro - Ana Heloysa (feat. João Manô).mp3',
        'album':'Primeiro (feat. João Manô)',
    },
    {
        'name':'Temporais',
        'artist':'João Manô',
        'path':'./src/audio/Temporais.mp3',
        'album':'Volver',
    }
];

const listaMusicas = document.querySelector('.listaMusicas');

const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];
tagAudio.src = primeiraMusica.path;

const botaoPausar = document.getElementById('btnPause');

const botaoPlay = document.getElementById('btnControlPlay')

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

    if(elementoClicado.tagName == 'LI'){
    const musicaId = elementoClicado.dataset.id;
    const musicaSelecionada = baseMusicas[musicaId];

    tagAudio.src = musicaSelecionada.path;
    tagAudio.play();
    } else {
        tagAudio.play();
    }    
}
botaoPlay.addEventListener('click', tocarMusica)

function pausarMusica(){
    tagAudio.pause();
}
botaoPausar.addEventListener('click', pausarMusica);