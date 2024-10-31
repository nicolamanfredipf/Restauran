export class MenuNavbar {
    private _iconName:string;
    private _lable:string;
    private _title:string;
    
    constructor(iconName:string, lable:string, title:string){
        this._iconName = iconName;
        this._lable = lable;
        this._title = title;
    }
    
    get iconName(){
        return this._iconName;
    }
    
    get lable(){
        return this._lable;
    }
    
    get title(){
        return this._title;
    }
}
