class Person extends HTMLElement {
    constructor(){
        super();
        this._shadowDom = this.attachShadow({mode: 'open'});
        this.name = this.getAttribute('name');
        this.age = this.getAttribute('age');
        this.job = this.getAttribute('job');
        this.id = this.getAttribute('id');
        this.img = this.getAttribute('img');
        this._shadowDom.innerHTML = `
        <style>
        *body {
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          .container {
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            width: 300px;
            border: 5px solid #f0b3b3;
            border-radius: 20px;
            overflow: hidden;
            padding: 10px;
            background-image: linear-gradient(45deg, rgba(255, 111, 111, 0.842), rgba(93, 93, 253, 0.815), orange, purple, green);
            background-size: 300%;
            -webkit-animation: gradient 10s ease-in-out infinite;
                    animation: gradient 10s ease-in-out infinite;
            color: white;
          }
          
          .container img {
            border-radius: 20px 20px 5px 5px;
          }
          
          .container .info {
            padding: 0 10px;
          }
          
          @-webkit-keyframes gradient {
            0% {
              background-position: top;
            }
            50% {
              background-position: left;
            }
            100% {
              background-position: top;
            }
          }
          
          @keyframes gradient {
            0% {
              background-position: top;
            }
            50% {
              background-position: left;
            }
            100% {
              background-position: top;
            }
          }
          </style>
          
          <div class="container">
        <img src="${this.img}">
        <div class="info">
            <h3 class="infor__id">ID: ${this.id}</h3>
            <h3 class="info__name">${this.name}</h3>
            <p class="info__age">${this.age}</p>
            <p class="info__job">${this.job}</p>
        </div>
    </div>`;
       
    }
    connectedCallback(){
        console.log('ajhvhb')
    }
}

window.customElements.define('show-info', Person);