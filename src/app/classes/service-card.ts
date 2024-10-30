export class ServiceCard {
    private _iconName: string;
    private _title: string;
    private _description: string;
    
    constructor(iconName:string, title:string, description:string){
        this._iconName = iconName;
        this._title =title;
        this._description = description;
    }

    get iconName(){
        return this._iconName
    }

    get title(){
        return this._title
    }

    get description(){
        return this._description
    }
}
