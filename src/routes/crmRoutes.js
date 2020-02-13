import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from '../controllers/crmControllers'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        /*(req, res, next) => {
            res.send('GET request success!');
        })
        */
        }, getContacts) 

        // Post endpoint
        .post(addNewContact); 


    app.route('/contact/:contactID')
        //get a specific contact
        .get(getContactWithID)

        //.put((req,res) => 
        //res.send('PUT request successful!'))
        //Updating a specific contact
        .put(updateContact)
        
        //.delete((req,res)=>
        //res.send('DELETE request successful!'))
        // deleting a specific contact
        .delete(deleteContact);
}

export default routes;