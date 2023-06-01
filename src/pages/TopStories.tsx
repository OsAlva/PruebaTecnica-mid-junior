import {Link } from 'wouter';


export default function TopStories() {
    return (
        <div>
            <h1>Top Stories</h1>
            <Link to="/article/:id">Article 1</Link>    
        </div>
    )

}