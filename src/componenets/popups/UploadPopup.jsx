//Grabbing the needed extensions.
import {useRef} from 'react';

//Returning the default function
export default function UploadPopup({show, onClose, onUpload}){
    //Getting the file input info
    const fileInputRef = useRef(null);
    
    //Handle upload function. Formats and sends to parent
    const handleUpload = (e) => {
        const file = e.target.files[0]; //Grabbing the file from upload(its the first cause its the only one duh)
        //If its a working file we start reading text
        if (file) {
            //Read text and send to parent
            const reader = new FileReader();
            reader.onload = (evt) => {
                //Once loaded and working sending to parent
                const text = evt.target.result;
                onUpload(text);
                onClose();//Close the popup
            }
            //Tells it how to read in file not sure why it goes here but it works
            reader.readAsText(file);
        }
        onClose();// close popup
    }

    if (show){
        return(
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}>
            <div className="bg-dark text-light rounded p-4 shadow" style={{ width: "400px" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Upload Code</h5>
            </div>
            <input
              type="file"
              accept=".txt"
              ref={fileInputRef}
              onChange={handleUpload}
              className="form-control mb-3 bg-secondary text-light border-0 rounded 3"
            />
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
    );
    }
    return;
}

