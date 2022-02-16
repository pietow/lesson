/** @format */

;(function () {
    'use strict'

    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let action = '/login'
        let formData = new FormData(e.target)
        /* console.log(formData.get('password')) */
        /* console.log('bla') */
        form_login(action, formData)
    })

    /* const body = JSON.stringify({ */
    /*     bla: 'awd', */
    /*     awd: 'awd', */
    /* }) */
    const headers = {'Content-Type': 'application/json'}

    function form_login(action, FormData) {
        fetch(action, { method: 'post', FormData, headers })
            .then((res) => {
                if (res.status < 200 || res.status >= 300)
                    throw new Error(
                        'Request failed with status code ' + resp.status,
                    )
                return res.json()
            })
            .then((json) => {
                console.log(json)
                console.log('ba')
            })
            .catch((err) => {
                console.log(err)
            })
    }
})()
