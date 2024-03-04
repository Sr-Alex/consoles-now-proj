import PropTypes from "prop-types";

function HeartIcon({ className }) {
    return <svg width="24" height="23" viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M22.22 3.2V1.42H21V0H14.22V1.42H12.8V3.2H11.2V1.42H9.6V0H3V1.42H1.6V3.2H0V9.6H1.6V12.8H3V14.58H4.6V16.2H6.4V17.6H8V19.2H9.6V20.8H11.2V22.4H12.8V20.8H14.22V19.2H16V17.6H17.78V16.2H19.2V14.6H21V12.8H22.24V9.6H24V3.2H22.22ZM8 3.2H4.8V9.42H3V3.2H4.8V1.42H8V3.2Z" fill="parentColor" stroke="parentColor"/>
</svg>
}

HeartIcon.propTypes = {
    className: PropTypes.string.isRequired
}

export default HeartIcon;