import projectsData from "./../assets/gitcommands.json"; // Import JSON data

const GitCommand = () => {
  const projects = projectsData.projects; // Access the projects array from the imported JSON

  return (
    <div>
      <div>
        portfolio@Siddharth-Chhatbar: ~/programming$ Github:{" "}
        <a
          href="https://github.com/Siddharth-Chhatbar"
          className="font-extrabold underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Siddharth-Chhatbar
        </a>
      </div>
      {projects.length > 0 ? (
        <ul className="ml-4">
          {projects.map((project, index) => (
            <li className="list-disc ml-4">
              <div key={index} className="mb-4">
                <h2 className="text-xl font-extrabold">
                  {project.title}{" "}
                  <a
                    href={project.link}
                    className="font-extrabold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    src
                  </a>
                </h2>
                <p className="ml-8 w-3/4">{project.description}</p>
                <p className="mt-2 ml-8">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <p className="mt-2 ml-8 w-3/4">{project.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Fetching projects... Description of projects.</div>
      )}
    </div>
  );
};

export default GitCommand;
