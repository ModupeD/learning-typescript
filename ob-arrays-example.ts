// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOUR,
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push('admin');

let favoriteActivities: any[];
favoriteActivities = ["Sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOUR) {
  console.log("is author");
}
