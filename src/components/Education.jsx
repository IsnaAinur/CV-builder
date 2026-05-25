export default function Education({ data, onChange, isEdit, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>3. EDUCATION</h2>
      {isEdit ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); onToggle(); }}
          onKeyDown={handleKeyDown}
        >
          <label>School / University</label>
          <input type="text" name="school" value={data.school} onChange={onChange} placeholder="Example: XYZ University" required />
          
          <label>Major / Program of Study</label>
          <input type="text" name="study" value={data.study} onChange={onChange} placeholder="Example: Computer Science" required />
          
          <label>Graduation Year / Period</label>
          <input type="text" name="eduDate" value={data.eduDate} onChange={onChange} placeholder="Example: 2022 - 2026" required />
          
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