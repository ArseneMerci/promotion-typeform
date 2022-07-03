export const setItem = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
}
export const getItem = (name) => {
    if (localStorage.getItem(name)) {
        const data = localStorage.getItem(name);
        return JSON.parse(data);
    }
    else {
        return "";
    }

}
export const clearAll=()=>{
    return localStorage.clear();
}