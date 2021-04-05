var cartaSonic = {
    nome: "Sonic",
    imagem: "https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2019/11/12/810347/20191112131040559570e.jpg",
    atributos: {
        ataque: 8,
        defesa: 3,
        magia: 2
    }
}
var cartaCrash = {
    nome: "Crash Bandicoot",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dG74Hnj7bv4MK7W_75yHt7oFNHn4c11SDA&usqp=CAU",
    atributos: {
        ataque: 8,
        defesa: 3,
        magia: 6
    }
}
var cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 0
    }
}
var cartaLuffy = {
    nome: "Monkey D. Luffy",
    imagem: "https://gartic.com.br/imgs/mural/ju/julioooooooooooo/monkey-d-luffy.png",
    atributos: {
        ataque: 9,
        defesa: 5,
        magia: 8
    }
}
var cartaGoku = {
    nome: "Goku",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/08/Goku.jpg",
    atributos: {
        ataque: 10,
        defesa: 9,
        magia: 8
    }
}
var cartaCatBoy = {
    nome: "Cat Boy",
    imagem: "https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2019/10/18154227/Menino-Gato.png",
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 2
    }
}
var cartaGelado = {
    nome: "Gelado",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xKWpmjz7ZvrFKeBmDRJWE7Y00dhsmCJncA&usqp=CAU",
    atributos: {
        ataque: 7,
        defesa: 5,
        magia: 4
    }
}
var cartaSuperMan = {
    nome: "SuperMan",
    imagem: "https://i.pinimg.com/736x/b6/19/07/b619071681e2e2afbe0dd72296966815.jpg",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    }
}
var cartaSpiderMan = {
    nome: "SpiderMan",
    imagem: "https://ibcdn.canaltech.com.br/V02K18VeT3ePgt9p57LGwY9F_Tc=/512x288/smart/i396480.jpeg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 3
    }
}
var cartaBb8 = {
    nome: "BB8",
    imagem: "https://static.wikia.nocookie.net/ptstarwars/images/6/68/BB8-Fathead.png/revision/latest?cb=20151226225832",
    atributos: {
        ataque: 5,
        defesa: 8,
        magia: 1
    }
}
var cartaNitrusBrio = {
    nome: "Doctor Nitrus Brio",
    imagem: "https://i.pinimg.com/originals/70/b9/63/70b963b2683b670736e24431ebb43ea7.png",
    atributos: {
        ataque: 6,
        defesa: 4,
        magia: 8
    }
}
var cartaMaui = {
    nome: "Maui",
    imagem: "https://lh3.googleusercontent.com/proxy/qnkKj5474kUgb60A0fRcVks1LzNrOOkcsmPdBI72Shd8iyVyiu4wtOB-7iCf5CIrwbWH3vwLuSeihewAfXvkNbFrnbNwDJHhSlXMjhel5N8",
    atributos: {
        ataque: 4,
        defesa: 2,
        magia: 8
    }
}
var cartaCortex = {
    nome: "Dr. Cortex",
    imagem: "https://i.pinimg.com/originals/0e/ec/83/0eec83aa88ade4da930abe34bfd8ca60.jpg",
    atributos: {
        ataque: 7,
        defesa: 4,
        magia: 1
    }
}
var cartaMax = {
    nome: "Max",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/11/The-Secret-Life-of-Pets-Max.jpg",
    atributos: {
        ataque: 4,
        defesa: 5,
        magia: 0
    }
}
var cartaPika = {
    nome: "Pikachu",
    imagem: "https://observatoriodegames.uol.com.br/wp-content/uploads/2020/07/Pok%C3%A9mon-Journeys.png",
    atributos: {
        ataque: 7,
        defesa: 5,
        magia: 7
    }
}
var cartaZeze = {
    nome: "Zeze",
    imagem: "https://static.wikia.nocookie.net/disney/images/4/41/I2_-_Jack-Jack.png/revision/latest/scale-to-width-down/340?cb=20180601022955&path-prefix=pt-br",
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 10
    }
}



var cartaMaquina
var cartaJogador
var cartas = [cartaSonic, cartaCrash, cartaBatman, cartaLuffy, cartaGoku, cartaCatBoy, cartaGelado, cartaSuperMan,cartaSpiderMan,cartaBb8,cartaNitrusBrio,cartaMaui,cartaCortex,cartaMax,cartaPika,cartaZeze]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Caio " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}
