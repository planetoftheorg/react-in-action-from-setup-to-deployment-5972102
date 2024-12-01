function Modals({ member, handleClose, handleChange }) {
  return (
    <dialog open>
      <article>
        <header>
          <button aria-label="Close" rel="prev" onClick={handleClose}></button>
          <h2 style={{fontSize: '1.3rem'}}>{member.name}</h2>
        </header>
          <div style={{
            display: "flex",
            gap: '1rem',
            fontSize: '.8rem'
          }}>
            <img style={{ width: '200px' }}
              src={`images/${member.slug}.svg`}
              alt={member.name} />
              <p>{member.bio}</p>
        </div>
        <footer>
            <a href="#" role="button"
              onClick={() => { handleChange(Number(member.id) - 1) }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="none" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2}> <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path> </svg> </a>
            {/* https://tablericons.com/icon/arrow-big-left */}
            <a href="#" role="button"
              onClick={() => { handleChange(Number(member.id) + 1) }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="none" strokeLinecap="round" strokeLinejoin="round" width={20} height={20} strokeWidth={2}> <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path> </svg></a>
            {/* https://tablericons.com/icon/arrow-big-right */}
        </footer>
      </article>
    </dialog>
  )
}

export default Modals;