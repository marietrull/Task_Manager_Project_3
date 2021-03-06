import React, {Component} from 'react';

class CreateOutcomeModal extends Component {
	constructor (){
		super();
		this.state={
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
			notes: '',
			link: 'http://',
	
		})

	}

	render (){

		const addClass = this.props.showAdd ? 'modal' : 'modalNone'

		return (

			<form className={addClass} onSubmit={this.handleSubmit}>
				<div className="modal-content">

					<span className="close" onClick={this.props.closeAddModal}>&times;</span>

					<div id='newHead'> NEW ASSIGNMENT </div>
					
					<div id='newText'>	
						<div className='newItem'>	
							<label htmlFor="name">Name</label>
							<br/>
							<input className='newInput' type='text' value={this.state.name} placeholder='Assignment Name' onChange={this.updateName}/>
						</div>
						<div className='newItem'>
							<label htmlFor='link'>Link</label>	
							<br/>			
							<input className='newInput'type='text' value={this.state.link} placeholder='Link to Powerpoint' onChange={this.updateLink}/>
						</div>
						<div className='newItem'>
							<label htmlFor='notes'>Notes</label>
							<br/>
							<textarea className='notesInput' type='text' value={this.state.notes} placeholder='Notes' onChange={this.updateNotes}></textarea>
						</div>
						<input id='newSubmit' type='submit'/>
					</div>

				</div>

			</form>
		)

	}
}



export default CreateOutcomeModal;
