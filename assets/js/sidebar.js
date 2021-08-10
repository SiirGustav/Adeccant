function sidebarURL(contenido) {
    let enfocado = 1
    function obtenerFocusSidebar() {
        console.log(window.location.pathname)
        if (contenido) {
            enfocado = 2
        } else enfocado = 3
        console.log(enfocado)
        return enfocado
    }
}