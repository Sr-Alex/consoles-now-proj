import PropTypes from "prop-types";

function NotifyIcon({ className }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 1V2H7H6V3V4H5H4V9V14H3H2V17V20H5H8V21V22H9H10V23V24H12H14V23V22H15H16V21V20H19H22V17V14H21H20V9V4H19H18V3V2H17H16V1V0H12H8V1Z"
        fill="parentColor"
        stroke="parentColor"
      />
    </svg>
  );
}

NotifyIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NotifyIcon;
