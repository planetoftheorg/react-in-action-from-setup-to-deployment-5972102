function Modals({ member, handleClose }) {
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
        </article>
      </dialog>
    )
  )
}

export default Modals;