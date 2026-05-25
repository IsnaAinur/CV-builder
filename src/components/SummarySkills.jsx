export default function SummarySkills({ data, onChange, isEdit, onToggleSummary, onToggleSkills, editMode }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>2. SUMMARY & SKILLS</h2>
      
      {/* Summary */}
      <div style={{ marginBottom: '20px' }}>
        {editMode.summary ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); onToggleSummary(); }}
            onKeyDown={handleKeyDown}
          >
            <label>Professional Summary</label>
            <textarea name="summary" value={data.summary} onChange={onChange} placeholder="Write a brief professional profile..." required />
            <button type="submit" className="btn-submit">Save</button>
          </form>
        ) : (
          <div style={{ marginBottom: '10px' }}>
            <p className="locked-text">&#10004; Saved</p>
            <button onClick={onToggleSummary} className="btn-edit">Edit</button>
          </div>
        )}
      </div>

      {/* Skills */}
      <div>
        {editMode.skills ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); onToggleSkills(); }}
            onKeyDown={handleKeyDown}
          >
            <label>Skills (Separate with Enter or Comma)</label>
            <textarea name="skills" value={data.skills} onChange={onChange} placeholder="Example: HTML, CSS, JavaScript, PHP" required />
            <button type="submit" className="btn-submit">Save</button>
          </form>
        ) : (
          <div>
            <p className="locked-text">&#10004; Saved</p>
            <button onClick={onToggleSkills} className="btn-edit">Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}