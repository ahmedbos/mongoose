const express = require('express')
const Contact = require('../models/contact/contactSchema')
const router = express.Router()

// @ Description : POST METHOD
router.post('/users', async(req, res)=> {
    try{
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).json({msg:"success", newcontact});
    } catch (err){res.status(500).json({msg: err.message})}
})
// @ Description : GET METHOD
router.post('/users', async(req, res)=> {
    try{
        const newContact = await Contact.find()
        res.status(200).json({msg:"success", newcontact});
    } catch (err){res.status(500).json({msg: err.message})}
})
// @ Description : GET BY ID METHOD
router.post('/users', async(req, res)=> {
    try{
        const newContact = await Contact.findById(req.params.id)
        if (!newContact) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"success", newcontact});
    } catch (err){res.status(500).json({msg: err.message})}
})
// @ Description : UPDATE METHOD
router.post('/users', async(req, res)=> {
    try{
        const newContact = await Contact.findByIdandUpdate({_id: req.params.id}, {...req.body})
        if (!newContact) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"success", newcontact: {...newContact. _doc , ...req.body}});
    } catch (err){res.status(500).json({msg: err.message})}
})
// @ Description : DELETE METHOD
router.post('/users', async(req, res)=> {
    try{
        const newContact = await Contact.findByIdandDelete( req.params.id)
        if (!newContact) return res.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"success", newcontact});
    } catch (err){res.status(500).json({msg: err.message})}
})


module.exports = router 