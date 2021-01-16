const style = `<style>
.create__post{
    height: 70vh;
    width: 70vh;
    background-color: aquamarine;
    margin: 0 auto;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* align-items: c; */
}
.content{
    display: flex;
    justify-content: center;
}
.content textarea{
    min-width: 80%;
    max-width: 90%;
    margin: 20px;
    min-height: 50%;
    max-height: 80%;
    border:none;
    outline: none;
    
}
.button{
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.button button{
    padding: 10px;
    border: none;
    outline: none;
    background-color: blueviolet;
    color: white;

}
</style>`
class CreatePost extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });
        this._shadowDOM.innerHTML = `
        ${style}
        <div class="create__post">
        <div class="content">
            <textarea name="" id="contenttext"></textarea>
        </div>
        <div class="button">
            <input type="file" name="" id="">
            <button class="btnpost">Post</button>
        </div>
    </div>`


        this._shadowDOM.querySelector('.btnpost').addEventListener('click', () => {

            const content = this._shadowDOM.querySelector('#contenttext').value;
            if (content.trim() == '') {
                alert("Bạn chưa nhập bài viết")
            } else {
                db.collection('posts').add({ content });
                alert('Tải bài viết lên thành công');
            }

        })

    }
}
window.customElements.define('create-post', CreatePost);