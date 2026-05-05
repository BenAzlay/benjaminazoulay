interface ProjectLinkProps {
  href: string;
  label: string;
  color: string;
}

const ProjectLink = ({ href, label, color }: ProjectLinkProps) => {
  return (
    <a
      className="bullet-link"
      href={href}
      target="_blank"
      draggable={true} // Avoid opening while grabbing
      style={{ "--link-color": color } as React.CSSProperties}
    >
      {label}
    </a>
  );
};

export default ProjectLink;
