import ToggleTheme from './ToggleTheme';

function Nav({ cast, onChoice }) {
  return (
    <nav className="container">
      <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo" /></a></li>
        <li><strong>Stargazers</strong></li>
      </ul>
      <ul>
        <li><ToggleTheme /></li>
        <li>
          <details className="dropdown" ref={(el) => {
            if (el) el.addEventListener('toggle', () => el.blur());
          }}>
            <summary>Cast</summary>
            <ul dir="rtl">
              {cast.map(member => (
                <li key={member.id}>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    onChoice(member);
                    e.target.closest('details').removeAttribute('open');
                  }}>{member.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;