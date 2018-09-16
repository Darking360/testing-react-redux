import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment('Hola');
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('Otro');
    expect(action.payload).toEqual('Otro');
  });
})
