import React, { useState } from 'react';
import './messageBoc.css';

const MessageBox = () => {
  const [formData, setFormData] = useState({
    from: '',
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields
    const requiredFields = ['firstname', 'lastname', 'email', 'phoneNumber'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field`);
        return;
      }
    }

    // Upload data if all required fields are filled
    await Upload();
  };
  const Upload= async()=>{
    const result = await fetch(`${import.meta.env.VITE_BASE_URL}/message`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData}),
    });
    if(result.ok){
      alert("Message Sent Successfully")
    }
}

  return (
    <div className='lg:w-[30vw]'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Message </p>
        <label className='w-full flex gap-3'>
          <p className="message">You are :</p>
          <input name='from' placeholder="" type="radio" className=' scale-125' value="Individual" onChange={handleChange} />
          <span>Individual</span>
          <input name='from' placeholder="" type="radio" className=' scale-125' value="Dealer/Broker" onChange={handleChange} />
          <span>Dealer/Broker</span>
        </label>
        <div className="flexi">
          <label>
            <input required="" placeholder="" type="text" name="firstname" className="input" value={formData.firstname} onChange={handleChange} />
            <span>Firstname</span>
          </label>
          <label>
            <input required="" placeholder="" type="text" name="lastname" className="input" value={formData.lastname} onChange={handleChange} />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required="" placeholder="" type="email" name="email" className="input" value={formData.email} onChange={handleChange} />
          <span>Email</span>
        </label>
        <label>
          <input required="" placeholder="" type="tel" name="phoneNumber" className="input" value={formData.phoneNumber} onChange={handleChange} />
          <span>Phone number</span>
        </label>
        <button type="submit" className="submit bg-red-800">Submit</button>
      </form>
    </div>
  );
};

export default MessageBox;
