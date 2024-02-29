import PropTypes from "prop-types";

function SearchIcon({ className }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.2116 14.8272V0H0V16.8627H14.6611L21.7184 24L24 21.6925L17.2116 14.8272ZM13.9844 13.599H3.22718V3.26375H13.9844V13.599ZM6.99222 12.511H4.30291V9.79126H6.99222V12.511Z"
        className="parentColor"
        fill="parentColor"
        stroke="parentColor"
      />
    </svg>
  );
}

SearchIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SearchIcon;
