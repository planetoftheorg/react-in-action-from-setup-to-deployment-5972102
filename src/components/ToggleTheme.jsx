import { useState, useEffect } from "react";

function ToggleTheme() {
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
        newTheme = 'auto';
        break;
    }
    setTheme(newTheme);
  }

  const renderText = () => {
    switch (theme) {
      case 'auto':
        return 'A';
      case 'light':
        return 'L';
      case 'dark':
        return 'D';
    }
  }

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>{renderText()}</div>
  )
}

export default ToggleTheme;