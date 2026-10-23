
import React from 'react';
import '../styles/BlogCard.css';
import blogImage from '../assets/blog.png';

export default function BlogCard() {
    return (
        <div className="blog-container">
            <div className="card">
                <img src={blogImage} alt="HTML and CSS" />
                <p>Learning</p>
                <p>Published DEC 2026</p>
                <h1>HTML & CSS Foundations</h1>
                <p>
                    HTML and CSS are the two foundational core
                    technologies used to build web pages.
                </p>
            </div>
        </div>
    );
}
 