'use strict'

function getAns(onSuccess) {
    const url = 'https://yesno.wtf/api'
    getData(url, onSuccess)
}

function getJoke(onSuccess) {
    const url = 'https://api.chucknorris.io/jokes/random'
    getData(url, res => onSuccess(res.value))
}

function getDog(onSuccess) {
    const url = 'https://dog.ceo/api/breeds/image/random'
    getData(url, res => onSuccess(res.message))
}

function getData(url, onSuccess) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            onSuccess(ans)
        }
    }

    xhr.open('GET', url, true)
    xhr.send()
}
