export default function GeneralInfo({ data, onChange, isEdit, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>1. GENERAL INFORMATION</h2>
      {isEdit ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); onToggle(); }}
          onKeyDown={handleKeyDown}
        >
          <label>Full Name</label>
          <input type="text" name="name" value={data.name} onChange={onChange} placeholder="Example: John Doe" required />
          
          <label>Primary Email</label>
          <input type="email" name="email" value={data.email} onChange={onChange} placeholder="Example: john@gmail.com" required />
          
          <label>Phone Number</label>
          <input type="tel" name="phone" value={data.phone} onChange={onChange} placeholder="Example: 081000000000" required />
          
          <button type="submit" className="btn-submit">Save</button>
        </form>
      ) : (
        <div>
          <p className="locked-text">&#10004; Saved.</p>
          <button onClick={onToggle} className="btn-edit">Edit</button>
        </div>
      )}
    </div>
  );
}