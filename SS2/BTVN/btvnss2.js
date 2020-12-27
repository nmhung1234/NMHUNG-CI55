class Person{
    hoten
    tuoi
    nghenghiep
    cmnd
    constructor(hoten, tuoi, nghenghiep, cmnd){
        this.hoten = hoten;;
        this.tuoi = tuoi;
        this.nghenghiep = nghenghiep;
        this.cmnd = cmnd;
    }
}
class Family{
    memberFamilies
    constructor(){
        this.memberFamilies = [];
    }
    addmember(person){
        this.memberFamilies.push(person);
    }
    getmember(){
        for(let member of this.memberFamilies){
            console.log(member);
        }
    }
}
class Town{
    listFamilies
    constructor(){
        this.listFamilies = [];
    }
    addfamily(family){
        this.listFamilies.push(family);
    }
    getfamilies(){
        for (let fam of this.listFamilies){
            console.log(fam);
        }
    }
}
// create member
let thao = new Person('Nguyễn Thị Thảo', 40,'Giáo viên', '0001');
let hung = new Person('Nguyễn Mạnh Hùng', 20,'Học sinh', '0002');
let huy = new Person('Trần Quang Huy', 10,'Học sinh', '0003');
let khanh = new Person('Đỗ  Hải Khánh', 21,'Học sinh', '0004');
let khoa = new Person('Trần Đăng Khoa', 60,'Bác sĩ', '0005');
let nhi = new Person('Nguyễn Thị Yến Nhi', 53,'Công an', '0006');
let nga = new Person('Chu Nhật Nga', 34,'Công nhân', '0007');

// add member into fam1
let family1 = new Family();
family1.addmember(thao);
family1.addmember(hung);
family1.addmember(huy);

// add member into fam2
let family2 = new Family();
family2.addmember(khanh);
family2.addmember(khoa);
family2.addmember(nhi);
family2.addmember(nga);

// add fam into town
let town1 = new Town()
town1.addfamily(family1);
town1.addfamily(family2);

// show member of fam
console.log(family2.getmember());

// show fam in town (include member's infor)
console.log(town1.getfamilies());