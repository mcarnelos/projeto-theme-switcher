function troca_cor_light() {

    const element = document.querySelector('body')

    element.classList.add('light', 'dark')
    console.log(element.classList)
    element.classList.toggle('light')
}

function troca_cor_dark() {

    const element = document.querySelector('body')

    element.classList.add('light', 'dark')
    console.log(element.classList)
    element.classList.toggle('dark')
}
