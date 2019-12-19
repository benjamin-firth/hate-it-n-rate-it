import { user } from './user';

describe('iuser reducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = user(undefined, {})
    expect(result).toEqual(expected);
  })

  it('should return the correct state when yuou pass in GET_USER for type of the action object', () => {
    const initialState = {};
    const action = {
      type: 'GET_USER',
      user: {
        user: {
          id: 1, 
          name: "Alan", 
          email: "alan@turing.io"
        }
      }
    }
    const result = user(initialState, action);
    const expected = {
      id: 1, 
      name: "Alan", 
      email: "alan@turing.io"
    }
    expect(result).toEqual(expected);
  })
})