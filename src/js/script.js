function construirPlaylist() {
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElemente('p');
    const nomeArtista = document.createElemente('p');
    const nomeAlbum = document.createElemente('p');

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = '';
    nomeArtista.innerText = '';
    nomeAlbum.innerText = '';

    console.log(nomeMusica)

    musicaElemento.appendChild(nomeMusica);

}
construirPlaylist()