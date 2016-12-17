
export function add_device(modelData) {
    return {
        type: 'ADD_DEVICE',
        modelData
    }
}

export function edit_device(id, modelData) {
    return {
        type: 'EDIT_DEVICE',
        modelData,
        id
    }
}