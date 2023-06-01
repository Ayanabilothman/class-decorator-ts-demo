function uniqueCode(codeIndex: number) {
  return function <C extends new (...args: any[]) => {}>(target: C) {
    return class Mixin extends target {
      static codes: string[] = [];
      constructor(...args: any[]) {
        super(args);
        const code = args[codeIndex];
        if (Mixin.codes.includes(code)) {
          throw new Error(`${target.name} code must be unique!`);
        }
        Mixin.codes.push(code);
      }
    };
  };
}

@uniqueCode(1)
class Department {
  constructor(public name: string, public code: string) {}

  info() {
    return {
      name: this.name,
      code: this.code,
    };
  }
}

@uniqueCode(2)
class Employee {
  constructor(
    public name: string,
    public salary: number,
    public code: string
  ) {}
}
