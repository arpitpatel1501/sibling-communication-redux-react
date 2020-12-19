
import {useDispatch} from 'react-redux';
import {typeMessage} from './../actions';


function Child_B () {

    // Dispatch -> Actually execute action
    // In our case onChnage of the input

    const dispatch = useDispatch();

    return ( 
        <form>
        <h3>Type Message: 
        <input
            type='text'
            placeholder = 'Type any message'
            onChange={event => dispatch(typeMessage(event.target.value))}
        />
        </h3>
        </form>
    );

}

export default Child_B;
 

