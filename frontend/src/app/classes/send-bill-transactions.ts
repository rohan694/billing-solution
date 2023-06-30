export class SendBillTransactions {
    invoiceId:number| undefined;
    debtorId:number| undefined; 
    billDate = new Date();
    billDescription:string=""; 
    billNumber:string="";
    creditAmount:number| undefined; 
    interestRate:number| undefined; 
    creditLimitDays:number| undefined; 
    Remark:string="";
    constructor(){} 
}
