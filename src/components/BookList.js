import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {
  static contextType = ThemeContext;
  render() { 
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
              <li style={{ background: theme.ui }}>Blindsight</li>
              <li style={{ background: theme.ui }}>Blood meridian</li>
              <li style={{ background: theme.ui }}>Neuromancer</li>
            </ul>
          </div>
        )
      }}</ThemeContext.Consumer>
    );
  }
}
 
export default BookList;