import { LoadList } from '../Services/device-manager-services';

export function other_list() {
    return (dispatch) => {
        LoadList()
            .then((list) => {
                dispatch({
                    type: 'LOAD_LIST',
                    list: [{
                        name: 'A2'
                    }, {
                        name: 'B2'
                    }, {
                        name: 'C2'
                    }]
                })
            })
    }
}