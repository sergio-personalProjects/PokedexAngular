# Pokedex

## Descripcion general del proyecto

Este proyecto es una Pokedex desarrollada con Angular. La aplicacion permite consultar una lista de Pokemon obtenida desde la PokeAPI y visualizar informacion basica de cada uno de ellos.

La pantalla principal muestra tarjetas de Pokemon cargadas por paginas. Al hacer clic sobre una tarjeta, se selecciona el Pokemon y se muestra su imagen principal. Tambien se puede abrir un panel de detalle con datos adicionales como tipo, altura, peso y descripcion.

El objetivo del proyecto es practicar el consumo de APIs, la comunicacion entre componentes, el uso de servicios en Angular y la construccion de una interfaz visual inspirada en una Pokedex.

## Funcionalidades principales

- Listado de Pokemon obtenido desde una API externa.
- Carga paginada de Pokemon mediante scroll.
- Seleccion de Pokemon desde una tarjeta.
- Visualizacion de imagen del Pokemon seleccionado.
- Panel de detalle con informacion ampliada.
- Consulta de descripcion del Pokemon desde el servicio.
- Componentes reutilizables para tarjetas, foto y detalle.

## Tecnologias y lenguajes utilizados

- Angular
- TypeScript
- HTML
- SCSS
- JavaScript
- PokeAPI
- Node.js y npm

## Estructura principal del proyecto

```text
src/
  app/
    components/
      detalle/
      foto-pokemon/
      tarjeta-pokemon/
    interfaces/
      pokeapi.ts
      pokemon.ts
    pages/
      home/
    services/
      pokemon.service.ts
```

## Componentes principales

### HomeComponent

Componente principal de la pagina. Se encarga de cargar la lista de Pokemon, controlar el scroll, gestionar el Pokemon seleccionado y abrir o cerrar el panel de detalle.

### TarjetaPokemonComponent

Componente reutilizable que representa cada Pokemon dentro del listado. Recibe informacion desde el componente padre y emite eventos cuando el usuario selecciona una tarjeta.

### FotoPokemonComponent

Componente encargado de mostrar la imagen del Pokemon seleccionado.

### DetalleComponent

Componente que muestra informacion ampliada del Pokemon seleccionado, incluyendo tipo, altura, peso y descripcion.

## API utilizada

La aplicacion consume datos desde PokeAPI:

```text
https://pokeapi.co/api/v2/pokemon/
```

## Ejecucion

Ejecutar con Angular CLI:

```bash
ng serve
```

Despues, abrir la aplicacion en el navegador:

```text
http://localhost:4200/
```

## Fuentes originales del proyecto en concreto

### Video de referencia

LINK:

https://www.youtube.com/watch?v=7O3tgK9eLSE

### Repositorio de referencia

GitHub:

https://github.com/cacalo/Pokedex-angular/blob/versi%C3%B3n-en-vivo/src/app/pages/home/home.component.scss
