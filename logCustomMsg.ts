function logCustomMessage(message: string) {
  return function (target: Function) {
    console.log(message);
  };
}

@logCustomMessage("This is a custom message !")
class User {
  constructor(public fName: string, public lName: string) {}

  fullName(): string {
    return `${this.fName} ${this.lName}`;
  }
}
