import { Component, input, signal } from '@angular/core';
import { Collection, Piece } from '../types/collection';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  imports: [
    PieceComponent
  ]
})
export class CollectionsComponent {
  collections = input.required<Collection[]>();

  selectedPiece = signal<Piece | null>(null);
  selectPiece = (piece: Piece) => {
    console.log(piece);
    this.selectedPiece.set(piece);
  }
}
