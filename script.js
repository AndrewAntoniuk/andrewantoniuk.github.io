const body = document.body;

const nodeList = document.querySelectorAll(
  'header, hr, footer, a, .info, .list-skill, button'
);

const changeTheme = () => {
  body.classList.toggle('black');
  nodeList.forEach((element) => {
    element.classList.toggle('black');
  });
};
