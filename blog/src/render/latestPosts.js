import data from '../data.json';
import formatDate from '../utilities/formatDate';
const latestPosts =  (path,element) => {
    if( path === '/blog'){
        data.map((item,index) => {
            
            const post = document.createElement('article');
            post.classList.add('my-[16px]');
            post.innerHTML = `
                <a href="#" class="flex flex-col gap-2">
                <h3 class="font-bold text-lg leading-5">${item.title}</h3>
                <p class="text-sm"><i>${formatDate(item.publishedAt)}</i></p>
                </a>
            `;
            element.appendChild(post);
            
        });
    } else { 
        data.map((item,index) => {
            if(index < 5){
            const post = document.createElement('article');
            post.classList.add('my-[16px]');
            post.innerHTML = `
                <a href="#" class="flex flex-col gap-2">
                <h3 class="font-bold text-lg leading-5">${item.title}</h3>
                <p class="text-sm"><i>${formatDate(item.publishedAt)}</i></p>
                </a>
            `;
            element.appendChild(post);
        }
    });}
 }
export default latestPosts;