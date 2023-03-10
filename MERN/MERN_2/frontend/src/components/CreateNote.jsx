import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {
  
  state = {
    users:[],
    userSelected: '',
    title: '',
    content: '',
    date: new Date()
  }



  async componentDidMount(){
    const res = await axios.get('http://localhost:3000/api/users')
    this.setState({users: res.data.map(user => user.username)})
  }

  onSubmit = async(e)=>{
    e.preventDefault()

    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected

    }
    await axios.post('http://localhost:3000/api/notes', newNote)
  }
  
  onInPutChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  onChangeDate = date =>{
    this.setState({date})
  }

  render() {
    return (
      <div className='col-md-6 offset-md-3'>
        <div className='card card-body'>
          <h2>Notas</h2>
          {/* Select user */}
          <div className='form-group'>
            <select className='form-control' name='userSelected' onChange={this.onInPutChange}>
              {
                  this.state.users.map(user => 
                  <option key={user} value={user}>
                    {user}
                  </option>)
              }
            </select>

          </div>
          <div className='form-group'>
              <input  type="text" 
                      className='form-control'
                      placeholder='Titulo'
                      name='Title'
                      />
          </div>
          <div className='form-group'>
            <textarea
              name='content'
              className='form-control'
              placeholder='Contenido'
              onChange={this.onInPutChange}
              required
              >

            </textarea>
          </div>

          <div className='form-group'>
              <DatePicker
                className='form-control' 
                selected={this.state.date}
                onChange={this.onChangeDate}

                />
          </div>

          <form onSubmit={this.onSubmit}>
            <button type='submit' className='btn btn-primary'>
              Guardar
            </button>
          </form> 
        </div>
      </div>
    )
  }
}
