// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули



let users = new URL(`https://jsonplaceholder.typicode.com/users`)
fetch(users)
    .then(value => value.json())
    .then(value => {
        let container = document.createElement(`div`)
        container.classList.add(`container`)
        for (let user of value) {
            let userDiv = document.createElement(`div`)
            userDiv.classList.add(`user`)
            let userTittle = document.createElement(`h2`)
            userDiv.appendChild(userTittle)
            userTittle.innerText = `ID:${user.id} `
            let userName = document.createElement(`h2`)
            userName.innerText = user.name
            let details = document.createElement(`a`)
            details.classList.add(`userBtn`)
            details.innerText = `user details`
            details.href = `user_details.html?id=${user.id}`
            userDiv.appendChild(userName)
            userDiv.appendChild(details)
            container.appendChild(userDiv)
        }
        document.body.appendChild(container)
    })