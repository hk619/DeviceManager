
const initalState = "laptop";

export const selectedTab = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_TAB':
            return action.selected;
        case 'CHANGE_TAB':
            return action.selected;
        default:
            return state;
    }
}

// const list = [];

export const detailsList = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_LIST':
            return [...action.list];
        case 'ADD_DEVICE':
            return [...state, ...action.modelData];
        case 'DELETE_DEVICE':
            state.splice(action.itemId, 1)
            return [...state];
        //  {};
        case 'EDIT_DEVICE':
            return;
        //  {};
        case 'GET_LIST':
            return state;
        default:
            return state;
    }
}