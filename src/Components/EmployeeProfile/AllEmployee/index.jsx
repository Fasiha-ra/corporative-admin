import React, { useState } from "react";
import { AllEmployeeWrap } from "./AllEmployee.styles";
import Table from "../../Table";
import { AllCol, AllData } from "../EmployeeData";
import ButtonTable from "../TableButton";
import Modal from "../../Modal";

const AllEmployee = () => {
  const [reason, setReason] = useState(false);
  const [toldReason, setToldReason] = useState(false);
  const [deactivateReason, setDeactivateReason] = useState(""); 

  const handleButtonClick = (buttonId) => {
    if (buttonId === "deactivate_1") {
      setReason(true);
    } else if (buttonId === "deactivate_2") {
      setToldReason(true);
    }
  };

  const handleSaveReason = () => {
   
    setToldReason(false); 
    setReason(true); 
  };

  return (
    <AllEmployeeWrap>
      <div className="wrapper">
        <ButtonTable columns={AllCol} data={AllData} border onButtonClick={handleButtonClick} />
      </div>
      {reason && (
        <Modal open={reason} setOpen={setReason} width="612px">
          <div className="reasonwrap">
            <strong>Reason of Deactivate</strong>
            <textarea value={deactivateReason} readOnly />
          </div>
        </Modal>
      )}
      {toldReason && (
        <Modal open={toldReason} setOpen={setToldReason} width="612px">
          <div className="reasonwrap">
            <strong>Enter Reason of Deactivate</strong>
            <textarea value={deactivateReason} onChange={(e) => setDeactivateReason(e.target.value)} />
            <button onClick={handleSaveReason}>Save</button>
          </div>
        </Modal>
      )}
    </AllEmployeeWrap>
  );
};

export default AllEmployee;
