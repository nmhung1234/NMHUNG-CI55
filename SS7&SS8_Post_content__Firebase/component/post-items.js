const style = `
<style>
.container{
    margin: 20px 0;
}
        .post{
            width: 50%;
            margin: 0 auto;
            padding:20px;
            background-color: rgb(241, 198, 198);
            border-radius: 5px;
        }
    </style>
`

class PostItem extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });

        this._post = {

            content: this.getAttribute('content'),
            time: this.getAttribute('time').substring(0, 10)
        }
        this._shadowDOM.innerHTML = `

        ${style}
        <div class="container">
            <div class="post">
                <p>Created At ${this._post.time}</p>
                <p class"content">${this._post.content}</p>
            </div>
        </div>
        
        `
    }


}
window.customElements.define('post-item', PostItem);