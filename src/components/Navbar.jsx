import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = ({ textColor = '#ffffff', mobileWhite = false }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollThreshold = 100;
  const showThreshold = 900;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > scrollThreshold && window.scrollY > lastScrollY && !isMenuOpen) {
        setVisible(false);
      } else if (
        window.scrollY <= scrollThreshold ||
        (window.scrollY < lastScrollY && window.scrollY > showThreshold) ||
        isMenuOpen
      ) {
        setVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const effectiveTextColor = mobileWhite && isMobile ? '#ffffff' : textColor;

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full ${
        visible ? 'block' : 'hidden'
      }`}
    >
      {/* Mobil */}
      <div className="md:hidden">
        {!isMenuOpen ? (
          <div
            className="mt-5 flex h-12 w-full items-center justify-end px-4"
            style={{ color: effectiveTextColor }}
          >
            <button
              onClick={toggleMenu}
              aria-label="Åpne meny"
              className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1"
            >
              <span className="block h-0.5 w-6 bg-current transition-all"></span>
              <span className="block h-0.5 w-6 bg-current transition-all"></span>
              <span className="block h-0.5 w-6 bg-current transition-all"></span>
            </button>
          </div>
        ) : (
          <div className="w-full backdrop-blur bg-orange-500/70 px-6 pb-8 pt-4 text-white">
            <div className="flex items-start justify-end">
              <a
                  href="/"
                  aria-label="Realfagskjelleren logo"
                  className="absolute left-1/2 -translate-x-1/2 items-center justify-center"
                >
                <Logo className="h-14 w-auto" />
              </a>
              <button
                onClick={closeMenu}
                aria-label="Lukk meny"
                className="relative flex h-10 w-10 items-center justify-center"
              >
                <span className="absolute block h-0.5 w-6 rotate-45 bg-current"></span>
                <span className="absolute block h-0.5 w-6 -rotate-45 bg-current"></span>
              </button>
            </div>

            <div className="flex flex-col gap-4 text-base font-semibold">
              <a href="/pictureWall" onClick={closeMenu}>
                Bildevegg
              </a>
              <a href="/omOss" onClick={closeMenu}>
                Om oss
              </a>
              <a href="/menu" onClick={closeMenu}>
                Meny
              </a>
              <a href="/events" onClick={closeMenu}>
                Arrangementer
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div
        className="mx-auto hidden h-24 items-center justify-center px-6 md:flex"
        style={{ color: effectiveTextColor }}
      >
        <div className="flex items-center gap-8 text-xl">
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
      </div>
    </nav>
  );
};

export default Navbar;