
export function main (){
    const rootDiv = document.getElementById('root');
    const mainPage = document.createElement('main');
    mainPage.classList.add('content');
    const mainNoFixed = document.createElement('div');
    mainNoFixed.classList.add('mainnofixed');
    mainNoFixed.setAttribute('id', 'mainnofixed');

    const mainPost = document.createElement('div');
    mainPost.classList.add('main');
    mainPost.classList.add('mainpost');
    mainPost.style.marginBottom = "20px";
    mainPost.style.paddingBottom = "10px";

    const userImageBox = document.createElement('div');
    userImageBox.classList.add('userimg');
    const userImage = document.createElement('img');
    userImage.src = './image/user/3.png';

    const userName = document.createElement('div');
    userName.classList.add('username');
    const nameText = document.createElement('p');
    nameText.classList.add('name');
    nameText.textContent ='Nombre';
    nameText.style.top = '15px';

    const boxMessage = document.createElement('p');
    boxMessage.classList.add('quotes');
    const textMessage = document.createElement('textarea');
    textMessage.setAttribute('id', 'mypara');
    textMessage.setAttribute('placeholder', 'comparte un artículo, foto, video o idea...');

    const post = document.createElement('div');
    post.classList.add('post');
    const loadImage = document.createElement('img');
    loadImage.setAttribute('id', 'load2');
    loadImage.classList.add('postimg');
    loadImage.src = " ";

    const postBar = document.createElement('div');
    postBar.classList.add('postbar')

    const chooseImage = document.createElement('input');
    chooseImage.setAttribute('type', 'file');
    chooseImage.setAttribute('accept', 'images/*');
    chooseImage.setAttribute('id', 'chooseimg');
    chooseImage.addEventListener('change', (event) =>{
        loadImage.src = URL.createObjectURL(event.target.files[0]);
    });

    const buttonChooseImage = document.createElement('button');
    buttonChooseImage.classList.add('imgbttn');
    buttonChooseImage.setAttribute('type', 'button');
    buttonChooseImage.setAttribute('id', 'imgbttn');
    buttonChooseImage.textContent = 'Imagen';
    const chooseImageIcon = document.createElement('img');
    chooseImageIcon.src ='./image/icon/image.png';
    chooseImageIcon.style.width = '25px';

    const buttonSendPost = document.createElement('button');
    buttonSendPost.classList.add('postmypost');
    buttonSendPost.setAttribute('type', 'button');
    buttonSendPost.setAttribute('id', 'postmypost');
    buttonSendPost.textContent = 'Enviar';
    buttonSendPost.addEventListener('click', ()=> {
        mypost();
        alert('Funciona')
    });

    const allPost = document.createElement('div');
    allPost.classList.add('allpost');

    rootDiv.appendChild(mainPage);
    mainPage.append(mainNoFixed );
    mainNoFixed.append(mainPost, allPost);

    mainPost.append(userImageBox, userName, boxMessage, post, postBar);
    userImageBox.append(userImage);
    userName.append(nameText);
    boxMessage.append(textMessage);
    post.append(loadImage);
    postBar.append(chooseImage, buttonChooseImage, buttonSendPost);
    buttonChooseImage.appendChild(chooseImageIcon);




}



function mypost()
{
	var div=document.createElement("DIV");
	div.className="mainpost";

	var parent=document.getElementsByClassName("allpost");
	parent[0].insertBefore(div, parent[0].childNodes[0]);

	var div1=document.createElement("DIV");
	div1.className="userimg";
	var img=document.createElement("img");
	img.src= "./image/user/3.png";
	div1.appendChild(img);
	div.appendChild(div1);

	var div2=document.createElement("DIV");
	div2.className="username";
	var para=document.createElement("p");
	para.className="name";
	var text1=document.createTextNode("Nombre");
	para.appendChild(text1);
	div2.appendChild(para);
	div.appendChild(div2);

	var para1=document.createElement("p");
	para1.className="time";
	var text2=document.createTextNode("Just now");
	para1.appendChild(text2);
	div.appendChild(para1);

	var para2=document.createElement("p");
	para2.className="quotes";
	var pararec=document.getElementById("mypara");
	var paapa=pararec.value.replace(/\s/g, "\u00a0");
	pararec.value="";

	var text3=document.createTextNode(paapa);
	para2.appendChild(text3);
	div.appendChild(para2);

	var div3=document.createElement("DIV");
	div3.className="post";
	var img1=document.createElement("img");
	img1.className="postimg";
	var output = document.getElementById('load2');
    img1.src = output.src;
    output.src="";
	div3.appendChild(img1);
	div.appendChild(div3);

	let div4 = document.createElement("DIV");
    div4.classList.add('containerLikes');
	let voting = document.createElement("DIV");
    voting.classList.add('voting');
	
    let buttonLike = document.createElement("button");
    buttonLike.classList.add('btnvoting');
    buttonLike.classList.add('likebtn');
    let like = document.createElement("i");
    like.className="fa fa-thumbs-up";

    let inputLike = document.createElement("input");
    inputLike.classList.add('inputvoting');
    inputLike.setAttribute('type', 'number');
    inputLike.setAttribute('id', 'input1');
    inputLike.setAttribute('value', '0');
    inputLike.setAttribute('name', '');



    
    let buttonDislike = document.createElement("button");
    buttonDislike.classList.add('btnvoting');
    buttonDislike.classList.add('dislikebtn');
    let dislike = document.createElement("i");
    dislike.classList.add('fa');
    dislike.classList.add('fa-thumbs-down');
    let inputDislike = document.createElement("input");
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




	//incre++;
}





