/**
 * Añade una ruta al historial de navegación y fuerza un evento popState para cambiar la vista.
 * El manejo del elemento popState se encuentra en router.initRouter(...).
 * @param {string} route ruta hacia la vista a mostrar en el contenedor de la aplicación.
 */
export const navigateTo = (route) => {
  // pequeño truco tomado de https://stackoverflow.com/a/25829837 hasta una mejor solución
  window.history.pushState(
    {},
    route,
    window.location.origin + route,
  );
  window.history.pushState(
    {},
    route,
    window.location.origin + route,
  );
  window.history.back();
};

// Recargar página actual
export const reload = () => {
  window.location.reload();
};
