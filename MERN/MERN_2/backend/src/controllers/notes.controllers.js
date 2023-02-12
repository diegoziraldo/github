const notesControllers = {

}

const Note = require('../models/Note')




notesControllers.getNotes = async (req,res)=>{
    const notes = await Note.find();
    res.json(notes)
}

notesControllers.createNote = async(req,res)=>{
    const {title, content, autor, date} = req.body;
        const newNote = new Note({
            title:title,
            content:content,
            autor:autor,
            date:date
        })
        await newNote.save();
    res.json({message: 'Nota guardada'})
}
notesControllers.getNote = (req,res)=>res.json({title: 'Hola'})

notesControllers.updateNote = (req,res)=>res.json({message: 'Note updated'})

notesControllers.deleteNote = (req,res)=>res.json({message: 'Note deleted'})


module.exports = notesControllers;