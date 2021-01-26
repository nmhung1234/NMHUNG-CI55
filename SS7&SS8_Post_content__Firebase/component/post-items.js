const style = `
<style>
.container{
    margin: 20px 0;
}
        .post{
            width: 50%;
            margin: 0 auto;
            padding:20px;
            // background-color: rgb(241, 198, 198);
            border: 1px solid black;
            border-radius: 5px;
        }
        .btndelete{
            padding: 5px;
            border: 1px solid black;
            border-radius: 7px;
        }
    </style>
`

class PostItem extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });

        this._post = {

            content: this.getAttribute('content'),
            time: this.getAttribute('time').substring(0, 10),
            id: this.getAttribute('id')
        }
        this._shadowDOM.innerHTML = `

        ${style}
        <div class="container">
            <div class="post">
                <p>Created At ${this._post.time}</p>
                <p class"content">${this._post.content}</p>
                <button class="btndelete">Delete</button>
            </div>
        </div>
        
        ` 
        this._shadowDOM.querySelector('.btndelete').addEventListener('click',() => {
            if(confirm('Xóa bài viết ?')){
                db.collection('posts').doc(`${this._post.id}`).delete();
            }
           
        })
    }

    


}
window.customElements.define('post-item', PostItem);