import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      {...props}
      className="rounded-md bg-slate-500 text-white px-4 py-2 font-medium"
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
