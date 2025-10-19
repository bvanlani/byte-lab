 
 //Grabbing the neccessary imports
 import {useState} from 'react';

//returning the component
 export default function SavePopup({show,onClose, onSave}){
//Holding the filename to return later
 const[fileName, setFileName] = useState('');

 //Handles prepping file name for saving
 const handleSave = () =>{
    //Setting file name
    const nameToUse = fileName.trim() || 'myProgram';
    //Uploading to parent and resetting for next save
    onSave(nameToUse);
    setFileName('');
    onClose();
 }
 //Returning the popup component if enabled
 if (show) {
  return(
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}>
      <div className="bg-dark text-light rounded p-4 shadow" style={{ width: "400px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Save Code</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">Enter the file name for your code: </h5>
        </div>
        <input type="text" className="form-control mb-3 bg-secondary text-light border-0 rounded p-3" placeholder="Enter file name" value={fileName} onChange={(e) => setFileName(e.target.value)}/>
        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
 }  
  //If not enabled returning nothing
  return;
 }
