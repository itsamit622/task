import { Button, Dropdown, Modal, Form, FormControl } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    console.log("hello");
    setShow(true);
  };
  const handleClose = () => {
    console.log("hello");
    setShow(false);
  };
  return (
    <div>
      <div className="navbars">
        <ul className="navbar2">
          <li className="nav-content2">Task List</li>
          <li className="nav-content2">Send Request</li>
          <li className="nav-content2">Document Status</li>
          <li className="nav-content2">fax</li>
          <li className="nav-content2">Account</li>
        </ul>
      </div>
      <div>
        <span className="task">Task List</span>
        <span className="current">
          Current Context:USCF head and neck surgery
        </span>
      </div>
      <div className="line"></div>
      <div className="container addnew">
        <div className="row">
          <div className="col">
            <Dropdown>
              <span>Sort By</span>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Patient Name
              </Dropdown.Toggle>
            </Dropdown>
          </div>
          <div>
            <div class="form-group row">
              <div class="col-xs-2">
                <input class="form-control" id="ex1" type="text" size="50px" />
                <Button>Search</Button>
              </div>
            </div>
          </div>
          <div className="smith" onClick={handleShow}>
            <h1>Smith joi</h1>
            <p>CT Abd</p>
            <p>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."{" "}
            </p>
            <p>UCFS General Surgery -Dr.Shirumura</p>
          </div>
          <div className="thomas" onClick={handleShow}>
            <h1>Thomas bomb</h1>
            <p>Ruq ultrasound</p>
            <p>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."{" "}
            </p>
            <p>UCFS Radiology -Dr.Reyuske</p>
          </div>
        </div>
      </div>

      <div></div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <div className="details-div">
            <ul className="details">
              <li>
                John Smith
                <p>Patient Name</p>
              </li>

              <li>
                MRN-134
                <p>Patient Record Number</p>
              </li>

              <li>
                11/04/1963
                <p>Patient DOB</p>
              </li>
            </ul>
          </div>
          <div className="lorem">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label> textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Button variant="primary">Upload</Button> <br></br>
            <Button variant="info">Submit</Button>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
