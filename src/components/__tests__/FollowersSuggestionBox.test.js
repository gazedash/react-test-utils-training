import React from 'react';
import ReactDOM from 'react-dom';
import FollowersSuggestionBox from '../FollowersSuggestionBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowersSuggestionBox />, div);
});
