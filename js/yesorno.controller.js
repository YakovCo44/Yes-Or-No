'use strict'

function onQuestion(ev){
    ev.preventDefault()

    const question = document.querySelector('#question').value

    getAns(res => {
        renderAnswer(res)

        if (res.answer === 'yes') getJoke(renderJoke)
        else getDog(renderDog)
    })
}

function renderAnswer({ answer, image }) {
    const answerContainer = document.querySelector('.answer-container')
    answerContainer.innerHTML = `
        <h2>Answer: ${answer}</h2>
        <img src="${image}" alt="Answer image">`
}

function renderJoke(joke) {
    const elReponse = document.querySelector('.dog-or-joke-container')
    elReponse.innerHTML = `<p>${joke}</p>`
}

function renderDog(imgUrl) {
    const elReponse = document.querySelector('.dog-or-joke-container')
    elReponse.innerHTML = `<img src="${imgUrl}" alt="Random dog">`
}