/** @format */

;(function () {
    'use strict'

    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let action = '/login'
        let formData = new FormData(e.target)
        const data = {}
        for (let [key, value] of formData.entries()) data[key] = value
        form_login(action, data)
    })

    function form_login(action, data) {
        fetch(action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.status < 200 || res.status >= 300)
                    throw new Error(
                        'Request failed with status code ' + res.status,
                    )
                return res.json()
            })
            .then((result) => {
              if(result==='done') {
                window.location = '/admin'
              } else {
                throw new Error('Server Error')
              }
            })
            .catch((err) => {
                console.log(err)
            })
    }
})()
