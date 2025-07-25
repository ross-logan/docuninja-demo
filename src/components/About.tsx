export default function About() {
  return (
    <div>
      <div className="page-header">
        <h1>About</h1>
        <p>Learn more about this application and its purpose</p>
      </div>
      
      <div className="card">
        <h2>About This Application</h2>
        <p>
          This application demonstrates a modern React-based interface with 
          clean navigation and user-friendly design. Built with TypeScript, 
          React Router, and a beautiful green theme.
        </p>
        
        <h3>Features</h3>
        <ul>
          <li>Clean, intuitive navigation</li>
          <li>Responsive design</li>
          <li>Modern green color theme</li>
          <li>Multiple page sections</li>
        </ul>
        
        <h3>Technology Stack</h3>
        <ul>
          <li>React 18 with TypeScript</li>
          <li>Vite for development and building</li>
          <li>React Router DOM for navigation</li>
          <li>CSS custom properties for theming</li>
        </ul>
      </div>
    </div>
  )
}
