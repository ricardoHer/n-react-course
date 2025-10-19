import PropTypes from "prop-types";

function SmallButton({ onClick, children }) {
  return (
    <button
      onClick={() => onClick()}
      className="bg-slate-400 rounded-md p-2 text-white"
    >
      {children}
    </button>
  );
}

SmallButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default SmallButton;
