function Modals({ member, handleClose, handleChange }) {
  return (
    (member &&
      <dialog open>
        <article>
          <header style={{ height: '2.4rem' }}>
            <button
              aria-label="close"
              rel="prev"
              onClick={handleClose}
            ></button>
          </header>
          <hgroup>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <img style={{ width: '200px' }} src={`images/${member.slug}.svg`} alt={member.name} />
              <hgroup>
                <h1>{member.name}</h1>
                <p>{member.bio}</p>
              </hgroup>
            </div>
          </hgroup>
          <footer style={{display: 'flex', justifyContent: 'space-between'}}>
            <a href="#" role="button"
              onClick={() => { handleChange(Number(member.id) - 1) }}
            >Prev</a>
            <a href="#" role="button"
              onClick={() => { handleChange(Number(member.id) + 1) }}
            >Next</a>
          </footer>
        </article>
      </dialog>
    )
  )
}

export default Modals;