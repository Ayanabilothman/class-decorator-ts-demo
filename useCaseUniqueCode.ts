function uniqueCode<C extends new (...args: any[]) => {}>(target: C) {
  return class Mixin extends target {
    static codes: string[] = [];
    // the following constructor will get executed on creating object of the original class
    constructor(...args: any[]) {
      super(args);
      const code = args[1];
      if (Mixin.codes.includes(code)) {
        throw new Error(`Department code must be unique!`);
      }
      Mixin.codes.push(code);
    }
  };
}

@uniqueCode
class Department {
  constructor(public name: string, public code: string) {}
}
