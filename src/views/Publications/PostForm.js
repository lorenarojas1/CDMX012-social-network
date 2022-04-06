/* eslint-disable import/no-useless-path-segments */
/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { Navbar } from '../Navbar.js';
import { savePost, updatePost } from '../../lib/firestore.js';
import { userState } from '../../lib/firebase.js';
import { idPostEdit, editStatus, editPost } from '../Publications/RendPosts.js';
import { navigateTo } from '../../lib/navigator.js';

const PostForm = () => {
    const user = userState();
    const viewInfo = `
<div id="addPublication" class="wall-container">
    <div class= "form-Background">
    <div class="information-user">
    <img class="userimg" src="../image/user/3.png">
    <p class= "getemail">${user ? user.email : ''}</p>
    </div>
    <form id="publicationsForm" class="form">
        <label for="review"></label>
        <textarea class = "inputpost" type="text" id="review" placeholder= "¿Qué estás pensando?" ></textarea Required>
        <div class="error-formPost" id="postMesseges"></div>
        <label class="hastags-label" for="rating"># Hasgtags:</label>
        <input class = "inputHash" type="texto" id="rating" Required>

        <button class="btnPost" id="btnAddPoster" type="submit">Publicar</button>
    </form>
    </div>
</div>
`;
const posts = document.createElement('div');
posts.classList.add('wall-container');
posts.appendChild(Navbar());

const contentPost = document.createElement('div');
contentPost.classList.add('containerpost');
contentPost.innerHTML = viewInfo;

posts.appendChild(contentPost);

const errorMessage = contentPost.querySelector('#postMesseges');

const formPost = contentPost.querySelector('#publicationsForm');
const btnAddPost = contentPost.querySelector('#btnAddPoster');
const rating = contentPost.querySelector('#rating');
const review = contentPost.querySelector('#review');

const date = new Date();
const dateToday = date.toDateString();

if (!editStatus) {
    formPost.addEventListener('submit', async(event) => {
        event.preventDefault();
        try {
            // console.log('savepost', rating.value, review.value, user, dateToday);
            await savePost(rating.value, review.value, user.email, dateToday);
            navigateTo('/homeUser');
        } catch (error) {
            // console.error('savepost', error);
            errorMessage.innerHTML = '&#x02716'.concat(' ', error.message);
        }
    });
} else {
    rating.value = editPost.rating;
    review.value = editPost.review;
    btnAddPost.textContent = 'guardar';
    formPost.addEventListener('submit', async(event) => {
        event.preventDefault();
        try {
            await updatePost(idPostEdit, {
                rating: rating.value,
                review: review.value,
            });
            navigateTo('/homeUser');
        } catch (error) {
            errorMessage.innerHTML = '&#x02716'.concat(' ', error.message);
        }
    });
}
return posts;
};

export default {
    renderElement: () => PostForm(),
};
