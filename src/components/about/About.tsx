import Link from 'next/link';

export const About = () => {
    return (
        <>
            <div className="about-container">
                <div>
                    <p>
                        Monk started his career at <Link href="https://www.industriallogic.com/">Industrial
                        Logic</Link>, where he learned the ropes of Extreme Programming and how to build
                        software that&apos;s robust and maintainable with agile methodologies. Working
                        with <Link href="https://www.ford.com/">Ford Motors</Link> he had the opportunity to collaborate
                        across multiple teams. There, he contributed to the development of a high-functioning,
                        user-focused website that streamlined the process for customers to find the right car
                        configuration.
                        <br />
                        <br />
                        At <Link href="https://reflexion.com/">RefleXion Medical</Link>, he dedicated
                        several years to creating an intuitive Electron based user interface that allowed doctors to
                        interact seamlessly with cutting-edge cancer treatment and research tech. This experience
                        deepened his appreciation for the transformative power of technology.
                    </p>
                    <br />
                    <p>
                        Growing up as a dancer, Monk has always had a passion for the creative process and its ability
                        to inspire both intellectual and emotional growth. An advocate for self-empowerment, he believes
                        that anyone – given the right tools, opportunities, and support – can cultivate their own unique
                        creative spark. Web technology tools offer a particularly powerful canvas for making connections
                        and bringing innovative ideas to life.
                        <br />
                        <br />
                        Throughout his experiences, he&apos;s cultivated a versatile skill set that allows him to
                        approach projects with a user-centric mindset, translating empathy to code. This dedication to
                        exceeding expectations is fueled by a desire to merge a keen eye for detail with creative
                        intuition.
                    </p>
                    <br />
                    <p>
                        He is open to projects that utilize his expertise of JavaScript and React frameworks like
                        Next.js and Gatsby for creating single/multi page websites and enterprise applications.
                    </p>
                    <br />
                    <ul>
                        <li>
                            <span className="strong-emphasis">Small Businesses and Non-Profits:</span> Monk is
                            passionate about supporting organizations with a positive social impact. He believes his
                            skill set can help them achieve their goals and missions.
                        </li>
                        <li>
                            <span className="strong-emphasis">Creative Industries:</span> Having a background in
                            creative fields himself, Monk understands the needs of artists and creators. He&apos;s eager
                            to create opportunities for collaboration, developing tools and platforms that will showcase
                            their work and help them connect with audiences.
                        </li>
                        <li>
                            <span className="strong-emphasis">Green Tech Companies:</span> Monk is environmentally
                            conscious and seeks to contribute to a more sustainable future. He&apos;s keen to work on
                            projects that develop climate-focused solutions with these forward thinking companies.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
