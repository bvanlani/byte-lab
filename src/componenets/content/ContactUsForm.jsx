import {useState} from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs(){

    const [formData, setFormData] = useState({
        email: "",
        fname: "",
        lname: "",
        content: ""
    })

    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {}
        if(!formData.email) newErrors.email = "Email is required";
        else if(!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

        if(!formData.fname) newErrors.fname = "First name is required";
        if(!formData.lname) newErrors.lname = "Last name is required";
        if(!formData.content) newErrors.content = "Message cannot be empty";

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        emailjs.send(
            "service_tcrf187",
            "template_y7i6gqu",
            {
                name: formData.fname + " " + formData.lname,
                message: formData.content + "\n\nReply to: " + formData.email
            },
            "-w7wZN3bs1VQMaNCH"
        )
        .then((res) =>{
            setSuccessMsg("Message sent successfully!");
            setFormData({
                email: "",
                fname: "",
                lname: "",
                content: ""
            })
        }).catch((err) =>{
                setSuccessMsg("Failed to send message. Please try again later.");
                console.error(err);
            })
    };

    return(
        <>
            <section className="contact-us my-5">
                <div className="container text-center bg-dark text-light rounded p-5">
                    <h1 className="m-0">Contact Us</h1>
                    <form className="contact-us-form d-flex flex-column justify-content-around" onSubmit={handleSubmit}>
                        <div className="container bg-dark-secondary p-5 mt-3 rounded text-start">
                            <div className="form-group">
                                <label htmlFor="email" className="fs-5"><span className="text-danger">*</span> Email:</label>
                                <input type="text" className="form-control fw-bold rounded" id="email" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange}/>
                                <span className="text-danger text-center">{errors.email}</span>
                            </div>    
                            <div className="form-group">
                                <label htmlFor="fname" className="fs-5"><span className="text-danger">*</span>  First Name:</label>
                                <input type="text" className="form-control fw-bold rounded" id="fname" name="fname" value={formData.fname} onChange={handleChange}/>
                                <span className="text-danger text-center">{errors.fname}</span>
                            </div>  
                            <div className="form-group">
                                <label htmlFor="lname" className="fs-5"><span className="text-danger">*</span>  Last Name:</label>
                                <input type="text" className="form-control fw-bold rounded" id="lname" name="lname" value={formData.lname} onChange={handleChange}/>
                                <span className="text-danger text-center">{errors.lname}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content" className="fs-5"><span className="text-danger">*</span>  Comments/Concerns:</label>
                                <textarea className="form-control form-content fw-bold rounded" id="content" name="content" value={formData.content} onChange={handleChange}></textarea>
                                <span className="text-danger text-center">{errors.content}</span>
                            </div> 
                            <div className="d-flex align-items-center mt-3">
                                <button type="submit" className="btn btn-primary btn-lg me-3">Submit</button>
                                <span className="text-success text-center">{successMsg}</span>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}