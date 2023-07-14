/*const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initApp = async() => {
    useforeach(ids);
}
document.addEventListener('DOMContentLoaded', initApp)


const getPost = async(id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}
const useforeach = (ids) => {
    ids.forEach(async(id) => {
        const data = await getPost(id)
        console.log(data);
    });
}*/
const initApp = () => {
    const tbutton = document.getElementById('throttlle');
    tbutton.addEventListener('click', throttlle(clickLog));

}
const clickLog = () => console.log('click');
document.addEventListener("DOMContentLoaded", initApp);

const throttlle = (fn, dealy) => {
    let lastTime = 0;
    console.log('called throteel imidetly');
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < dealy) return;
        lastTime = now;
        fn(...args)
    }
}