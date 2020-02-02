const AccountType = {
    monthly: 'MONTHLY',
    yearly: 'YEARLY',
};

const AccountPaymentForm = {
    credit: 'CREDIT',
    debitCard: 'DEBIT_CARD',
    ticket: 'TICKET',
};

const AccountStatus = {
    done: 'DONE',
    expired: 'EXPIRED',
    pending: 'PENDING',
};

const AccountErrors = {
    dueDateIsInvalid: 'DUE_DATE_IS_INVALID',
    amountPaidIsInvalid: 'AMOUNT_PAID_IS_INVALID',
    amountPaidIsEmpty: 'AMOUNT_PAID_IS_EMPTY',
    accountIdIsEmpty: 'ACCOUNT_ID_IS_EMPTY',
    accountAlreadyPaid: 'ACCOUNT_ALREADY_PAID',
    accountNotExists: 'ACCOUNT_NOT_EXISTS',
    accountIsNotPaidYet: 'ACCOUNT_IS_NOT_PAID_YET',
};

const FieldTypes = {
    number: 'NUMBER',
    string: 'STRING',
    enum: 'ENUM',
    array: 'ARRAY',
    boolean: 'BOOLEAN',
};

export { AccountType, AccountPaymentForm, AccountStatus, AccountErrors, FieldTypes };