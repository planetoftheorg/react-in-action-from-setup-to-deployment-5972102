import "./Nav.css";

function Nav({ cast, onChoice }) {
  return (
    <nav className="container">
      <ul>
        <li>
          <details className="dropdown">
            <summary>
              Cast
            </summary>
            <ul>
              {cast.map(member => (
                <li key={member.id}>
                  <a href="#" onClick={() => { onChoice(member) }}
                    data-tooltip={member.name}>{member.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo" /></a></li>
      </ul>
    </nav>
  )
}

export default Nav;