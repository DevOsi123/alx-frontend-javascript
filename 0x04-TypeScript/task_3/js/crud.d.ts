// // Import types from interface.ts
// import {RowID,RowElement} from "./interface";

// // Declare the types of each function in crud.js
// export function insertRow(row: RowElement): RowID;
// export function deleteRow(rowId: RowID): void;
// export function updateRow(rowId: RowID, row:RowElement): RowID;



import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID; // Corrected parameter type
