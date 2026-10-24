import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

const problems = [
    { id: 1, title: 'QR Code Generator', path: '/qr-code' },
    { id:2, title: 'Blog Preview Card', path:'/blog-card'},
    { id:3, title: 'Social Link', path:'/social-link'}
   
];

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Web Practice Problems</h1>

            <div className="problem-list">
                {problems.map((problem) => (
                    <Link
                        to={problem.path}
                        className="problem-card"
                        key={problem.id}
                    >
                        <div className="problem-number">
                            {String(problem.id).padStart(2, '0')}
                        </div>

                        <div className="problem-info">
                            <h2>{problem.title}</h2>
                        </div>

                        <span className="problem-arrow">→</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}