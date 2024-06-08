
# Sistema de Recursos Humanos

Este proyecto es un sistema de gestión de empleados construido con React y Bootstraps.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
.gitignore
.vscode/
	extensions.json
	settings.json
build/
	asset-manifest.json
	index.html
	manifest.json
	robots.txt
	static/
		js/
			main.0009bddb.js
			main.0009bddb.js.LICENSE.txt
package.json
public/
	index.html
	manifest.json
	robots.txt
src/
	App.js
	empleados/
		AgregarEmpleado.js
		EditarEmpleado.js
		ListadoEmpleados.js
	index.css
	index.js
	plantilla/
		Navegacion.js
```

## Funcionalidades

- Listado de empleados: Muestra un listado de todos los empleados. Implementado en [`ListadoEmpleados.js`](src/empleados/ListadoEmpleados.js).
- Agregar empleado: Permite agregar un nuevo empleado al sistema. Implementado en [`AgregarEmpleado.js`](src/empleados/AgregarEmpleado.js).
- Editar empleado: Permite editar la información de un empleado existente. Implementado en [`EditarEmpleado.js`](src/empleados/EditarEmpleado.js).

## Cómo ejecutar el proyecto

Para ejecutar este proyecto, primero instala las dependencias con:

```sh
npm install
```

Luego, puedes iniciar el servidor de desarrollo con:

```sh
npm run start
```

Para construir el proyecto para producción, puedes usar:

```sh
npm run build
```

## Pruebas

Para ejecutar las pruebas, usa:

```sh
npm run test
```
