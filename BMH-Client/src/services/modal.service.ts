import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertDialogBoxComponent } from 'src/app/pages/dailog-boxes/alert-dialog-box/alert-dialog-box.component';
import { FormModalComponent } from 'src/app/pages/dailog-boxes/form-modal/form-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //* Alert Dialog Configuration
  DurationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  //* Alert Snack Bar Function
  OpentAlertDialog(Message: string) {
    this._snackBar.openFromComponent(AlertDialogBoxComponent, {
      duration: this.DurationInSeconds * 1000,
      panelClass: ['Alert_SnackBar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: Message,
    });
  }

  //* Form Dialog Box Function
  openDialog(): void {
    this.dialog.open(FormModalComponent, {});
  }
}
