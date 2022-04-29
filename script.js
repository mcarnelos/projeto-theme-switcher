function troca_cor_light() {
    let img = window.document.getElementById('light') //pega a imagem

    img.src = './assets/moon.svg'
    
    document.body.style.backgroundColor = '#292C35'
}

function troca_cor_dark() {
    let img = window.document.getElementById('dark') //pega a imagem

    img.src = './assets/sun.svg'
    
    document.body.style.backgroundColor = '#F1F1F1'
}
