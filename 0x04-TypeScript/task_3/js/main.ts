// // /// <reference path="./crud.d.ts"/>

// // import { RowID, RowElement } from './interface';
// // import * as CRUD from './crud';


// // // Create the row object of type RowElement
// // const row:RowElement =  {
// // firstName: "Guillaume",
// // lastName: "Salva"
// // }

// // // Insert row and save the returned RowID
// // const newRowID:RowID = CRUD.insertRow(row);

// // // Create updatedRow with age field set to 23
// // const updateRow:RowElement = {...row, age:23}

// // CRUD.updateRow(newRowID, updateRow);
// // CRUD.deleteRow(newRowID)


// /// <reference path="./crud.d.ts" />

// import { RowID, RowElement } from './interface';
// import * as CRUD from './crud';

// // Step 1: Create the row object
// const obj: RowElement = { firstName: "Guillaume", lastName: "Salva" };

// // Step 2: Insert the row and save the returned ID
// const newRowID: RowID = CRUD.insertRow(obj);
// // Console output: Insert row {firstName: "Guillaume", lastName: "Salva"}

// // Step 3: Create updated row with age
// const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };

// // Step 4: Update the row using the newRowID
// CRUD.updateRow(newRowID, updatedRow);
// // Console output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// // Step 5: Delete the row
// CRUD.deleteRow(newRowID);
// // Console output: Delete row id 125


import { RowID, RowElement } from './interface.ts';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
