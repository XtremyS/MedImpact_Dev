import { Component, Inject, OnInit } from '@angular/core';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  FormsDialogBox: boolean = false;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public message: string) {}

  ngOnInit(): void {
    if (this.message === 'Open_Form_Dialog') {
      this.FormsDialogBox = true;
    }
  }
}
