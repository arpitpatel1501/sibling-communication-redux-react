import {useSelector} from 'react-redux';

function Child_C() {

  // UseSelector reads the value from the globle store with the use of reducer
  const message = useSelector(state => state.messageReducer)

  return (
    <div className="App">
      
      <h3>Typed Message: {message} </h3>
      
    </div>
  );
}

export default Child_C;
