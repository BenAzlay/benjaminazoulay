interface ProjectLinkProps {
  href: string;
  icon: string;
  label: string;
}

const ProjectLink = ({ href, icon, label }: ProjectLinkProps) => {
  return (
    <a
      className="bullet-link"
      href={href}
      target="_blank"
      draggable={true} // Avoid opening while grabbing
    >
      <span>{icon}</span>
      <span className="label">{label}</span>
    </a>
  );
};

export default ProjectLink;
