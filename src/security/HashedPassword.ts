export class HashedPassword {

  constructor(password: string){
    this.password = password
  }

  static to(password: string){
    return new HashedPassword(password);
  }

  password: string;
}