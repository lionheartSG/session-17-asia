import * as actions from './actionType';

const initState = {
    employee: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.ADD_ITEM:
            console.log(action);
            return { ...state, employee: [...state.employee, action.payload] }
        case actions.REMOVE_ITEM:
            return { ...state, employee: state.employee.filter((info => info.id != action.payload))}
        default:
            return state;
    }

}

export default reducer;