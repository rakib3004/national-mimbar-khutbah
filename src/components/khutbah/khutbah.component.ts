import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Khutba, khutbas } from '../../data/baitul-mukarram';

@Component({
  selector: 'app-khutbah',
  standalone: true,
  imports: [],
  templateUrl: './khutbah.component.html',
  styleUrl: './khutbah.component.css',
})
export class KhutbahComponent implements OnInit {
  paramId: string | null = null;
  khutbahContent: any = null;
  khutbas: Khutba[] = khutbas;
  khutba: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.paramId = params.get('url');
      if (this.paramId) {
        this.getKhutbah(this.paramId);
      }
    });
  }
  private getKhutbah(url: string): void {
    this.khutba = this.khutbas.find((khutbah) => khutbah.url === url);
  }
}
