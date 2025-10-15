import { AfterViewInit, Component, effect, OnInit, signal } from '@angular/core';
import { CollectionsComponent } from './collections/collections.component';
import { HttpClient } from '@angular/common/http';
import { Config } from './types/config';
import { TitlePageComponent } from './title-page/title-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { FooterComponent } from './footer/footer.component';
import { Piece } from './types/collection';
import { PieceComponent } from './piece/piece.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TitlePageComponent,
    CollectionsComponent,
    ArtistsComponent,
    CommissionsComponent,
    FooterComponent,
    PieceComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iceandfireart-app';
  config = signal<Config | null>(null);

  selectedPiece = signal<Piece | null>(null);
  selectPiece = (piece: Piece) => {
    this.selectedPiece.set(piece);
    const pieceModal = document.getElementById('pieceModal');

    if (pieceModal) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      pieceModal.addEventListener('hidden.bs.modal', () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      });
    }
  }
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/config.json').subscribe(data => {
      this.config.set(data as Config);
    });
  }
}