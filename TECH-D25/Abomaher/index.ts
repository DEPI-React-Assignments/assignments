export interface IAccount {
  Date_of_opening: Date;
  addCustomer(): void;
  removeCustomer(): void;
}

export class Account implements IAccount {
  private customerAttached = false;

  constructor(
    public Acc_no: number | string,
    public Balance: number,
    public Date_of_opening: Date = new Date(),
  ) {
    if (typeof Acc_no === "string" ? Acc_no.trim().length === 0 : !Number.isFinite(Acc_no)) {
      throw new TypeError("Acc_no must be a non-empty string or a finite number.");
    }
    this.validateBalance(Balance);
    if (Number.isNaN(Date_of_opening.getTime())) {
      throw new TypeError("Date_of_opening must be a valid date.");
    }
  }

  get hasCustomer(): boolean {
    return this.customerAttached;
  }

  addCustomer(): void {
    this.customerAttached = true;
  }

  removeCustomer(): void {
    this.customerAttached = false;
  }

  debitAmount(amount: number): void {
    this.validateAmount(amount);
    this.withdraw(amount, 0);
  }

  creditAmount(amount: number): void {
    this.validateAmount(amount);
    this.Balance += amount;
  }

  getBalance(): number {
    return this.Balance;
  }

  protected withdraw(amount: number, minimumBalance: number): void {
    if (this.Balance - amount < minimumBalance) {
      throw new RangeError("The withdrawal would take the account below its minimum balance.");
    }
    this.Balance -= amount;
  }

  protected validateAmount(amount: number): void {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new RangeError("Amount must be a positive finite number.");
    }
  }

  protected validateBalance(balance: number): void {
    if (!Number.isFinite(balance) || balance < 0) {
      throw new RangeError("Balance must be a non-negative finite number.");
    }
  }
}

export class Saving_Account extends Account {
  constructor(
    Acc_no: number | string,
    Balance: number,
    public Min_Balance: number,
    Date_of_opening: Date = new Date(),
  ) {
    super(Acc_no, Balance, Date_of_opening);
    this.validateBalance(Min_Balance);
    if (Balance < Min_Balance) {
      throw new RangeError("Balance cannot be less than Min_Balance.");
    }
  }

  override debitAmount(amount: number): void {
    this.validateAmount(amount);
    this.withdraw(amount, this.Min_Balance);
  }
}

export class Current_Account extends Account {
  constructor(
    Acc_no: number | string,
    Balance: number,
    public Interest_rate: number,
    Date_of_opening: Date = new Date(),
  ) {
    super(Acc_no, Balance, Date_of_opening);
    if (!Number.isFinite(Interest_rate) || Interest_rate < 0) {
      throw new RangeError("Interest_rate must be a non-negative finite number.");
    }
  }
}
