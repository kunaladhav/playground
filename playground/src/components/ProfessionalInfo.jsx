const ProfessionalInfo = ({
  onClickNext,
  onClickPrev,
  experience,
  setExperience,
  roles,
  selectedRole,
  setSelectedRole,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClickNext();
  };

  const handleRole = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(Number(e.target.value))}
          />
        </label>
        <select name="group-roles" value={selectedRole} onChange={handleRole}>
          <option value="" disabled hidden>
            Choose an option...
          </option>
          {roles.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <button type="button" onClick={() => onClickPrev()}>
          Prev
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ProfessionalInfo;
