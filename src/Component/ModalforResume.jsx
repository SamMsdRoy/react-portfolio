import { useState } from "react";
import { Link } from "react-router-dom";

export default function ModalforResume() {
  const [pass, setPass] = useState("");
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(false);
  const [message, setMessage] = useState("Enter Password");

  const handleClick = () => {
    if (pass === "2345") {
      setMessage("Successful");
      setPass("");
      setHidden(false);
      setHidden2(true)
    } else {
      setPass("");
      setHidden(true);
      setMessage("Please enter Correct Password");
    }
  };

  return (
    <div className="modal fade" id="hope" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content text-center">
          <div className="modal-header">
            <div className="modal-title">Resume Download</div>
            <button
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={() => {
                setHidden(true);
                setMessage("Enter Password");
              }}
            ></button>
          </div>
          {!hidden2 && (
            <div className="modal-body text-center">
              <div className="container">{message}</div>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="form-control m-1"
              />
              <button
                className="btn btn-primary btn-sm mt-2"
                onClick={handleClick}
              >
                Enter
              </button>
            </div>
          )}

          {!hidden && (
            <div>
              <div
                id="resume-content"
                className="modal-footer text-center text-success"
                style={{ alignSelf: "center" }}
              >
              
              </div>
              <a
                role="button"
                className="btn btn-outline-success"
                onClick={() => {setHidden(true)
                               setHidden2(false)}}
                href={"/assets/Doc1new_doc1_resume.pdf"}
                download='Myresume.pdf'
              >
                Download PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
