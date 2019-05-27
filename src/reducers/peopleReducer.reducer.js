const initialState = {
    loading: false,
    error: false,
    count: 0,
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_PEOPLE_COUNT':
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}