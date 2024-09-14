const Schedule = () => {
    const ISSUES = [
      "Componentes funcionales y de clase.",
      "Uso de React hooks como useState y useEffect.",
      "Creación de custom hooks como useForm.",
      "Gestión de variables de estado con useState.",
      "Gestión de estado global con Redux.",
      "Integración de Redux con React.",
      "Manejo de Formularios en React.",
      "Publicando nuestra página con GitHub Pages.",
    ];
  
    return (
      <table>
        <thead>
          <tr>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          {ISSUES.map((issue, index) => (
            <tr key={index}>
              <td>{issue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Schedule;
  