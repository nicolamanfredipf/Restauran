export class MenuResponse {
    private _id: number;
    private _category: string;
    private _name: string;
    private _topping: string;
    private _price: number;
    private _rank: number;
    
    constructor(id: number,category: string,name: string,topping: string,price: number,rank: number){
        this._id = id
        this._category = category
        this._name = name
        this._topping = topping
        this._price = price
        this._rank = rank
    }
    
    public getId(): number {
        return this._id;
    }
    
    public getCategory(): string {
        return this._category;
    }
    
    public getName(): string {
        return this._name;
    }
    
    public getTopping(): string {
        return this._topping;
    }
    
    public getPrice(): number {
        return this._price;
    }
    
    public getRank(): number {
        return this._rank;
    }
    
}
