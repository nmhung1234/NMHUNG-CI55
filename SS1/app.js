// compare var/ let/ const

function compare(){
    if(true){
        var a = 1;
        let b = 2;
        const c = 1;
    }
    console.log(a);

}
compare();

const str = 'Nguyen Van A';
console.log(str.split(' ')[0]);
console.log(str.toLowerCase().includes('nguyen'));

const num = 1;
const char = '1';
console.log(num === Number(char));

// Array

const arr = [1,2,3,4];
console.log(arr.length);

//them vao cuoi
arr.push(5);
// them len dau
arr.unshift(0);
//check phan tu tong array

console.log(arr.indexOf(4)); // 3

console.log(arr.indexOf(8)); // -1
// xoa phan tu o vi tri thu 2 cuar arr

arr.splice(2,1);

console.log(arr);


// Object

const student = {
    name: 'Nguyen Van A',
    age: 18,
    submit: function(){
        console.log('submit');
    }
}
student.name = "Tran Thi B";
console.log(student.name);
student.submit();


// arrow function

const arrowfunc = (a,b) =>  a + b;

arrowfunc();



// b1:
let year = 1709;
function century(year){
return Math.ceil(year/100);
}

// b2: tinhs doi xung
let chuoi = 'abcba';
function checkdoixung(chuoi){
    let str = chuoi.split('').reverse().join('');

    if(str === chuoi){
        console.log("chuoi doi xung");
    }else
    console.log('chuoi khong doi xung');
    
}
checkdoixung(chuoi);
// cach 2:
function sosanhchuoi(chuoi){
    let dodaicatchuoi = Math.floor(chuoi.length /2);
    let check = true;
    for (let i = 0; i < dodaicatchuoi; i++) {
        if(chuoi[i] !== chuoi[chuoi.length - i - 1])
        {
            check = false;
        }
    }
    if(check == true){
        console.log("chuoi doi xung");
    }else
    console.log('chuoi khong doi xung');

}
sosanhchuoi(chuoi);


