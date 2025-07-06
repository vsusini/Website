import male from '/male.png'
import github from '/github.png'
import linkedin from '/linkedin.png'
import email from '/email.png'

export default function Footer() {
  return (
    <footer>
      <div className="footerTitle">
        <div className="title">
          <p className="script">
            <span className="spanGrey"><strong>Feel free to contact me</strong></span>
          </p>
        </div>
      </div>
      <div className="footerDesc">
        Send me an{' '}
        <span className="mainLink">
          <a className="footerLinkHelper first after" target="_blank" href="mailto:vmsusini@gmail.com" aria-label="Send email to Vincent Susini">
            Email
          </a>
        </span>{' '}
        with any questions you may have!
        <img src={male} alt="Face" className="emojiFooter" />
      </div>
      <div className="social">
        <a href="https://github.com/vsusini" rel="noopener noreferrer" target="_blank" className="bottomImgLink" aria-label="Visit Vincent Susini's GitHub profile">
          <img src={github} alt="Github Logo" width="100%" height="100%" />
        </a>
        <a href="https://www.linkedin.com/in/vincenzo-vincent-susini-276405148/" rel="noopener noreferrer" target="_blank" className="bottomImgLink" aria-label="Visit Vincent Susini's LinkedIn profile">
          <img src={linkedin} alt="LinkedIn Logo" width="100%" height="100%" />
        </a>
        <a href="mailto:vmsusini@gmail.com" target="_blank" className="bottomImgLink" aria-label="Send email to Vincent Susini">
          <img src={email} alt="Email Logo" width="100%" height="100%" />
        </a>
      </div>
      <div className="loveContainer">
        <span className="withLove">
          Made with <span className="heart pulse">❤</span> by{' '}
          <span className="mainLink">
            <a className="smallerName first after" href="https://www.vsusini.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Vincent Susini's website">
              Vincent Susini
            </a>
          </span>
        </span>
      </div>
    </footer>
  )
}