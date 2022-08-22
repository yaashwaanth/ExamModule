import React, { useRef , useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./Admit.css";
import { op } from "../Fees/Fees";



export default function Admit(props) {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  useEffect(() => {
    setFile(op)
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
          
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }
    
  }, [file]);
  //console.log(props.ddata);
  
  return (
    <div className="opip" ref={componentRef}>
      <div>
        <div>
          <div className="styleimg"></div>
          <div className="hed">
            <img src={require("../ImagePrev/ImageUploadPreviewComponent")} width="1300px" height="250px"  />
          </div>
          <div className="heading">
            <h3>Admit Card</h3>
          </div>
          <p>
            Please Admit Mr./MS <b>{props.ddata.dfullname}</b> {"  "}S/D of Mr{"  "}
            <b>{props.ddata.dfather}</b>in the SEMESTER: <b>{props.ddata.dSemester}</b> of{" "}
            <b>{props.ddata.dBranch}</b> Branch Examination to be held in the month of
            ____ in the following subjects
          </p>
          <div className="up-img">
          {
            <img src={fileDataURL} width="250px" height="200px" alt="preview" />
          }
          </div>
          <table>
            <tbody>
              <tr>
                <th style={{ width: "150px" }}>Subject-Code</th>
                <th style={{ width: "300px" }}>Theory-Subjects</th>
              </tr>
              <tr>
                <td>A1</td>
                <td>DAA</td>
              </tr>
              <tr>
                <td>A2</td>
                <td>DBMS</td>
              </tr>
              <tr>
                <td>A3</td>
                <td>CN</td>
              </tr>
              <tr>
                <td>A4</td>
                <td>DS</td>
              </tr>
              <tr>
                <td>A5</td>
                <td>JAVA</td>
              </tr>
              
            </tbody>
          </table>
          <div className />
          <div className="rules">
            <h6>RULES TO BE FOLLOWED BY THE EXAMINEE:</h6>
            
            <h6> {"    "}This permission is subject to the following conditions:-
              {"\n"}</h6>
            <h6>1. The institute shall withdraw the permission at any time
              if it is found subsequently that the student was not eligible for
              appearing at the examination and{"\n"}permission has been granted
              by some inadvertent omission or accidental mistake and his
              examination will be cancelled.{"\n"}</h6>
              <h6>2. Examinee is forbidden to
              take any book, notes or loose papers in the examination hall
              except the admit card.{"\n"}</h6>
              <h6>3. No communication, whatsoever, will
              be allowed during the examination amongst examinees and/or with
              the outsider.{"\n"}</h6>
              <h6>4. Examinee is forbidden to write answer or
              anything else on question paper or any loose paper.{"\n"}</h6>
              <h6>5. Any
              attempt on the part of examinee to use unfair means in the
              examination or any violation of the rules will make his/her liable
              for immediate decision{"\n"}the institute whose decision would be
              final. Cases of violence, where examinee is found using unfair
              means and still tries to destroy the evidence or behav{"\n"}
              indiscipline manner by threat the invigilator, will be punished
              more severely as per rules of the University.{"\n"}</h6>
              <h6>6. No examinee
              will be allowed to leave the examination hall earlier than an hour
              after the commencement of the examination. The examinee must take
              th{"\n"}seats at least five minutes before the time fixed for
              commencement of examination on entering the hall he/she must take
              his/her seat and observe silenc{"\n"}Superintendent of the
              examination may at his/her discretion permit a candidate who comes
              late to enter the examination hall if the period of delay does n
              {"\n"}exceed half an hour.{"\n"}</h6>
              <h6>7. No examinee, without the
              permission of the invigilator should leave his/her seat during the
              examination.{"\n"}</h6>
              <h6>8. Each examinee should enter required details
              like Roll No., subject, semester and branch etc. on the cover of
              all answer books used by him/her. This mu{"\n"}done before
              attempting to answer the questions.{"\n"}</h6>
              <h6>9. Examinee shall sign
              his/her name on the prescribed attendance verification form when
              required to do so.{"\n"}</h6>
              <h6>10. If any prohibited item (Mobile etc) is
              found in possession it will be seized.{"\n"}</h6>

          </div>
          <div className="sign">
            <b>Signature of Candidate</b>
            <br />
            <b>Enrollment No. __</b>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-gray-500 border border-gray-500 p-2 mb-4"
        onClick={handlePrint}
      >
        Print 
      </button>
    </div>
  );
}