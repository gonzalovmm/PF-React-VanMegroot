#Proyecto Final de React de CoderHouse
Esta aplicación le brinda a los usuarios la experiencia de poder organizar sus comidas semanalmente, seleccionando una variedad de productos y poder ordenarlos con anticipación. Soy Gonzalo Van Megroot y les presento mi proyecto MDZ viandas
## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso de la App](#uso)
3. [Características principales](#características)
4. [Tecnologías Implementadas](#tecnologías-utilizadas)
5. [Componentes](#componentes)
    - [App](#app)
    - [NavBar](#navbar)
    - [Header](#header)
    - [Main](#main)
    - [Footer](#footer)
    - [Cart](#cart)
    - [CartContext](#cartcontext)
    - [Checkout](#checkout)
    - [Item](#item)
    - [ItemList](#itemlist)
    - [ItemListContainer](#itemlistcontainer)
    - [ItemDetail](#itemdetail)
    - [ItemDetailContainer](#itemdetailcontainer)
6. [Deploy](#deploy)
7. [Capturas de imágenes](#capturas-de-imágenes)

## Instalación

1. Clona este repositorio: `git clone https://github.com/gonzalovmm/PF-React-VanMegroot`
2. Ve al directorio del proyecto: `cd PF-React-VanMegroot`
3. Instale las dependencias: `npm install`
4. Inicie la aplicación: `npm run dev`

## Uso de la App

¡Organiza tus viandas en pocos pasos!
-Navega: Menú principal (Inicio, Principales, Postres, Veganos, Carrito, Perfil).
-Selecciona: Categorías, filtros, detalles de productos.
-Carrito: Revisa, modifica, elimina, calcula total.
-Ordenar: Ingresar datos, revisar pedidos, confirmar

## Características principales

1. Filtrado intuitivo: encontrar productos con facilidad, filtrar por categoría
2. Carrito interactivo: agregar, modificar, eliminar productos con un solo clic. Visualizar tu pedido en detalle
3. Gestion de pedidos con Firebase: datos y pedidos protegidos en la nube. Registra y analiza historial de ventas.

## Tecnologías Implementadas
- [React](https://reactjs.org/): Biblioteca de JavaScript para crear interfaces de usuario dinámicas e interactivas.
- [React Router](https://reactrouter.com/): Enrutador para aplicaciones React que facilita la navegación entre diferentes páginas.
- [Firebase](https://firebase.google.com/): Plataforma de desarrollo de aplicaciones que ofrece herramientas para crear, almacenar datos y escalar aplicaciones web y móviles.
- [Ant Design](https://ant.design/): Biblioteca de componentes de interfaz de usuario para React que ofrece una amplia gama de componentes listos para usar.
- [Sass](https://sass-lang.com/): Preprocesador CSS que extiende la funcionalidad de CSS con variables, anidamiento y mixins.
- [Tailwind CSS](https://tailwindcss.com/): Marco de trabajo CSS utilitario que permite construir rápidamente interfaces de usuario personalizadas.

## Componentes

### App
Componente principal de la aplicación, gestiona la navegación entre páginas usando React Router.

### NavBar
Es la barra de navegación superior, la cual contiene enlaces a categorías e incluye un icono de carrito de compras conectado a `CartWidget`.

### Header
Desempeña el papel de contenedor del componente `NavBar`.

### Main 
Actúa como contenedor principal ya que alberga todos los componentes que representan la funcionalidad principal, exceptuando el `Footer`

### Footer
Se posiciona en la parte inferior de la aplicación, brindando un cierre elegante y completo a la interfaz.

### Cart
Este componente entra en juego en el proceso de compra, centralizando la gestión y visualización de los productos seleccionados
- **Gestión de Carrito**: Utiliza el contexto de`CartContext` para acceder al estado del carrito, incluidos los productos agregados, la cantidad total y el precio total, junto con algunas funciones como agregar productos, eliminar productos y vaciar carrito.
- **Renderizado Condicional**: Muestra los productos en el carrito utilizando el componente `CartItem`. Si el carrito está vacío, muestra un mensaje indicando que el carrito está vacío y un enlace para volver a la tienda.
- **Acciones de Carrito**: Permite al usuario eliminar productos del carrito y proceder al proceso de pago con el botón "Confirmar compra".

### CartContext
Gestiona el estado del carrito de compras en toda la aplicación, permitiendo que diferentes componentes accedan y modifiquen la información del carrito de manera sincronizada.
- **Contexto de Carrito**: Utiliza el contexto de React para compartir el estado del carrito entre componentes en diferentes partes de la aplicación.
- **Estado del Carrito**: Utiliza el estado local para almacenar la lista de productos en el carrito, la cantidad total de productos y el precio total de la compra.
- **Funciones de Carrito**: Proporciona funciones para agregar, eliminar y vaciar elementos del carrito. Además, verifica si un producto ya está en el carrito antes de agregarlo nuevamente.

### Checkout
Se presenta como la última etapa del proceso de compra, guiando al usuario para completar la adquisición de los productos seleccionados en su carrito.

### Item
Se presenta como la pieza fundamental para construir listas de contenido de manera organizada y reutilizable.

### ItemList
Actúa como el arquitecto de las listas de contenido, ensamblando y organizando múltiples componentes `Item` para presentar una colección completa y coherente.

### ItemListContainer
Este componente muestra una lista de productos disponibles para la venta. A continuación se describen sus características principales:
- **Consulta a Firebase**: Utiliza Firebase para obtenerlos datos de los productos desde una colección en la base de datos. Dependiendo del parámetro de URL `marca`, se filtran los productos por marca.
- **Gestión de Estado**: Utiliza el estado local para almacenar la lista de productos y el estado de carga. Muestra un indicador de carga (Loading) mientras se obtienen los datos de Firebase.
- **Renderizado Condicional**: Muestra la lista de productos utilizando el componente `ItemList` cuando los datos están disponibles, o muestra un componente de carga mientras se cargan los datos.

### ItemDetailContainer
Este componente muestra los detalles de un producto específico. Recibe un `itemId` como parámetro de URL y muestra la información detallada del producto, como su nombre, precio y descripción

### ItemDetail
Permite al usuario profundizar en la información específica de cada elemento de la lista.


## Deploy
Se ha utilizado el repositorio de Vercel para realizar el Deploy del Proyecto y poder visualizar la App.
**`Link al Deploy:`**
[Proyecto Final React MDZ Viandas](https://mdz-viandas-van-megroot.vercel.app/)

### Capturas imágenes

#### Pantalla Principal
![Captura Home](/public/Capturas/PantallaPrincipal.png)

#### Detalle de producto seleccionado
![Captura Detalle](/public/Capturas/Detalle.png)

#### Detalle carrito 
![Captura Carrito](/public/Capturas/Detalle%20Carrito.png)

#### Checkout
![Captura Checkout](/public/Capturas/Checkout.png)

#### Compra Finalizada
![Compra Finalizada](/public/Capturas/Confirmacion%20de%20compra.png)


