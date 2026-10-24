
import '../styles/SocialLink.css';
import avatar from '../assets/avatar.png';

export default function SocialLink() {
    return (
        <div className="social-container">
            <div className="social-card">
                <img
                    src={avatar}
                    alt="Profile avatar"
                    className="social-avatar"
                />

                <h1>Jessica Randall</h1>

                <h4>London, United Kingdom</h4>

                <p>"Front-end developer and avid reader."</p>

                <div className="social-btn">
                    <button>GitHub</button>
                    <button>Frontend Mentor</button>
                    <button>LinkedIn</button>
                    <button>Twitter</button>
                    <button>Instagram</button>
                </div>
            </div>
        </div>
    );
}
