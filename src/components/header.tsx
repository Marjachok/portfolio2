import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="header">
      <p className="header_1"><Link to="/home">Home</Link></p>
      <p className="header_2"><Link to="/projects">Projects</Link></p>
      <p className="header_3">Contact</p>
    </div>
  );
}
