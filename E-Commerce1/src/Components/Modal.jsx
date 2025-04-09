import PropTypes from "prop-types";

const Modal = ({isModelOpen, setIsModelOpen, children}) => {
    if(!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={()=>setIsModelOpen(false)}>&times;</button>
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  isModelOpen: PropTypes.bool.isRequired,
  setIsModelOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal