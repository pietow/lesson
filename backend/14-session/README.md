## Session:

### Task1: 

create an express application which contains tow routs:

    - /  show login form
    - /admin shows welcome admin text

### Task3:

after user logged in she/she should not be able to browse login page again so she/he should be redirected to admin page if they try to browse login page.

### Task4:
in admin.ejs create an event listener to logout button so it will send POST request
to /logout so the server will kill the session and response with "done" as json.
after getting "done" from the server, front end should redirect to [/login] page