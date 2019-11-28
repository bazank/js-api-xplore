import { runInNewContext } from "vm"
import { addNewContact, getContacts, getContactWithID, updateContact, del, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`request from ${req.originalUrl}`)
        console.log(`request from ${req.method}`)
        next();
    }, getContacts)
 
    //POST endpoint
    .post(addNewContact);
    // .post((req, res) => 
    // res.send('POST request Successfull'));

  
    app.route('/contact/:contactId')
      //by specific contact ID
    .get(getContactWithID)
    //PUT request
    .put(updateContact)

    //Delete request
    .delete(deleteContact);
}

export default routes;