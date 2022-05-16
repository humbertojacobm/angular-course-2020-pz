//ngModule: te permite poder incluir componentes, pipes, directivas
//   servicios, redux y otros modulos.

//se debe modularizar la aplicación por dominio.


// puedes distribuir la aplicación por componente si quires
// pero debes considerar la novenclatura.

//about-us / contact / footer

//modules especiales

// core:
    // guarda todos los servicios que se van a usar en componentes de todos los modules.
    // singleton, solo una referencia en todo el proyecto.

// shared
   // se guarda aquellos componentes que se van a reutilizar en mas de un modulo, se usa
   // para no replicar el componente en otro modulo.