import { useNavigate, useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn btn-block uppercase"
      disabled={isSubmit}
    >
      {isSubmit ? (
        <>
          <span className="loading loading-spinner"></span>
          ...sending
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};

export default SubmitBtn;
