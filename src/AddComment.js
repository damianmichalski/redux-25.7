import React from 'react';


class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addComment(this.state.value);
  }
  render() {
    return (
        <form onSubmit={this.onSubmitHandler} >
          <label>
            Comment: <input type={'text'} onChange={this.handleChange}/>
          </label>
          <button type={'submit'}>Add comment</button>
          <p>{this.state.message}</p>
        </form>
    );
  }
}
export default AddComment;
//ReactDOM.render(<PasswordForm />, document.getElementById("app"));
