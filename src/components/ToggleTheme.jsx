import { useState, useEffect } from 'react';

const LightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2} style={{ color: 'black' }}>
    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
  </svg>
);

const DarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2} style={{ color: 'white' }}>
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
    <path d="M19 11h2m-1 -1v2"></path>
  </svg>
);

const AutoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2} style={{ color: 'gray' }}>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M12 3l0 18"></path>
    <path d="M12 9l4.65 -4.65"></path>
    <path d="M12 14.3l7.37 -7.37"></path>
    <path d="M12 19.6l8.85 -8.85"></path>
  </svg>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState('auto');

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'auto') {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      root.setAttribute('data-theme', prefersDarkScheme.matches ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
      case 'auto':
        newTheme = 'light';
        break;
      case 'light':
        newTheme = 'dark';
        break;
      case 'dark':
      default:
        newTheme = 'auto';
        break;
    }
    setTheme(newTheme);
  };

  const renderIcon = () => {
    switch (theme) {
      case 'auto':
        return <AutoIcon />;
      case 'light':
        return <LightIcon />;
      case 'dark':
      default:
        return <DarkIcon />;
    }
  };

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      {renderIcon()}
    </div>
  );
};

export default ThemeToggle;