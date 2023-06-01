function classDecorator(target: Function) {
  console.log(`This is to decorate class ${target.name}`);
}

@classDecorator
class User {
  constructor(public fName: string, public lName: string) {}

  fullName(): string {
    return `${this.fName} ${this.lName}`;
  }
}
