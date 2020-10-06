import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
  }

}
