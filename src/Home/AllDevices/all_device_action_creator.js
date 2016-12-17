import { LoadList } from '../Services/device-manager-services';

export function all_devices_list() {
    return (dispatch) => {
        LoadList()
            .then((list) => {
                dispatch({
                    type: 'LOAD_LIST',
                    list
                });
            });
    }
}