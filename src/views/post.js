import {
    onGetPosts, deletePost, getPost, savePost, updatePost,
  } from '../lib/firestore.js';
  
  export function listPosts(formHomeParam, btnPostParam) {
    const formHome = formHomeParam;
    const btnPost = btnPostParam;
  
    const postContainer = document.createElement('div');
    
  
    let editStatus = false;
    let id = '';
  
    onGetPosts((querySnapshot) => {
      postContainer.innerHTML = '';
  
      querySnapshot.forEach((doc) => {
        const post = doc.data();
  
        const postContainerCard = document.createElement('section');
        //postContainerCard.classList.add('post-container-card');
        postContainerCard.className = 'mainpost';

        const userImage = document.createElement('div');
        userImage.className = 'userimg';
        const img = document.createElement('img');
        img.src = '../image/user/3.png';
        userImage.appendChild(img);
        postContainerCard.appendChild(userImage);

        const userName = document.createElement('div');
        userName.className = 'username';
        const para = document.createElement('p');
        para.className = 'name';
        const text1 = document.createTextNode('Nombre');
        para.appendChild(text1);
        userName.appendChild(para);
        postContainerCard.appendChild(userName);

        const para1 = document.createElement('p');
        para1.className = 'time';
        const text2 = document.createTextNode('Just now');
        para1.appendChild(text2);
        postContainerCard.appendChild(para1);


  
        // Contenedor del parrafo del post
        const pPost = document.createElement('p');
        pPost.innerHTML = post.message;
        pPost.className = 'quotes';


        const div4 = document.createElement('DIV');
        div4.classList.add('containerLikes');
        const voting = document.createElement('DIV');
        voting.classList.add('voting');
      
        const buttonLike = document.createElement('button');
        buttonLike.classList.add('btnvoting');
        buttonLike.classList.add('likebtn');
        buttonLike.classList.add('btn-likes');
        buttonLike.setAttribute('data-id', doc.id);
        const like = document.createElement('i');
        like.className = 'fa fa-thumbs-up';

        /*const btnLikePost = document.createElement('button');
        btnLikePost.classList.add('btn-likes');
        btnLikePost.setAttribute('data-id', doc.id);
        const imgButton = document.createElement('img');
        imgButton.classList.add('icon-likes');
        imgButton.setAttribute('data-id', doc.id);
        imgButton.title = 'corazon sin rellenar';
        imgButton.src = 'https://svgshare.com/i/fEh.svg';*/

      
        const inputLike = document.createElement('input');
        inputLike.classList.add('inputvoting');
        inputLike.setAttribute('type', 'number');
        inputLike.setAttribute('id', 'input1');
        inputLike.setAttribute('value', '0');
        inputLike.setAttribute('name', '');
      
        const buttonDislike = document.createElement('button');
        buttonDislike.classList.add('btnvoting');
        buttonDislike.classList.add('dislikebtn');
        buttonDislike.setAttribute('data-id', doc.id);
        const dislike = document.createElement('i');
        dislike.classList.add('fa');
        dislike.classList.add('fa-thumbs-down');
        
        const inputDislike = document.createElement('input');
        inputDislike.classList.add('inputvoting');
        inputDislike.setAttribute('type', 'number');
        inputDislike.setAttribute('id', 'input2');
        inputDislike.setAttribute('value', '0');
        inputDislike.setAttribute('name', '');

                // Boton de Likes
        

                
          
      
        postContainerCard.appendChild(div4);
        div4.appendChild(voting);
        voting.append(buttonLike, inputLike, buttonDislike, inputDislike);
        //btnLikePost.appendChild(imgButton);
        buttonLike.appendChild(like);
        buttonDislike.appendChild(dislike);
  
        // -- Contenedor de botones
        const postContainerButtons = document.createElement('div');
        postContainerButtons.classList.add('post-container-btn');
  

        // Boton de Borrar
        const btnDeletePost = document.createElement('button');
        btnDeletePost.classList.add('btn-delete');
        btnDeletePost.setAttribute('data-id', doc.id);
        btnDeletePost.innerHTML = 'Eliminar';
  
        const btnEditPost = document.createElement('button');
        btnEditPost.classList.add('btn-edit');
        btnEditPost.setAttribute('data-id', doc.id);
        btnEditPost.innerHTML = 'Editar';
  
   
        postContainerButtons.appendChild(btnDeletePost);
        postContainerButtons.appendChild(btnEditPost);
  
        // Agregar container p y container button a Container general
        postContainerCard.appendChild(pPost);
        postContainerCard.appendChild(postContainerButtons);
  
        postContainer.appendChild(postContainerCard);
      });
  
      // like a post
      const btnsLikes = document.querySelectorAll('.btn-likes');
      btnsLikes.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          const postId = dataset.id;
          const postData = await getPost(postId);
          let likes = postData.data().likes;
          likes += 1;
          updatePost(postId, { likes });
        });
      });
  
      // Borrar un post
      const btnsDelete = postContainer.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => btn.addEventListener('click', async ({ target: { dataset } }) => {
        try {
          if (window.confirm('Estas seguro de que quieres eliminar este post?')) {
            await deletePost(dataset.id);
          }
        } catch (error) {
          console.log(error);
        }
      }));
  
      // Editamos el post
      const btnsEdit = postContainer.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => btn.addEventListener('click', async (e) => {
        try {
          const doc = await getPost(e.target.dataset.id);
          const post = doc.data();
          formHome['description-posts'].value = post.message;
  
          editStatus = true;
          id = doc.id;
          btnPost.innerHTML = 'Guardar';
        } catch (error) {
          console.log(error);
        }
      }));
    });
  
    // Enviamos el post
    formHome.addEventListener('submit', async (e) => {
      e.preventDefault();
      const textArea = formHome['description-posts'];
      const uid = localStorage.getItem('userId');
  
      try {
        if (!editStatus) {
          await savePost(textArea.value, uid);
        } else {
          await updatePost(id, {
            message: textArea.value,
          });
  
          editStatus = false;
          id = '';
          btnPost.innerHTML = 'Enviar';
        }
  
        formHome.reset();
      } catch (error) {
        console.log(error);
      }
    });
    return postContainer;
  }



 /* function mypost() {

    const div = document.createElement('DIV');
    div.className = 'mainpost';
  
    const parent = document.getElementsByClassName('allpost');
    parent[0].insertBefore(div, parent[0].childNodes[0]);
  
    const div1 = document.createElement('DIV');
    div1.className = 'userimg';
    const img = document.createElement('img');
    img.src = './image/user/3.png';
    div1.appendChild(img);
    div.appendChild(div1);
  
    const div2 = document.createElement('DIV');
    div2.className = 'username';
    const para = document.createElement('p');
    para.className = 'name';
    const text1 = document.createTextNode('Nombre');
    para.appendChild(text1);
    div2.appendChild(para);
    div.appendChild(div2);
  
    const para1 = document.createElement('p');
    para1.className = 'time';
    const text2 = document.createTextNode('Just now');
    para1.appendChild(text2);
    div.appendChild(para1);
  
    const para2 = document.createElement('p');
    para2.className = 'quotes';
    const pararec = document.getElementById('mypara');
    const paapa = pararec.value.replace(/\s/g, '\u00a0');
    pararec.value = '';
  
    const text3 = document.createTextNode(paapa);
    para2.appendChild(text3);
    div.appendChild(para2);
  
    const div3 = document.createElement('DIV');
    div3.className = 'post';
    const img1 = document.createElement('img');
    img1.className = 'postimg';
    const output = document.getElementById('load2');
    img1.src = output.src;
    output.src = '';
    div3.appendChild(img1);
    div.appendChild(div3);
  
    const div4 = document.createElement('DIV');
    div4.classList.add('containerLikes');
    const voting = document.createElement('DIV');
    voting.classList.add('voting');
  
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('btnvoting');
    buttonLike.classList.add('likebtn');
    const like = document.createElement('i');
    like.className = 'fa fa-thumbs-up';
  
    const inputLike = document.createElement('input');
    inputLike.classList.add('inputvoting');
    inputLike.setAttribute('type', 'number');
    inputLike.setAttribute('id', 'input1');
    inputLike.setAttribute('value', '0');
    inputLike.setAttribute('name', '');
  
    const buttonDislike = document.createElement('button');
    buttonDislike.classList.add('btnvoting');
    buttonDislike.classList.add('dislikebtn');
    const dislike = document.createElement('i');
    dislike.classList.add('fa');
    dislike.classList.add('fa-thumbs-down');
    const inputDislike = document.createElement('input');
    inputDislike.classList.add('inputvoting');
    inputDislike.setAttribute('type', 'number');
    inputDislike.setAttribute('id', 'input2');
    inputDislike.setAttribute('value', '0');
    inputDislike.setAttribute('name', '');
  
    div.appendChild(div4);
    div4.appendChild(voting);
    voting.append(buttonLike, inputLike, buttonDislike, inputDislike);
    buttonLike.appendChild(like);
    buttonDislike.appendChild(dislike);
  
    // incre++;
  }*/