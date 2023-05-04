import React, { useEffect, useState } from "react";
import "./coustomer.css";
import {
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Kyc(props) {
  const [kycform, setKycForm] = useState(false);
  const [kycfilled, setkycfilled] = useState(true);
  const [username, setUsername] = useState("");
  const [citizenshipback, setCitizenshipback] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  
  useEffect(() => {

    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file2.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file2);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          console.log("per", per);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img2: downloadURL }));
          });
        }
      );
    };
    file2 && uploadFile();
  }, [file2]);

  const binaryData = [];
  binaryData.push(file);
  const binaryData2 = [];
  binaryData2.push(file2);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const collectionRef = collection(db, "user");
  const handleSubmit = async (e) => {
    e.preventDefault();
    onAuthStateChanged(
      auth,
      async () => {
        try {
          await updateDoc(doc(collectionRef, props.id), {
            provience: data.provience,
            currentaddress: data.address,
            issuedate: data.issuedate,
            citizenshipno: data.citizenshipno,
            citizenshipfront: data.img,
            citizenshipback: data.img2,
            houseno: data.houseno,
            lastUpdated: serverTimestamp(),
          });

          toast.success("KYC Form has submitted");
          setkycfilled(false)
          kycform(false)
          window.location.reload()
        } catch (error) {
          alert(`Data was now added, ${error.message}`);
        }
      },
      []
    );
  };

  
  return (
    <div>
       {kycform && (
        <div>
          <div className="background" onClick={() => setKycForm(false)}></div>
          <div className="KycForm">
            <h1>KYC Form</h1>
            <p>Please fill in all the details.</p>
            <div className="kycformdetails">
              <div className="personalinfo">
                <h1>Personal Information</h1>
                <div className="Fields">
                  <div className="informationfields">
                    <h2>Name</h2>
                    <input type="text" value={props.username} />
                  </div>
                  <div className="informationfields">
                    <h2>Email Address</h2>
                    <input type="text" value={props.email} />
                  </div>
                </div>
              </div>
              <div className="personalinfo">
                <h1>Address</h1>
                <div className="Fields">
                  <div className="informationfields">
                    <h2>Province No.</h2>
                    <input type="text" onChange={handleInput} id="provience" />
                  </div>
                  <div className="informationfields">
                    <h2>Current Address</h2>
                    <input type="text" onChange={handleInput} id="address" />
                  </div>
                  <div className="informationfields">
                    <h2>House No</h2>
                    <input type="text" onChange={handleInput} id="houseno" />
                  </div>
                </div>
              </div>
              <div className="personalinfo">
                <h1>Documents</h1>
                <div className="Fields">
                  <div className="informationfields">
                    <h2>Citizenship No</h2>
                    <input type="number" id="citizenshipno" onChange={handleInput}/>
                  </div>
                  <div className="informationfields">
                    <h2>Issued Date</h2>
                    <input type="date" id="issuedate" onChange={handleInput}/>
                  </div>
                </div>
              </div>
              <div className="citizenshipImage">
                <div className="frontcitizenshipImage">
                  <h2>Citizinship Front</h2>

                  {show && (
                    <div className="insidecitizenshipImage">
                      {" "}
                      <img
                        src={URL.createObjectURL(
                          new Blob(binaryData, { type: "application/zip" })
                        )}
                        alt=""
                      />
                    </div>
                  )}

                  <div className="citizenshipImageInput">
                    <label htmlFor="file" onClick={() => setShow(true)}>
                      {" "}
                      + Upload
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="frontcitizenshipImage">
                  <h2>Citizinship Back</h2>
                  {show2 && (
                    <div className="insidecitizenshipImage">
                      {" "}
                      <img
                        src={URL.createObjectURL(
                          new Blob(binaryData2, { type: "application/zip" })
                        )}
                        alt=""
                      />
                    </div>
                  )}

                  <div className="citizenshipImageInput">
                    <label htmlFor="file2" onClick={() => setShow2(true)}>
                      + Upload
                    </label>
                    <input
                      type="file"
                      id="file2"
                      onChange={(e) => setFile2(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
              <div className="citizenshipSubmit"> <button onClick={handleSubmit}>Submit</button> </div>
            </div>
          </div>
        </div>
      )}
      {props.kycfilled && (
        <div className="kycFormTop">
          <img src="img/speak.png" alt="" />
          <p>
            Start managing your bills with AquaBill. Complete{" "}
            <span onClick={() => setKycForm(true)}>Your KYC</span> Form Today!
          </p>
        </div>
      )}
    </div>
  )
}
