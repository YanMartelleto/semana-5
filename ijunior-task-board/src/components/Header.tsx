import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className = {"flex justify-center py-8 flex-col px-10 gap-10"}> 
      <h1 className = "text-9xl font-serif flex justify-center"> iRepair</h1>
      <nav className="flex justify-around">
        <Link to="/">Dashboard</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/service-orders">Ordens de serviço</Link>
      </nav>
      
    </header>
  );
}