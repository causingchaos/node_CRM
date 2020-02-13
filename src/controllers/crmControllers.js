import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel'
import e from 'express';

//Contact constructor, execute the model function, using 
//our contact schema, pasing it to the 'Contact' Object
const Contact = mongoose.model('Contact',ContactSchema);

export const addNewContact = (req,res) => {
    let newContact = new Contact(req.body);

    newContact.save((err,contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);    
    })
}

export const getContacts = (req,res) => {
    //req.params.<same id tag in routes>
    Contact.find( {} , (err,contact) => {
        if (err) {
            res.send(err);
        }
        //send object, or array of objects
        res.json(contact);    
    })
}

export const getContactWithID = (req,res) => {
    Contact.findById( req.params.contactID, (err,contact) => {
        if (err) {
            res.send(err);
        }
        //send object, or array of objects
        res.json(contact);    
    })
}

//findOneAndUpdate -- mongoose function
// _id: is  the key from the Mongo Contacts DB/Schema
//new: true -- tells mongo to send the new object, not the old object
//useFindAndModify = false  --to use most recent functions
export const updateContact = (req,res) => {
    Contact.findOneAndUpdate( { _id: req.params.contactID} , req.body, { new: true, useFindAndModify: false }, (err,contact) => {
        if (err) {
            res.send(err);
        }
        //send object, or array of objects
        res.json(contact);    
    })
}

export const deleteContact = (req,res) => {
    Contact.remove( { _id: req.params.contactID}, (err,contact) => {
        if (err) {
            res.send(err);
        }
        //send object, or array of objects
        //res.json(contact);
        res.json({message: 'successfully deleted contact'})    
    })
}