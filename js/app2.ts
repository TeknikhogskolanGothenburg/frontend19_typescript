enum Role {
  Read_Only = "Read Only",
  Author = "Author",
  Admin = "Admin"
}

let user: {
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
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
