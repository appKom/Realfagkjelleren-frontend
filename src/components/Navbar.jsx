import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = ({ textColor = '#ffffff' }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 100;
  const showThreshold = 900;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > scrollThreshold && window.scrollY > lastScrollY) {
        setVisible(false);
      } else if (
        window.scrollY <= scrollThreshold ||
        (window.scrollY < lastScrollY && window.scrollY > showThreshold)
      ) {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`mt-8 h-24 w-full fixed flex items-center justify-center px-6 bg-transparent ${
        visible ? '' : 'hidden'
      }`}
    >
      <div
        className="mx-auto flex items-center text-xl gap-8"
        style={{ color: textColor }}
      >
        <div className="flex justify-center">
          <h3 className="text-l">
            <a href="/pictureWall">Bildevegg</a>
          </h3>
        </div>

        <div className="flex justify-center">
          <h3 className="text-l">
            <a href="/omOss">Om oss</a>
          </h3>
        </div>

        <div className="flex justify-center">
          <a
            href="/"
            aria-label="Realfagskjelleren logo"
            className="flex items-center justify-center"
          >
            <Logo className="h-14 w-auto" />
          </a>
        </div>

        <div className="flex justify-center">
          <h3 className="text-l">
            <a href="/menu">Meny</a>
          </h3>
        </div>

        <div className="flex justify-center">
          <h3 className="text-l">
            <a href="/events">Arrangementer</a>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;