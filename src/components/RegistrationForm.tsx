import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/registrationActions";
import "./RegistrationForm.css";

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("Yes");
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [kidsAges, setKidsAges] = useState<number[]>([]);
  const [message, setMessage] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleKidsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value, 10);
    setKids(count);
    if (count > kidsAges.length) {
      setKidsAges([...kidsAges, ...new Array(count - kidsAges.length).fill(0)]);
    } else {
      setKidsAges(kidsAges.slice(0, count));
    }
  };

  const handleKidAgeChange = (index: number, value: string) => {
    const newAges = [...kidsAges];
    newAges[index] = parseInt(value, 10);
    setKidsAges(newAges);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      register({
        firstName,
        lastName,
        email,
        phone,
        attendance,
        adults,
        kids,
        kidsAges,
        message,
        profileImage,
      })
    );

    alert("Registration successful!");

    // Clear fields after submitting
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAttendance("Yes");
    setAdults(0);
    setKids(0);
    setKidsAges([]);
    setMessage("");
    setProfileImage(null);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Event Registration</h2>

      <div className="form-group">
        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="file"
          accept="image/*"
          id="profileImage"
          onChange={handleProfileImageChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Will you be attending the event?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Yes"
              checked={attendance === "Yes"}
              onChange={(e) => setAttendance(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="Maybe"
              checked={attendance === "Maybe"}
              onChange={(e) => setAttendance(e.target.value)}
            />
            Maybe
          </label>
          <label>
            <input
              type="radio"
              value="No"
              checked={attendance === "No"}
              onChange={(e) => setAttendance(e.target.value)}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>How many adults (including you) will be attending?</label>
        <select
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value, 10))}
        >
          {[...Array(6).keys()].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>How many kids will be accompanying you?</label>
        <select value={kids} onChange={handleKidsChange}>
          {[...Array(6).keys()].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {kids > 0 && (
        <div className="form-group">
          <label>Age of Kids:</label>
          {kidsAges.map((age, index) => (
            <div key={index} className="age-selection">
              <label>Age of Kid {index + 1}</label>
              <select
                value={age}
                onChange={(e) => handleKidAgeChange(index, e.target.value)}
              >
                {[...Array(18).keys()].map((ageValue) => (
                  <option key={ageValue} value={ageValue}>
                    {ageValue}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Send a message to the host (optional)</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="submit">Submit Registration</button>
    </form>
  );
};

export default RegistrationForm;
