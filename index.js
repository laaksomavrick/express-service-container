const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    // can define anything on this; effectively service container
    // ie app.set; app.get
    req.app.locals.hello = {hello: 'world'}
    next()
})

app.get('/', (req, res) => {
    const { app } = req;
    res.send({locals: app.locals})
});

app.listen(port, () => console.log("listening"))
