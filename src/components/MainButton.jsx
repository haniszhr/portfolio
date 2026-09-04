export default function MainButton({
  text,
  type = "button",
  onClick,
  icon,
  iconPosition = "left",
  className = "",
}) {
  return (
    <>
      <button
        type={type}
        className={`main-button ${className}`}
        onClick={onClick}
      >
        {" "}
        {iconPosition === "left" && icon && <img src={icon} alt="" />}
        {text}
        {iconPosition === "right" && icon && <img src={icon} alt="" />}
      </button>
    </>
  );
}
