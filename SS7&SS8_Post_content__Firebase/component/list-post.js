class ListPost extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({ mode: 'open' });

        db.collection('posts').onSnapshot(res => {
            let postItems = res.docs.map(doc => {
                return `
                <post-item content = '${doc.data().content}' time="${doc.data().createdAt}"></post-item>
                `
            })
            this._shadowDOM.innerHTML = `<div>
            ${postItems.join('')}</div>`
        })



        // this.getdata()
        //     .then(post => {
        //         this._shadowDOM.innerHTML = `
        //             ${post}
        //         `
        //     })
    }


    // async getdata(){

    //     const data = await db.collection('posts').get();
    //     console.log(data);


    //     const postItems = data.docs.map((doc) => {
    //         return `

    //         <post-item content = '${doc.data().content}' time="${doc.data().createdAt}"></post-item>

    //         `
    //     })
    //     return postItems.join('');
    // }



}
window.customElements.define('list-post', ListPost);