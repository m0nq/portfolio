import Image from 'next/image';

import './skills.styles.css';
import abstractBuildingImage from '@public/abstract-building.webp';

export const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-content">
                    <aside className="skill-list">
                        <h3>Technical</h3>
                        <ul data-testid="technical-skills-list">
                            <li>JavaScript/TypeScript</li>
                            <li>React</li>
                            <li>GatsbyJS</li>
                            <li>Next.js</li>
                            <li>Jest</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TailwindCSS</li>
                            <li>Node.js</li>
                        </ul>
                    </aside>
                    <span className="skills-span">X</span>
                    <aside className="skill-list">
                        <h3>Soft</h3>
                        <ul data-testid="soft-skills-list">
                            <li>Clear Communication</li>
                            <li>Time Management</li>
                            <li>Attention to detail</li>
                            <li>Problem Solving</li>
                            <li>Creativity</li>
                            <li>Leadership</li>
                            <li>Adaptive Learning</li>
                        </ul>
                    </aside>
                </div>
            </div>
            <Image src={abstractBuildingImage}
                alt="Abstract building"
                className="skills-image" />
        </>
    );
};
