class Student {

    constructor(name, dob, address) {
        this.name = name;
        this.dob = dob;
        this.address = address;
    }
    getAge() {
        return 2020 - this.dob;
    }
}

// Duc.getAge();
let Duc = new Student('Dang Minh Duc', 1997, 'Hà Nội');
console.log(Duc.getAge());
let Hung = new Student("Hung", 2000, "Hưng yên");


class Admin {
    listStudent
    constructor() {
        this.listStudent = [];

    }
    addStudent(student) {
        this.listStudent.push(student)
    }
    getListStudent() {

        // cách 1
        for (let item of this.listStudent) {
            console.log(`Toi ten la ${item.name},
                    toi ${2020 - item.dob} tuoi,
                    toi den tu ${item.address}`);
        }


        // cách 2
        let show = this.listStudent.map(item =>
            `Toi ten la ${item.name},
            toi ${2020 - item.dob} tuoi,
            toi den tu ${item.address}`);
        let str = show.join(' ');
        return str;
    }

}

let admin = new Admin();
admin.addStudent(Duc);
admin.addStudent(Hung);

console.log(admin.getListStudent());












// bài tập

class Animal {
    name
    color
    numOfLegs

    constructor(name, color, numOfLegs) {
        this.name = name;
        this.color = color;
        this.numOfLegs = numOfLegs;
    }

    eat() {
        console.log(`Con ${this.name} đang ăn nè`);
    }

    isDangerous() {
        console.log(this.numOfLegs < 2 || this.numOfLegs > 4);
    }
}

// con mèo này tên là 'Chó'

let Cat = new Animal('Chó', 'đốm', 3);
console.log(Cat);
console.log(Cat.isDangerous());
console.log(Cat.eat());



// kế thừa
class Dog extends Animal {
    genres
    constructor(name, color, numOfLegs, genres) {
        super(name, color, numOfLegs);
        this.genres = genres;
    }
    eat() {
        super.eat();
        console.log("gâu gâu")
    }
}
let Pun = new Dog("Mèo", "Đen", 4, 'male');
console.log(Pun);
Pun.eat();