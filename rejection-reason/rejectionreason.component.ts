import { Component, Inject, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-rejectionreason',
  templateUrl: './rejectionreason.component.html',
  styleUrls: ['./rejectionreason.component.css']
})
export class RejectionReasonComponent implements OnInit {

  Reason =""

  constructor(public dialogRef: MatDialogRef<RejectionReasonComponent>,
    @Inject(MAT_DIALOG_DATA) public data="",private router:Router) {

  }
  ngOnInit(): void {
  
    

  }
 

  close() {
    this.dialogRef.close();

  }

}
