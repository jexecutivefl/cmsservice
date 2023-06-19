
export default function Button({ children, onClick, variant }) {
  const styles = {
    primary: "primary-button",
    secondary: "secondary-button",
    // Add more styles as needed
  };

  return (
   <button onClick={onClick} className={styles[variant]}>
     {children}
   </button>
  );
}
