import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FontAwesomeIcon icon={faSpinner} spin size="4x" />
    </div>
  );
};

export default LoadingSpinner;