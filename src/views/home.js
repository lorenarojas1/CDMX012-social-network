const view =/* html */ `
<section id="home">
  <h1 class="title">Terranova</h1>
  <div class="welcomeContent" id="welcomeContent">
    <div class="welcomeParagraph">
      <p>Proximamente</p>
    </div>
     </div>
</section>

<style>
section{
  display: block;
  width:100%;
}
.title{
}

p{
    text-align: center;
}
</style>
`;

export default {
    render: () => view,
};
