// Có mảng bên dưới, các bạn làm theo từng task.
const arrays = [
    {
        id: 1,
        name: "user 1",
        age: 22,
    },
    {
        id: 2,
        name: "user 2",
        age: 21,
    },
    {
        id: 3,
        name: "user 3",
        age: 23,
    },
    {
        id: 4,
        name: "user 4",
        age: 24,
    },
];

var object1 = {
    id: 5,
    name: "user 5",
    age: 25,
}
var object2 = {
    id: 6,
    name: "user 6",
    age: 26,
}
// task 1: Add mới 1 user vào đầu mảng
arrays.unshift(object1);

// task 2: Add mới 1 user vào cuối mảng
arrays.push(object1);

// task 3: add nhiều user vào mảng
arrays.push(object1, object2);

// task 4: xoá 1 user ra khỏi mảng
arrays.splice(2, 1);

// task 5: lọc ra các user có age >= 22;
arrays.filter((item) => item.age >= 22);

// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
var arr = arrays.map((item) => {
    return {
        ...item, class: `pnv22b`
    }
})

// task 7: Tìm ra 1 user có age = 23
arrays.find((item) => item.age == 23);

// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23
function ArrayFindManyByAge(age) {
    var arr = [];
    for (var i = 0; i < arrays.length; i++) {
        if (arrays[i].age >= age) {
            arr[arr.length] = arrays[i];
        }
    }
    return arr;
}
ArrayFindManyByAge(23);

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];
arrays.filter((item) => arrayIds.includes(item.id));

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
arrays.sort((a, b) => a.age - b.age);

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)
arr = arr.map((item) => {
    return {
        ...item, class: item.class.toUpperCase()
    }
})

// task 12: lấy ra phần tử cuối cùng của mảng trên
arrays[arrays.length];

// task 13: lấy ra phần tử đầu tiên của mảng trên
arrays[0];

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];
var arr = [...new Set(array1.concat(array2))];

// -----------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
var result = Object.keys(person);

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
var result = Object.values(person);

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
var result = Object.entries(person).map(item => {
    return { [item[0]]: item[1] }
})

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
var object = { ...person, age: 100 };

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];
var result = { ...arrString };

// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
var result = arrBoolean.every(v => v === true);

// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
var obj = {
    fooVal: 'My name is Nam',
    get foo() {
        return this.fooVal;
    },
    set foo(val) {
        this.fooVal = val;
    }
}
obj.foo = "Hello my teacher";
obj.foo;

// task 22:
var user = {
    name: "Nam",
    age: 20
}
const newFunction = (user) => {
    // xử lý function này khi truyền params user vào là thông tin của user
    // kết quả return mong đợi là một string => "Hello User - age: 21"
    return "Hello " + user.name + " - age: " + user.age;
};
newFunction(user);

// task 23:
var numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
Math.ceil(numb)
var numb = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
Math.floor(numb)

// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";
let s = "name: " + name + " - age: " + age + " - class: " + className;

// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
arrNumber.map((item) => sum += item);