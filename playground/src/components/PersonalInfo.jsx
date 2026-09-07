const PersonalInfo = ({ name, email, setName, setEmail, onClickNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length > 0 && email.trim().length > 0) {
      onClickNext();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">next</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
