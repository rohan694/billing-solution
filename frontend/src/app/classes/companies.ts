export class Companies {
    companyId:number| undefined;
    companyName:string="";
    gstin:string=""; 
    companyPan:string="";
    user:number| undefined;
    public constructor(init?: Partial<Companies>) {
        Object.assign(this, init);
    }
}
