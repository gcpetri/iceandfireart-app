import { Component, input } from '@angular/core';
import { Piece } from '../types/collection';
import { faEtsy, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-piece',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent {
  iconMap = {
    'Etsy': faEtsy,
    'Instagram': faInstagram,
    'TikTok': faTiktok
  }

  colorMap = {
    'Etsy': '#ffa000',
    'Instagram': '#70a0af',
    'TikTok': '#331e38'
  }
  
  piece = input.required<Piece|null>();
}