export class SomeThingClass {
  something: string;
  constructor(options: string) {
    this.something = options;
  }

  getSomething(): string {
    return this.something;
  }

  sayName() {
    return 'My name is Slim Shady.';
  }
}

// export default SomeThingClass;

// export { test2 };
