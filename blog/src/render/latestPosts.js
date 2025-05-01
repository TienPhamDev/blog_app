import data from '../data.json';
import formatDate from '../utilities/formatDate';
const latestPosts =  (path,element) => {
    if( path === '/blog'){
        data.map((item) => {
            
            const post = document.createElement('article');
            post.classList.add('py-[16px]','border-b-1','border-neutral-200','dark:border-neutral-600');
            post.innerHTML = `
                <a href="#" class="flex flex-col gap-2">
                <h3 class="font-bold text-lg leading-5">${item.title}</h3>
                <span class="text-sm"><i>${formatDate(item.publishedAt)}</i></span>
                <p class="text-sm">${item.description}</p>
                </a>
            `;
            element.appendChild(post);
            const lastPost = element.lastChild;
            lastPost.classList.add('last:border-b-0');
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