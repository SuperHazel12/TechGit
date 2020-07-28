import React from 'react';
import './form.css';

function form() {
  return(
    <div>
      <form>
        <label htmlFor='title'>Title</label>
        <input type='text' id='name' name='title'/>

        <label htmlFor='link'>Link</label>
        <input type='text' id='name' name='link'/>

        <label htmlFor='body'>Body</label>
        <input type='text' id='name' name='body'/>

        <button>Publish</button>
        <button>Close</button>
      </form>
    </div>
  )
}

export default form;