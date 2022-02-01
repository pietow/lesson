# Request Data

## GET Request


```javascript
router.get('route/:param', (req, res)=>{
    // any thing after domain/route/any_thing will be readed as param
    req.params['param'] /*or*/req.params.param
})
```

> To make a GET request we can use url area from browser like: domain/home, or in Form tag in HTML using method="GET"

```HTML
    <form action="/" method="GET"></form>
```

> GET request can contains params or query:

``` domain/home?name=any ``` (?) means a query sent from browser 

``` domain/home?name=any&val=any ``` two quaries splited with (&)


> to read query from express:

```javascript
router.get('/home', (req, res)=>{
    console.log(req.query)
    // req.query an object of all queries 
    // if we send: domain/home?name=any&val=any
    /* then req.query will:
        {name: "any", val: "any"}
    */
})
```

> Manually from browser we can just type in url area ``` domain/home?name=any&val=any ```
or in form HTML:

```HTML
    <form action="/home" method="GET">
        <input type="text" name="name" />
        <input type="text" name="val" />
        <input type="submit" value="SEND" />
    </form>
```

> Usualy sending GET request using forms is used in search controls, so that it's ok when the data appear in url area, but not in sensetive data like usernames, passwords, so it's better to use POST method.

## POST Request

