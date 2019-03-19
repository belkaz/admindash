import initState from './initState';

const red = ( state = initState, action ) => {      
    switch ( action.type ) {        
        case "LOGIN" : {
            return {              
                ...state,
                showScreen : action.payload
            };
            break;
        }
        default :
            return state
    }
}

export default red;