import { Component, input } from '@angular/core';
import { Piece } from '../types/collection';
import { faEtsy, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faFileArrowDown, faNoteSticky, faShirt } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
  iconMap: { [key: string]: IconDefinition } = {
    'Etsy': faEtsy,
    'Instagram': faInstagram,
    'TikTok': faTiktok,
    'Poster Print': faNoteSticky,
    'Graphic Tee': faShirt,
    'Digital Download': faFileArrowDown
  }

  colorMap = {
    'Etsy': '#ffa000',
    'Instagram': '#70a0af',
    'TikTok': '#331e38'
  }
  
  piece = input.required<Piece|null>();

  getMatchingIcon(itemName: string) {
    for (const key of Object.keys(this.iconMap)) {
      if (itemName.includes(key)) {
        return this.iconMap[key];
      }
    }
    return faCircle; // fallback or handle no match
  }
}