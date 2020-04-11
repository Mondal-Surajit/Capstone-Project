import { Action } from '@ngrx/store'




export class AddProduct implements Action {
    readonly type = 'AddProduct'
    constructor(public payload: any){}
}

