getOnedocument();
getMultiDoc();
// read one

async function getOnedocument() {
    const docId = 'HTwnp1CzwSpdx4ll8Tlh';
    let res = await db.collection('users').doc(docId).get();
    //promise
    // console.log(res
    //     .then(snapshot => {
    //         console.log(snapshot.data())
    //     }));
    // async await
    const user = getDataFromDoc(res);
    console.log(user);
}

function getDataFromDoc(doc) {
    const data = doc.data();
    data.id = doc.id;
    return data;
}

// read multi

async function getMultiDoc() {

    let res = await db.collection('users').get();
    const user = getDataFromDocs(res.docs);
    console.log(user);

    // res.forEach(user => {
    //     console.log(user.data());
    // });

    // //cách dùng for of thi phải có .docs
    // for (const user of res.docs) {
    //     console.log(user.data());
    // }
}

// cách dùng map

// function getDataFromDocs(docs){
//   return  docs.map(doc => doc.data())
// }


// cách dùng lại func cũ và có thêm id
function getDataFromDocs(docs) {
    return docs.map(getDataFromDoc);
}


// add document
function addDocument(){
    const dataToAdd = {
        name: 'Nguyen Quang Huy',
        age: '20'
    }
    db.collection('users').add(dataToAdd);
}
addDocument();


//update document

function updateDocument(){
    const idUpdate = 'HTwnp1CzwSpdx4ll8Tlh';
    const dataUpdate = {
        age: 40,
        photos: firebase.firestore.FieldValue.arrayUnion('1234')
    }
    db.collection('users').doc(idUpdate).update(dataUpdate);
}
updateDocument();

function deleteDocument(){
    const idDelete = '1QOTbGicBjndyfvYrDFT';
    db.collection('users').doc(idDelete).delete();
}
deleteDocument();