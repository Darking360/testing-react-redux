import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handle actions of type save comment', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'El comentario'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['El comentario']);

});

it('handles action with unkown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
