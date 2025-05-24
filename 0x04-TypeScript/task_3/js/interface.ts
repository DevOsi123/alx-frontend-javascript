// import {insertRow, deleteRow, updateRow} from "./crud";

//  export type RowID = number;

//  export interface RowElement {
//   firstName:string;
//   lastName:string;
//   age?:number
//  }



import { insertRow, deleteRow, updateRow } from "./crud.js";




export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional
}