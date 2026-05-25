export default function Experience({ data, onChange, isEdit, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>4. WORK EXPERIENCE</h2>
      {isEdit ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); onToggle(); }}
          onKeyDown={handleKeyDown}
        >
          <label>Company Name</label>
          <input type="text" name="company" value={data.company} onChange={onChange} placeholder="Example: XYZ Company" required />
          
          <label>Position / Title</label>
          <input type="text" name="position" value={data.position} onChange={onChange} placeholder="Example: Full Stack Developer" required />
          
          <label>Start Date</label>
          <input type="text" name="expFrom" value={data.expFrom} onChange={onChange} placeholder="Example: January 2024" required />
          
          <label>End Date (Type 'Present' if you are still working)</label>
          <input type="text" name="expUntil" value={data.expUntil} onChange={onChange} placeholder="Example: Present" required />
          
          <label>Job Responsibilities / Description</label>
          <textarea name="responsibilities" value={data.responsibilities} onChange={onChange} placeholder="List your tasks and achievements..." required />
          
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