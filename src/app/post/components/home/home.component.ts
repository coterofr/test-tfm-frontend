import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../../../auth/services/jwt-token.service';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string | null = '';

  constructor(private jwtTokenService: JwtTokenService) { }

  ngOnInit(): void {
    this.enableTooltips();
    this.getLoggedUser();
  }

  private enableTooltips(): void {
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  }

  private getLoggedUser(): void {
    this.name = this.jwtTokenService.getName();
  }
}
