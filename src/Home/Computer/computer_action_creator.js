import { LoadList } from '../Services/device-manager-services';

export function computer_list() {
    return (dispatch) => {
        LoadList()
            .then((list) => {
                dispatch({
                    type: 'LOAD_LIST',
                     list: [{
                        name: 'A1'
                    }, {
                        name: 'B1'
                    }, {
                        name: 'C1'
                    }]
                })
            })
    }
}