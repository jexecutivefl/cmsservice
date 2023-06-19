
// /components/Typography/index.js

export default function Typography({ children, variant }) {
  const Component = variant; // e.g. "h1", "p", etc.

  return <Component className={variant}>{children}</Component>;
}
