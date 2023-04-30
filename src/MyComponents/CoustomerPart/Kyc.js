import React from 'react'

export default function Kyc() {
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
                    <input type="text" value={`${username}`} />
                  </div>
                  <div className="informationfields">
                    <h2>Email Address</h2>
                    <input type="text" value={`${email}`} />
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
      {kycfilled && (
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
