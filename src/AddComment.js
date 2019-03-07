import React from 'react';

// const AddComment = ({text, addComment}) =>
//
//   <form>
//     <input className="text">{text}</input>
//     {/*<button onClick={() => addComment(document.querySelector('.text').value)} type='button'>Add comment</button>*/}
//     <button onClick={() => addComment(this.text)} type='button'>Add comment</button>
//   </form>;
//
// export default AddComment;


class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  onSubmitHandler(event) {
    const passInput = this.refs.pass;
    if (passInput.value.length < 5) {
      event.preventDefault();
      this.setState({ message: "Password should be at least 5 chars long." });
    } else {
      this.setState({ message: "Comment added! " + passInput.value });
    }
  }
  render() {
    return (
        <form >
          <label>
            Comment: <input type="text" ref="pass" />
          </label>
          <button onClick={this.onSubmitHandler.bind(this)} type='button'>Add comment</button>
          <p>{this.state.message}</p>
        </form>
    );
  }
}
export default AddComment;
//ReactDOM.render(<PasswordForm />, document.getElementById("app"));
