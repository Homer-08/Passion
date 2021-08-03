export function compress_data(obj_name, obj) {
    localStorage.setItem(obj_name, JSON.stringify(obj));
}

export function retrieve_data(obj_name) {
    let retrievedObject = localStorage.getItem(obj_name);
    return JSON.parse(retrievedObject)
}