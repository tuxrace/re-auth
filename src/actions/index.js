// @flow
export const hello = str => dispatch => {
  dispatch({type: 'GREETING', data: str})
}
