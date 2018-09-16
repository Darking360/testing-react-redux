import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});



describe('the textarea', () => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'Hola mundo' }
    });

    wrapped.update();
  });

  it('has a textarea that users can type in', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('Hola mundo')
  
  });

  it('when form is submitted, textarea gets emptied', () => {

    wrapped.find('form').simulate('submit');

    expect(wrapped.find('textarea').prop('value')).toEqual('');

  });

})

