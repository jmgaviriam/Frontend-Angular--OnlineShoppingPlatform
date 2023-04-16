export class UpdateStore {
  storeId: string;
  userId: string;
  name: string;
  description: string;
  logo: string;

  constructor(
    storeId: string,
    userId: string,
    name: string,
    descripiton: string,
    logo: string
  ) {
    this.storeId = storeId;
    this.userId = userId;
    this.name = name;
    this.description = descripiton;
    this.logo = logo;
  }
}
