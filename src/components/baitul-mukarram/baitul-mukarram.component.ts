import { Component, OnInit } from '@angular/core';
import {Khutba, khutbas} from '../../data/baitul-mukarram';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-baitul-mukarram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baitul-mukarram.component.html',
  styleUrl: './baitul-mukarram.component.css'
})
export class BaitulMukarramComponent implements OnInit {
  khutbas: Khutba[] = [...khutbas].reverse();;
  ngOnInit(): void {
  }
}