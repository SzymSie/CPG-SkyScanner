function Card({ className, title, onClick = () => {} }) {
  const defaultClassNames = "shadow-md focus:cursor-pointer";
  return (
    <div
      className={`${defaultClassNames} ${className ? className : ""}`}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>Here is some card text.</p>
    </div>
  );
}

export { Card };
