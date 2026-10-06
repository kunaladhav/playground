const ReviewApplication = ({
  name,
  email,
  selectedRole,
  experience,
  onClickPrev,
}) => {
  const handleSubmit = () => {
    alert("Submitted successfully");
  };

  return (
    <div>
      <div>
        Name : {name}
        email : {email}
        experience: {experience}
        role: {selectedRole}
        <button onClick={() => onClickPrev()}>Prev</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewApplication;
