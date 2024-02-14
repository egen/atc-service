import { consoleColors } from './constants';

export class LoggerHelper {
  private readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }

  log(transactionId: number, msg: string) {
    console.log(
      `${consoleColors.fg.blue}[${transactionId}] [${this.name}] ${consoleColors.fg.green}${msg}`,
    );
  }

  error(transactionId: number, msg: string) {
    console.error(
      `${consoleColors.fg.blue}[${transactionId}] [${this.name}] ${consoleColors.fg.red}${msg}`,
    );
  }
}
