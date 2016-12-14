
export function set_tab() {
    return {
        type: "SET_TAB",
        selected:'laptop'
    }
}

export function change_tab(selected) {
    return {
        type: "CHANGE_TAB",
        selected
    }
}