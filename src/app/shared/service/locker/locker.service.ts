import {Injectable} from '@angular/core';
import {isUndefined} from "util";

@Injectable()
export class LockerService {

    constructor (){
    }
    private keyname: string = ''

    get (key?: string){
        const itemString = window.localStorage.getItem(this.keyname)
        if (!itemString) return null;
        const itemObj = JSON.parse(itemString)
        if (!key) return itemObj;
        return itemObj[key]? itemObj[key]: itemObj
    }

    set (itemObj: any){
        const parse = itemObj =>{
            if (!itemObj) return JSON.stringify({})
            if (typeof itemObj === 'object') return JSON.stringify(itemObj)
            return JSON.stringify({data: itemObj})
        }

        return window.localStorage.setItem(this.keyname, parse(itemObj))
    }

    clear (){
        return window.localStorage.setItem(this.keyname, null)
    }

}
