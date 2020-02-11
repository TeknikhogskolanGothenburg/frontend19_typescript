"use strict";
var Role;
(function (Role) {
    Role["Read_Only"] = "Read Only";
    Role["Author"] = "Author";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
let user = {
    firstName: "Bob",
    lastName: "Smith",
    age: 45,
    hobbies: ["Tennis", "Coding"],
    role: Role.Author
};
//if(user.role === Role.Author)
for (const hobby of user.hobbies) {
    console.log(hobby);
}
