import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        left: "20px",
        display: "flex",
        gap: "10px",
        zIndex: "9999",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "5px",
          color: "black",
          border: "1px solid black",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "8px" }} />
      </button>

      <button
        onClick={() => navigate(1)}
        style={{
          padding: "5px",
          color: "black",
          border: "1px solid black",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: "8px" }} />
      </button>
    </div>
  );
};

export default NavigationButtons;
