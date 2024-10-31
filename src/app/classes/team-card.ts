export class TeamCard {
    private _imgUrl:string;
    private _fullName:string;
    private _designation:string;
    
    constructor(imgUrl:string,fullName:string,designation:string){
        this._imgUrl = imgUrl;
        this._fullName = fullName;
        this._designation = designation;
    }
    
    get imgUrl(){
        return this._imgUrl
    }
    
    get fullName(){
        return this._fullName
    }
    
    get designation(){
        return this._designation
    }}
    