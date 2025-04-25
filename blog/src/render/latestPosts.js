import data from '../data.json';
const latestPosts =  (element) => {
    data.map((item) => {
        const post = document.createElement('article');
        post.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.publishedAt}</p>
        `;
        element.appendChild(post);
    });
 }
export default latestPosts;