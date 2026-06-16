import { Component, Input, OnChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemon', 
  standalone: true,
  imports: [NgIf],
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.scss'
})
export class FotoPokemonComponent  {
  @Input() pokemon?:Pokemon;
}
