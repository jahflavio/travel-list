// Array que contiene los elementos iniciales para la lista de viaje
// Cada objeto tiene: id (identificador único), description (nombre del artículo),
// quantity (cantidad necesaria) y packed (si ya está empacado o no)
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

// Componente principal de la aplicación React
// Este es el punto de entrada de la aplicación
export default function App() {
  // Retorna la estructura principal de la aplicación
  // Contiene todos los componentes principales organizados en un div
  return (
    <div className="app">
      {' '}
      {/* Contenedor principal con clase CSS 'app' */}
      <Logo />{' '}
      {/* Componente que muestra el encabezado con el nombre de la aplicación */}
      <Form />{' '}
      {/* Componente que permite añadir nuevos artículos a la lista */}
      <PackingList />{' '}
      {/* Componente que renderiza la lista de artículos */}
      <Stats />{' '}
      {/* Componente que muestra estadísticas sobre los artículos empacados */}
    </div>
  );
}

// Componente que renderiza el encabezado/logo de la aplicación
// Muestra un título con emojis que representan el propósito de la app
function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>; // Título con emojis de isla y maleta
}

// Componente que maneja el formulario para añadir nuevos artículos
// Permite al usuario ingresar artículos que necesita para su viaje
function Form() {
  // Función que maneja el evento de envío del formulario
  // Previene el comportamiento por defecto de recargar la página
  function handleSubmit(e) {
    e.preventDefault(); // Evita que el formulario recargue la página al ser enviado
  }

  return (
    // Formulario con evento onSubmit que llama a handleSubmit
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>{' '}
      {/* Pregunta al usuario qué necesita para su viaje */}
      {/* Selector desplegable que permite elegir la cantidad de artículos */}
      {/* Genera 20 opciones (del 1 al 20) usando Array.from y map */}
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {' '}
            {/* Cada opción tiene un valor numérico */}
            {num}{' '}
            {/* El texto mostrado es el número correspondiente */}
          </option>
        ))}
      </select>
      {/* Campo de texto para que el usuario ingrese el nombre del artículo */}
      <input type="text" placeholder="Item..." />
      {/* Botón para enviar el formulario y añadir el artículo */}
      <button>Add</button>
    </form>
  );
}

// Componente que renderiza la lista completa de artículos
// Toma los artículos de initialItems y los convierte en componentes Item
function PackingList() {
  return (
    <div className="list">
      {' '}
      {/* Contenedor con clase CSS 'list' */}
      <ul>
        {' '}
        {/* Lista no ordenada que contendrá los artículos */}
        {/* Mapea cada artículo en initialItems a un componente Item */}
        {initialItems.map((item) => (
          // Pasa el artículo como prop y usa su id como clave única
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

// Componente que representa un solo artículo en la lista
// Recibe un objeto item como propiedad y lo renderiza
function Item({ item }) {
  return (
    <li>
      {' '}
      {/* Elemento de lista para un artículo individual */}
      {/* Span que contiene la cantidad y descripción del artículo */}
      {/* Si el artículo está empacado, se aplica estilo de texto tachado */}
      <span
        style={item.packed ? { textDecoration: 'line-through' } : {}} // Aplica línea tachada si está empacado
      >
        {/* Muestra la cantidad seguida de la descripción del artículo */}
        {item.quantity} {item.description}
      </span>
      {/* Botón con emoji de X para eliminar el artículo */}
      <button>✖️</button>
    </li>
  );
}

// Componente que muestra estadísticas sobre los artículos
// Actualmente es un placeholder que mostrará información sobre artículos empacados
function Stats() {
  return (
    <footer className="stats">
      {' '}
      {/* Pie de página con clase CSS 'stats' */}
      <em>
        {' '}
        {/* Texto en cursiva que contendrá las estadísticas */}
        🎒 You have X items on your list, and you already packed X
        (X%){' '}
        {/* Mensaje placeholder - se actualizará dinámicamente con números reales */}
      </em>
    </footer>
  );
}
