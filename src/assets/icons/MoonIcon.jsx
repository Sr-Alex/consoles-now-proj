import PropTypes from "prop-types";

function MoonIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className={className}
    >
      <g id="surface1">
        <path
          fill="parentColor"
          stroke="parentColor"
          d="M 10.425781 2.925781 C 12.425781 2.925781 14.425781 2.925781 16.425781 2.925781 C 16.425781 3.425781 16.425781 3.925781 16.425781 4.425781 C 16.925781 4.425781 17.425781 4.425781 17.925781 4.425781 C 17.925781 4.925781 17.925781 5.425781 17.925781 5.925781 C 18.425781 5.925781 18.925781 5.925781 19.425781 5.925781 C 19.425781 8.925781 19.425781 11.925781 19.425781 14.925781 C 18.925781 14.925781 18.425781 14.925781 17.925781 14.925781 C 17.925781 15.425781 17.925781 15.925781 17.925781 16.425781 C 17.425781 16.425781 16.925781 16.425781 16.425781 16.425781 C 16.425781 16.925781 16.425781 17.425781 16.425781 17.925781 C 15.425781 17.925781 14.425781 17.925781 13.425781 17.925781 C 13.425781 18.425781 13.425781 18.925781 13.425781 19.425781 C 11.925781 19.425781 10.425781 19.425781 8.925781 19.425781 C 8.925781 18.925781 8.925781 18.425781 8.925781 17.925781 C 7.925781 17.925781 6.925781 17.925781 5.925781 17.925781 C 5.925781 17.425781 5.925781 16.925781 5.925781 16.425781 C 5.425781 16.425781 4.925781 16.425781 4.425781 16.425781 C 4.425781 14.925781 4.425781 13.425781 4.425781 11.925781 C 4.925781 11.925781 5.425781 11.925781 5.925781 11.925781 C 5.925781 12.425781 5.925781 12.925781 5.925781 13.425781 C 7.925781 13.425781 9.925781 13.425781 11.925781 13.425781 C 11.925781 12.925781 11.925781 12.425781 11.925781 11.925781 C 12.425781 11.925781 12.925781 11.925781 13.425781 11.925781 C 13.425781 9.925781 13.425781 7.925781 13.425781 5.925781 C 12.925781 5.925781 12.425781 5.925781 11.925781 5.925781 C 11.925781 5.425781 11.925781 4.925781 11.925781 4.425781 C 11.425781 4.425781 10.925781 4.425781 10.425781 4.425781 C 10.425781 3.925781 10.425781 3.425781 10.425781 2.925781 Z M 10.425781 2.925781 "
        />
      </g>
    </svg>
  );
}

MoonIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MoonIcon;