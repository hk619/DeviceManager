import { DeleteDevice } from '../Services/device-manager-services'

export function get_list() {
    return {
        type: 'GET_LIST'
    }
}

export function delete_item(itemId, list) {
    // return (dispatch) => {
    //     DeleteDevice()
    //         .then(() => {
    //             dispatch({
    //                 type: 'DELETE_DEVICE',
    //                 itemId
    //             })
    //         })
    //         .catch(() => {

    //         })
    // }
    return {
        type: 'DELETE_DEVICE',
        itemId,
        list
    }
}