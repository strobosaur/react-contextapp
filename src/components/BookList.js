import React, { Component } from 'react';

class BookList extends React.Component {
  render() { 
    return (
      <div className='book-list'>
        <ul>
          <li>Blindsight</li>
          <li>Blood meridian</li>
          <li>Neuromancer</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;