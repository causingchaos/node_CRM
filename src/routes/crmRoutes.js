const routes = (app) => {
    app.route('/contact')
        .get((req,res) => 
        res.send('GET request success!'))

        .post((req,res) => 
        res.send('POST request success!'))

    app.route('/contact/:contactID')
        .put((req,res) => 
        res.send('PUT request successful!'))
        
        .delete((req,res)=>
        res.send('DELETE request successful!'))
}

export default routes;