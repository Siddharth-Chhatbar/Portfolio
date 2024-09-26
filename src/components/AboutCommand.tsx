const AboutCommand = () => {
  return (
    <div className="pb-2">
      <div className="flex flex-row gap-4">
        <div>portfolio@Siddharth-Chhatbar: ~/programming$</div>
        <div>About Me:</div>
      </div>
      <div className="p-4 flex flex-row gap-4">
        <div className="h-3/4 w-3/4">
          <img
            src="./ascii_art_1.svg"
            alt="Photo"
            height="100%"
            width="100%"
            className="mt-1 h-full w-full"
          />
          {/*  https://svg-cropper.com/*/}
        </div>
        <div>
          <h1>Hey I'm Siddharth!</h1>
          <p className="w-4/5">
            I'm a Full Stack Developer with a Bachelor's degree in Computing
            Science and Minor in Mathematics from the University of Alberta.
            Proficient in modern web development technologies, including
            ReactJS, Tailwind CSS, Django, TypeScript, Figma, Python, SQL, and
            NoSQL databases.
          </p>
          <h2 className="font-extrabold mt-4">Skills and Experience:</h2>
          <ul className="w-3/4 list-disc ml-8">
            <li>
              <p>
                <b>Full Stack Development: </b>Experienced in designing,
                developing, and maintaining robust web applications.
              </p>
            </li>
            <li>
              <p>
                <b>Frontend: </b>Deep understanding of ReactJS, Tailwind CSS,
                and Figma for creating visually appealing and interactive user
                interfaces.
              </p>
            </li>
            <li>
              <p>
                <b>Backend: </b>Solid foundation in Django and Python for
                building scalable and efficient server-side applications.
              </p>
            </li>
            <li>
              <p>
                <b>Programming Languages: </b>Proficiency in TypeScript, C, C++,
                Python for versatile problem-solving.
              </p>
            </li>
            <li>
              <p>
                <b>Robotics and Algorithms: </b>Experience with ROS and search
                algorithms for developing autonomous systems.
              </p>
            </li>
            <li>
              <p>
                <b>DevOps: </b>Familiarity with Docker containers and GitHub
                Actions for efficient CI/CD and TDD.
              </p>
            </li>
            <li>
              <p>
                <b>Theoretical Foundations: </b>Strong understanding of linear
                programming, operating system concepts, and mathematical
                principles.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCommand;
