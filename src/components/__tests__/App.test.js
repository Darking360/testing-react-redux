import React, { Component } from 'react';
import { shallow } from 'enzyme';

import App from 'components/App.js';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('it shows the comment box', () => {

  expect(wrapped.find(CommentBox).length).toEqual(1);

});

it('it shows the comment list', () => {

  expect(wrapped.find(CommentList).length).toEqual(1);

});
