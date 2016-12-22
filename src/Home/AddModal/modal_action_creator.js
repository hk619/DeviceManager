
export function add_device(modelData) {
    return {
        type: 'ADD_DEVICE',
        modelData: [{
            name: 'A9'
        }, {
            name: 'B9'
        }, {
            name: 'C9'
        }]
    }
}

export function edit_device(id, modelData) {
    return {
        type: 'EDIT_DEVICE',
        modelData,
        id
    }
}