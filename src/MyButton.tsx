import classes from "./MyButtonStyle.module.css";

console.log(classes);

export const MyButton: React.FC = () => {
  return (
    <button className={classes["fade-out-on-hover"]}>Hover to trigger fade out animation</button>
  );
};
