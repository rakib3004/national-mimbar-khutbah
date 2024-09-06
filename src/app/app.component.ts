import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'BloodyJuly';
  today: Date;
  customDate: string;

  constructor() { 
    this.today = new Date();
    this.customDate = this.getCustomDate();
  }

  ngOnInit(): void {}

  getCustomDate(): string {
    const currentDate = new Date();
    const startOfCustomCalendar = new Date(2024, 6, 31); // July 31, 2024
    const timeDiff = currentDate.getTime() - startOfCustomCalendar.getTime();
    const customDaysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));
    return `July ${31 + customDaysPassed}, 2024`;
  }
}
