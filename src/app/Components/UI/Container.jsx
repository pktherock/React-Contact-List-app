import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="mx-10 my-4">{children}</div>;
}
Container.propTypes = {
  children: PropTypes.any,
};
export default Container;
