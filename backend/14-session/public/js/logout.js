const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
  fetch('/admin/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html'
    }
  })
    .then((res) => {
      console.log(res)
      if(res.redirect) {
        window.location = res.url
      } else {
        throw new Error('No redirect')
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
