import data from '../data.json';
function formatDate(dateInput) {
    const newDateInput = dateInput.split('T')[0] // Replace hyphens with slashes
    
    const date = new Date(newDateInput);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
const latestPosts =  (element) => {
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
    });
 }
export default latestPosts;