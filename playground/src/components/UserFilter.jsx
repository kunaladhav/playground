const UserFilter = ({ selectedRole, setSelectedRole, roles }) => {
  return (
    <div>
      <div>
        <select
          name="group-roles"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="" disabled hidden>
            Choose an option...
          </option>
          {roles.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserFilter;
