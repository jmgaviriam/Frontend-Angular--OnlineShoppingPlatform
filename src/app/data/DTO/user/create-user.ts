export class CreateUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;

  constructor(
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
  ) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
