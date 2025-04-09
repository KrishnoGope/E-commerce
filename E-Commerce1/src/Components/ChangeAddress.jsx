import { useState } from "react";
import PropTypes from "prop-types";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setAddress(newAddress);
    setIsModelOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-2 w-full mb-4 rounded"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

ChangeAddress.propTypes = {
  setAddress: PropTypes.func.isRequired,
  setIsModelOpen: PropTypes.func.isRequired,
};

export default ChangeAddress;