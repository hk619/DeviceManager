import { LoadList } from '../Services/device-manager-services';

export function laptop_list() {
    // return (dispatch) => {
    //     LoadList()
    //         .then((list) => {
    //             dispatch({
    //                 type: 'LOAD_LIST',
    //                 list: [{
    //                     name: 'A'
    //                 }, {
    //                     name: 'B'
    //                 }, {
    //                     name: 'C'
    //                 }]
    //             })
    //         })
    // }
    return {
        type: 'LOAD_LIST',
        list: [{
            name: 'A'
        }, {
            name: 'B'
        }, {
            name: 'C'
        }]
    }
}