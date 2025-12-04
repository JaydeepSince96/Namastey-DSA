// 1)- We can make all the type optional

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// const updatedUser: Partial<User> = {
//   name: "Alex"  // OK, others optional
// };


// 2)- Makes all properties mandatory (opposite of Partial).

// type User={
//     name: string,
//     age: number,
//     email: string,
// }

// const u: Required<User> = {
//   name: "Sam",
//   age: 30,   // required now
//   email:"jaydeep@gmail.com" // required now
// };


// 3)- Makes all properties read-only (cannot change values).

// type Config = {
//   port: number;
//   db: string;
// };

// const cfg: Readonly<Config> = {
//   port: 3000,
//   db: "postgres"
// };

// cfg.port = 4000; // ❌ ERROR: Cannot assign


// 4)- Select specific fields from a type.

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// };

// type UserPreview = Pick<User, "id" | "name">;

// const u: UserPreview = {
//   id: 1,
//   name: "Jaydeep"
// };

// 5)- Remove fields from a type.

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// };

// type UserWithoutEmail = Omit<User, "email">;

// const u: UserWithoutEmail = {
//   id: 1,
//   name: "Jaydeep",
//   age: 23
// };


// 6)- Creates an object type with fixed keys and same type value.

// type UserRole = "admin" | "user" | "guest";

// const permissions: Record<UserRole, boolean> = {
//   admin: true,
//   user: false,
//   guest: false
// };


// 7)- Removes one union from another.

// type Roles = "admin" | "user" | "guest";
// type NonGuest = Exclude<Roles, "guest">;
// // "admin" | "user"


// 8)- Keeps only the matching ones.

// type Events = "click" | "scroll" | "keydown";
// type MouseEvents = Extract<Events, "click" | "scroll">;
// // "click" | "scroll"


// 9)- Gets the return type of a function.

// function getUser() {
//   return { name: "Amit", age: 25 };
// }

// type User = ReturnType<typeof getUser>;



