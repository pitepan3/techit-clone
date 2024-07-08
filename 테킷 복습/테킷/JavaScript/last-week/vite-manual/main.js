import {getNode, insertLast} from 'kind-tiger'




const app = getNode('#app');


const template = `
  <figure>
    <img src="./public/favicon.svg" alt="" />
    <figcaption>자바스크립트 로고</figcaption>
  </figure>
`

insertLast(app,template)




console.log(app);