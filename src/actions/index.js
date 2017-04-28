export const hello = (str) => dispatch => {  
  dispatch({action:'GREETING', data:str})
}
