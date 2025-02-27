import ToggleTheme from './ToggleTheme';

function Nav({ cast, onChoice }) {
  return (
    <nav className="container">
      <ul>
        <li><ToggleTheme /></li>
        <li>
          <details className="dropdown">
            <summary>Cast</summary>
            <ul dir="rtl">
              {cast.map(member => (
                <li key={member.id}>
                  <a href="#" onClick={() => { onChoice(member) }}>{member.name}</a>
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
