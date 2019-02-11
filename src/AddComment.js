import React from 'react';

const AddComment = ({text, addComment}) =>
  <form>
    <input className="text">{text}</input> 
    <button onClick={() => addComment(document.querySelector('.text').value)} type='button'>Add comment</button> 
  </form>;

export default AddComment;