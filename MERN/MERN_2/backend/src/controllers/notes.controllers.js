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
            title,
            content,
            author,
            date
        })
        await newNote.save();
    res.json({message: 'Nota guardada'})
}

notesControllers.getNote = async(req,res)=>{
    const note = await Note.findById(req.params.id)
    console.log(note);
    res.json(note.content)
}

notesControllers.updateNote = async(req,res)=>{
    const {title, content, author} = req.body;
    await Note.findByIdAndUpdate({_id: req.params.id},{
        title,
        content,
        author,
    })
    res.json({message: 'Note updated'})
}

notesControllers.deleteNote = async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'Note deleted'})
}

module.exports = notesControllers;