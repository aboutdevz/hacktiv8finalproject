import anime from './lib/anime.es.min.js'

$('#animate').click(exec)

function exec() {
    anime({
        targets: '.box',
        translateX: 300
    });
}