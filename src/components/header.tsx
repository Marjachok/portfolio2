import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';


export function Header() {
  const smoothScrollTo = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 900,  // Adjust the duration as desired
      delay: 0,
      smooth: 'easeInOutQuart',  // Adjust the animation easing
    });
  };


  return (
    <div className="header">
      <p className="header_1"><Link to="/home">Home</Link></p>
      <p className="header_2"><a href="#about" onClick={() => smoothScrollTo('about')}>About me</a></p>
      <p className="header_3"><a href="#skills" onClick={() => smoothScrollTo('skills')}>Skills</a></p>
      <p className="header_4"><Link to="/projects">Projects</Link></p>
      <p className="header_5"><Link to="/contact">Contact</Link></p>
    </div>
  );
}
