import Link from 'next/link';
import moment from 'moment';

import './about.styles.css';

export const About = () => {
    return (
        <div className="about-container">
            <div>
                <p>
                    With over {moment().year() - 2017} years of experience in the software industry, I have a passion
                    for bringing ideas to life with understanding various requirements according to the latest trends.
                </p>
                <p>
                    I started my career at <Link href="https://www.industriallogic.com/" target="_blank">
                    Industrial Logic</Link> where I learned the ropes of Extreme Programming and how to build
                    software that&apos;s robust and maintainable with agile methodologies. Working with <Link
                    href="https://www.ford.com/" target="_blank">Ford Motors</Link> I had the opportunity to
                    collaborate across multiple teams. There, I contributed to the development of a high-functioning,
                    user-focused website that streamlined the process for customers to find the right car configuration.
                    <br />
                    <br />
                    At <Link href="https://reflexion.com/" target="_blank">RefleXion Medical</Link>, I dedicated several
                    years to creating an intuitive Electron based user interface that allowed doctors to interact
                    seamlessly with cutting-edge cancer treatment and research tech. This experience deepened my
                    appreciation for the transformative power of technology.
                </p>
                <p>
                    I grew to love the creative process having been a dancer at a young age, and that ability to inspire
                    both intellectual and emotional growth through that process. I&apos;m an advocate for
                    self-empowerment, and believe that anyone – given the right tools, opportunities, and support – can
                    cultivate their own unique creative spark. Web technology tools offer a particularly powerful canvas
                    for reaching people, making connections, and bringing new ideas to life.
                    <br />
                    <br />
                    Throughout my experiences, I cultivated a versatile skill set that allows me to
                    approach projects with a user-centric mindset, translating empathy to code. This dedication to
                    exceeding expectations is fueled by a desire to merge a keen eye for detail with creative
                    intuition.
                </p>
                <p>
                    I&apos;m open to projects that utilize my expertise of HTML, CSS, and JavaScript, along with the
                    React/Next.js library and it&apos;s ecosystem for creating beautiful websites and performant
                    applications.
                </p>
                <br />
                <ul>
                    <li>
                        <span className="strong-emphasis">Small Businesses and Non-Profits:</span> I&apos;m passionate
                        about supporting organizations with a positive social impact. I believe my skill set can help
                        you achieve your goals and mission.
                    </li>
                    <li>
                        <span className="strong-emphasis">Creative Industries:</span> Having a background in
                        a creative field myself, I understand the needs of artists and creators. I&apos;m eager
                        to connect with you about opportunities for collaboration, developing tools and platforms that
                        will showcase your work and help you connect with your audience.
                    </li>
                    <li>
                        <span className="strong-emphasis">Green Tech Companies:</span> Our environment is our life, and
                        would love to contribute to a more sustainable future. I&apos;m keen to work on projects that
                        develop climate-focused solutions with forward thinking companies.
                    </li>
                </ul>
            </div>
        </div>
    );
};
