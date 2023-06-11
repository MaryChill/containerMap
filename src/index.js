export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Не подходящее имя'],
      [2, 'Не возможное действие'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
