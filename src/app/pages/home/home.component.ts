import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';
import { DetalleComponent } from '../../components/detalle/detalle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, NgForOf, NgIf, DetalleComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  @ViewChild ('tarjetas') tarjetasElement!:ElementRef; 

  listaPokemon:Resultado[]=[]; 
  pagina:number=0;
  cargando:boolean=false;
  pokemonSeleccionado?:Pokemon;
  detalle:boolean = false;

  
  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1"); 
  }

  async cargarLista(){
    this.cargando=true;
    console.log("CARGANDO");
    this.listaPokemon=[...this.listaPokemon, ...await this.pokemonService.getByPage(this.pagina)];
    console.log(this.listaPokemon);
    this.cargando=false;
    this.pagina++; 
    
  }
  
  onScroll(e:any){
    if(this.cargando) return; 

    if(Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
        )
        === e.srcElement.scrollHeight){
        this.cargarLista();
    }
    
  }
  
   async tarjetaClickeada(id:string) {
    if(this.pokemonSeleccionado && id === this.pokemonSeleccionado?.id.toString()){
      return this.cambiarEstadoDetalle()
    }
    console.log("Tarjeta clickeada:", id);
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }

  cambiarEstadoDetalle(){
    if(this.pokemonSeleccionado){
      this.detalle=!this.detalle;
      console.log(this.detalle);
    }
    
  }
  

}
