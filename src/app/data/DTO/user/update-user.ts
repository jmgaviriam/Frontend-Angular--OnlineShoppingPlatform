export class UpdateUser {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;

  constructor(
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
  ) {
    this.id = id;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
