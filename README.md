# Nombre del Proyecto

Desarrollo de pequeño ecommerce de telefonos moviles.

## Características

- Arquitectura del proyecto: Baser Components Arquitecture
- React, Next, Scss, React Context, jest, react testing library.
- La estructura del proyecto:

/context: Aquí ubicamos los ficheros necesarios para la configuracion de los contextos usados en la App.

/features: Dentro de feature agrupamos la logica de la app segun su funcion en este caso la subdividimos en 3 (cart, layout, products, search). Cada feature contiene un conjunto de carpetas para organizar los datos necesarios y tenerlo organizado por el entorno. (Components, hooks, test, types)

/lib: Carpeta para configuraciones basicas del proyecto, react-query, apiClient, etc.

/pages: Contiene las paginas principales de la app.
/public: Assets generales
/styles: Para este proyecto he utilizado scss ya que utilizando BEM me permitio mantener una organizacion del codigo por componentes. 

## Instalación

Instrucciones sobre cómo instalar y configurar el proyecto.

```bash
# Clona el repositorio
git clone https://github.com/usuario/nombre-del-repo.git

# Navega a la carpeta del proyecto
cd ecommerce-challenge

# Instala las dependencias
npm install

# Ejecuta el proyecto

npm run dev

------------------------------------

# Para ejecutar los test de los componentes

npm run test

