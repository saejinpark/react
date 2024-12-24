import profilePic from './assets/profile.webp'
import './Card.css'

function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Bro Code</h2>
            <p className='card-text'>I make Youtube videos and play video games</p>
        </div>
    )
}

export default Card