import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { NgClass, NgIf } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})

export class TarjetaPokemonComponent implements OnChanges{
  @Input() data?: Resultado;

  @Input() seleccionado:boolean = false;

  @Output() clickeado = new EventEmitter<string>();

  @Input() fullData?:Pokemon;
  
  ngOnChanges(): void {
    this.extraerInformacion(); 
  }

  constructor (private pokemonService: PokemonService) { }


  id:string = "0";
  extraerInformacion(){
    if(this.data){
      this.id = this.data.url.substring(34, this.data.url.length-1); 
      this.pokemonService.getById(this.id); 
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42, this.fullData.species.url.length-1);
      this.data={
        name:this.fullData.species.name,
        url:""
      }
    }
  }

  



}
