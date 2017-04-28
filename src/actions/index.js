export const hello = str => dispatch => {
  console.log('hi')
  dispatch({type: 'GREETING', data: str})
}
