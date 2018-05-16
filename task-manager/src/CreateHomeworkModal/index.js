import React, {Component} from 'react';
import './style.css'

class CreateHomeworkModal extends Component {

	constructor (){
		super();
		this.state = {
			name: '',
			link: 'http://',
			notes: '',
			complete: false
		}
	}

	updateName = e => {
		const name = e.currentTarget.value;
		this.setState({name: name})
	}

	updateLink = e => {
		const link = e.currentTarget.value;
		this.setState({link: link})
	}

	updateNotes = e => {
		const notes = e.currentTarget.value;
		this.setState({notes: notes})
	}

	handleSubmit = e => {
		e.preventDefault();

		this.props.addAssignment(this.state.name, this.state.link, this.state.notes);
		this.setState({
			name: '',
			link: '',
			notes: ''
		})

	}

	render () {

		const addClass = this.props.showAdd ? 'modal' : 'modalNone'

		return (

			<form className={addClass} onSubmit={this.handleSubmit}>
				<div className="modal-content">

					<span onClick={this.props.closeAddModal} className="close">&times;</span>

					<div id='newHead'> NEW ASSIGNMENT </div>
					
					<div id='newText'>	
						<div className='newItem'>	
							<label htmlFor="name">Name: </label>
							<input className='newInput' type='text' value={this.state.name} placeholder='Assignment Name' onChange={this.updateName}/>
						</div>
						<div class='newItem'>
							<label htmlFor='link'>Link: </label>				
							<input className='newInput'type='text' value={this.state.link} placeholder='Github Link' onChange={this.updateLink}/>
						</div>
						<div className='newItem'>
							<label htmlFor='notes'>Notes: </label>	
							<textArea className='newInput' type='text' value={this.state.notes} placeholder='Notes' onChange={this.updateNotes}></textArea>
						</div>
						<input id='newSubmit' type='submit'/>
					</div>

				</div>

			</form>

			)
	}
}

export default CreateHomeworkModal;