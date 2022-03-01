

function showDescription(title, description) {
    $(".modal-title").html(title);
    $("#messageText").text(description);
    $("#message").modal("show");
}

function submitForm(e) {
    e.preventDefault()
    let form = $(e.target)
    console.log(form.serialize())
    // show loader
    $("#loader").show()
    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        success: response => {
            if (response.success) {
                $('#message').modal('show')
                $(".modal-title").html("success")
                $("#messageText").html(response.success)
                // hide loader
                $("#loader").hide()
                console.log("REsponse====>", response)
            } else {
                $('#message').modal('show')
                $(".modal-title").html("Error")
                $("#messageText").html(response.error)
                $("#loader").hide()
            }
        },
        error: (xhr, status, error) => {
            console.log(error)
        }
    })
}

// search
function search(e) {
  /* fetch(`/searchajax?title=${e.target.value ? e.target.value : ' '}`).then(result => { */
  const id = e.value
  if(!e.target) {
    var url = `/filterBooks/${id}`
  } else {
    var url = `/searchajax?title=${e.target.value ? e.target.value : ' '}`
  }
  fetch(url).then(result => {
        result.json().then(response => {
            if (response.success) {
                // json object {success: true, books: [{}, {}, {}, ...]}
                let htmlContent = `<h1 class="text-center display-4">Search Results: (${response.books.length})</h1>`
                response.books.forEach((book, index) => {
                    if (index == 0) {
                        htmlContent += `<div class="row">`
                    } else {
                        // each 4 times generate div class col-md-3
                        if (index % 4 == 0) {
                            htmlContent += `</div><div class="row">`
                        }
                    }
                    htmlContent += `
                        <div class="col-md-3 mb-3">
                            <div class="card" style="width: 100%; height: 100%">
                                <div class="card-body bg-dark border p-4">
                                    <h5 class="card-title">${book.title}</h5>
                                    <p class="card-text">Author: ${book.author.name}</p>
                                    <div >
                                    <a href="/books/${book._id}" class="btn btn-primary"
                                      >Go To Book</a
                                    >
                                    <a
                                      href="javascript:;"
                                      class="btn btn-warning"
                                      onclick="showDescription(\`${book.title}\`,\` ${book.description}\`)"
                                      >Description</a
                                    >
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                    `
                })
                htmlContent += "</div>"
                // plase. content class with htmlContent
                $('.dynamicHTML').html(htmlContent)
            } else {
                $('.dynamicHTML').html(`<h1 class="text-center display-4 bg-danger">ERROR</h1><pre>${response.error}</pre>`)
            }
        }).catch(err => {
            console.log(err)
        })
    }).catch(error => {
        console.log(error)
    })
}
