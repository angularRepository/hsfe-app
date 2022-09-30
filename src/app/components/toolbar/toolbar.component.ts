import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PeopleTableComponent } from '../people-table';

@Component({
  standalone:true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeopleTableComponent, {
      
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
