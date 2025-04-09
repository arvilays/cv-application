function Personal({ personal, onChange }) {
  return (
    <>
      <h1>Personal</h1>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={personal.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={personal.email}
          onChange={onChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={personal.phone}
          onChange={onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={personal.address}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Personal;