import PropTypes from "prop-types";

export const FlexBox = ({ direction, justify, align, children, ...props }) => (
 <div
  style={{
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  }}
  {...props}
 >
   {children}
 </div>
);

FlexBox.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'center', 'flex-end', 'baseline']),
  children: PropTypes.node.isRequired,
};