import { Component, input, output } from '@angular/core';
import { Collection, Piece } from '../types/collection';

@Component({
  selector: 'app-collections',
  standalone: true,
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  imports: []
})
export class CollectionsComponent {
  collections = input.required<Collection[]>();

  selectedPiece = output<Piece>();
  selectPiece = (piece: Piece) => this.selectedPiece.emit(piece);
}
