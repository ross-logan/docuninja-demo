import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Smartly</h1>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          end
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/profile" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Profile
        </NavLink>
        
        <NavLink 
          to="/settings" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          Settings
        </NavLink>
      </nav>
    </div>
  )
}
