export class Review {

    private _id: number;
    private _customerName: string;
    private _customerJob: string;
    private _text: string
    
    constructor(id: number, customerName: string, customerJob: string, text: string) {
        this._id = id
        this._customerName = customerName
        this._customerJob = customerJob
        this._text = text
    }
    
    public id(): number {
        return this._id;
    }
    
    public customerName(): string {
        return this._customerName;
    }
    
    public customerJob(): string {
        return this._customerJob;
    }
    
    public text(): string {
        return this._text;
    }
}
