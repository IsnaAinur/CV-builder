export default function SummarySkills({ data, onChange, isEdit, onToggleSummary, onToggleSkills, editMode }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>2. RINGKASAN & KEAHLIAN</h2>
      
      {/* Bagian Ringkasan */}
      <div style={{ marginBottom: '20px' }}>
        {editMode.summary ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); onToggleSummary(); }}
            onKeyDown={handleKeyDown}
          >
            <label>Ringkasan Profesional</label>
            <textarea name="summary" value={data.summary} onChange={onChange} placeholder="Tuliskan profil singkat Anda..." required />
            <button type="submit" className="btn-submit">Simpan Ringkasan</button>
          </form>
        ) : (
          <div style={{ marginBottom: '10px' }}>
            <p className="locked-text">&#10004; Ringkasan Tersimpan.</p>
            <button onClick={onToggleSummary} className="btn-edit">Edit Ringkasan</button>
          </div>
        )}
      </div>

      {/* Bagian Keahlian / Skills */}
      <div>
        {editMode.skills ? (
          <form 
            onSubmit={(e) => { e.preventDefault(); onToggleSkills(); }}
            onKeyDown={handleKeyDown}
          >
            <label>Keahlian (Pisahkan dengan Enter atau Koma)</label>
            <textarea name="skills" value={data.skills} onChange={onChange} placeholder="Contoh: HTML, CSS, JavaScript, PHP" required />
            <button type="submit" className="btn-submit">Simpan Keahlian</button>
          </form>
        ) : (
          <div>
            <p className="locked-text">&#10004; Keahlian Tersimpan.</p>
            <button onClick={onToggleSkills} className="btn-edit">Edit Keahlian</button>
          </div>
        )}
      </div>
    </div>
  );
}