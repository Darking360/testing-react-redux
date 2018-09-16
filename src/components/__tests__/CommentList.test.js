import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {

  const initialState = {
    comments: ['Comentario 1', 'Comentario 2']
  };
  
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one <li> per comment', () => {
  const comments = wrapped.find('li');

  expect(comments.length).toEqual(2);
});

it('renders each comment correctly', () => {
  expect(wrapped.render().text()).toContain('Comentario 1');
  expect(wrapped.render().text()).toContain('Comentario 2');
});
