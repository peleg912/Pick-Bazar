const express = require('express');
const next =  require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();


app.prepare()
 .then(()=> {
    const server = express();
    server.use(bodyParser.json());

    server.get('/:category', (req, res)=> {
        const actualPage = "/";
        const queryParams = {category: req.params.category};
        app.render(req, res, actualPage, queryParams);
    });

    server.get('/products/:product', (req, res)=> {
        const actualPage = "/products";
        const queryParams = {product: req.params.product};
        app.render(req, res, actualPage, queryParams);
    });

   
    server.get('*', (req, res)=> {
        return handle(req, res);
    })

    server.listen(3000, (err)=> {
        if (err) throw err;
        console.log('server is listening on port:3000');
    })
 })
 .catch((ex)=> {
     console.error(ex.stack);
     process.exit(1);
 })
