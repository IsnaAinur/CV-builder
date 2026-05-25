export default function Organization({ data, onChange, isEdit, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>5. ORGANIZATIONS / ACTIVITIES</h2>
      {isEdit ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); onToggle(); }}
          onKeyDown={handleKeyDown}
        >
          <label>Organization / Event Name</label>
          <input type="text" name="orgName" value={data.orgName} onChange={onChange} placeholder="Example: BEM FASILKOM" required />
          
          <label>Role / Position</label>
          <input type="text" name="orgRole" value={data.orgRole} onChange={onChange} placeholder="Example: Member of Public Relations Department" required />
          
          <label>Period</label>
          <input type="text" name="orgDate" value={data.orgDate} onChange={onChange} placeholder="Example: 2023 - 2024" required />
          
          <label>Activity Description</label>
          <textarea name="orgDesc" value={data.orgDesc} onChange={onChange} placeholder="Describe your contributions in the organization..." required />
          
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