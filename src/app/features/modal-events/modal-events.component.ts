import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-events',
  imports: [CommonModule],
  templateUrl: './modal-events.component.html',
  styleUrl: './modal-events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEventsComponent   {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-events.html',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {}