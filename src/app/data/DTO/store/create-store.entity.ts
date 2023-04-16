export class CreateStore {
  userId: string;
  name: string;
  description: string;
  logo: string;

  constructor(userId: string, name: string, descripiton: string, logo: string) {
    this.userId = userId;
    this.name = name;
    this.description = descripiton;
    this.logo = logo;
  }
}
