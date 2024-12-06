import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-baitul-mukarram',
  standalone: true,
  imports: [],
  templateUrl: './baitul-mukarram.component.html',
  styleUrl: './baitul-mukarram.component.css'
})
export class BaitulMukarramComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}