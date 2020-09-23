import { Component, ViewChild } from "@angular/core";
import { Data_Structure } from "./data";
import {
  CdkDragStart,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import { MatTable } from "@angular/material/table";
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample {
  data_Structure = Data_Structure;
  columnReferenceIds = [];
  columnFields = [];
  maxDepthLevelForPrimaryCells = 1;
  maxDepthForHeaderColumnGroup = 5;

  @ViewChild(MatTable) table: MatTable<any>;
  previousIndex: number;
  ngOnInit() {
    console.log(this.data_Structure);
    this.columnReferenceIds = this.data_Structure.headers.map(headerCol => {
      this.columnFields.push({ field: headerCol.id });
      return headerCol.id;
    });
    this.data_Structure.headers.forEach(header => {
      this.getDummyCellsCountNeeded(header);
      this.updateMaxDepthofHeaderColumnGroup(header);
    });
    console.log(this.maxDepthLevelForPrimaryCells);
  }

  isSticky(id) {
    if (id === "3") {
      return true;
    }
    return false;
  }

  isStickyEnd(id) {
    if (id === "actions") {
      return true;
    } else {
      return false;
    }
  }

  //function to calculate primary cell level,no.of placeholder cells needed above and below
  getDummyCellsCountNeeded(headerCol, level?, parentCols?) {
    console.log(headerCol);

    if (!level) {
      level = 1;
    }
    if (!parentCols) {
      parentCols = [];
    }
    //setting level for each column
    headerCol.level = level;
    if (headerCol.primary) {
      headerCol.primaryAtNestedLevel = level;
      //setting primary headerCell level in each parent column level
      parentCols.forEach(obj => {
        obj.primaryAtNestedLevel = level;
      });
      //setting primary headerCell in each child column getPrimaryAtLevel
    } else {
      level += 1;
      if (level > this.maxDepthLevelForPrimaryCells) {
        this.maxDepthLevelForPrimaryCells = level;
      }
      if (headerCol.subColumns && headerCol.subColumns.length) {
        for (
          let subColIndex = 0;
          subColIndex < headerCol.subColumns.length;
          subColIndex++
        ) {
          this.getDummyCellsCountNeeded(
            headerCol.subColumns[subColIndex],
            level,
            [headerCol, ...parentCols]
          );
        }
      }
    }
  }

  getPlaceHolderDivCountAbove(level, shouldReturnCount?) {
    let count = this.maxDepthLevelForPrimaryCells - level || 0;
    count = count < 1 ? 0 : count;
    if (!shouldReturnCount) {
      return Array(count);
    } else {
      return count;
    }
  }

  getPlaceHolderDivBelow(headerCol) {
    // return headerCol.level;
    let count = 0;
    if (headerCol.subColumns && headerCol.subColumns.length) {
      return Array(count);
    } else {
      let count =
        this.maxDepthForHeaderColumnGroup -
          (headerCol.level +
            this.getPlaceHolderDivCountAbove(headerCol.level, true)) || 0;
      count = count < 1 ? 0 : count;
      return Array(count);
    }
    return count;
  }

  updateMaxDepthofHeaderColumnGroup(headerCol) {}

  setDisplayedColumns() {
    this.columnFields.forEach((column, index) => {
      column.index = index;
      this.columnReferenceIds[index] = column.field;
    });
  }
  dragStarted(event: CdkDragStart, index: number) {
    console.log(event);
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      console.log(event);
      moveItemInArray(this.columnFields, this.previousIndex, index);
      this.setDisplayedColumns();
      // this.table.renderRows();
    }
  }

  dropListDroppedChild(event: CdkDropList, index: number){
    if(event){
      console.log(event);
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
