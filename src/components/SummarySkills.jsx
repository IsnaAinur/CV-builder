export default function SummarySkills({ data, onChange, onToggleSummary, onToggleSkills, editMode }) {
  return (
    <>
      <div className="cv-form-card">
        <h2>2. SUMMARY</h2>
        {editMode.summary ? (
          <form onSubmit={(e) => { e.preventDefault(); onToggleSummary(); }}>
            <label>Tentang Anda (Singkat & Padat)</label>
            <textarea name="summary" value={data.summary} onChange={onChange} placeholder="Contoh: Pengembang perangkat lunak berdedikasi dengan keahlian dalam web development..." required />
            <button type="submit" className="btn-submit">Simpan</button>
          </form>
        ) : (
          <div>
            <p className="locked-text">&#10004; Tersimpan.</p>
            <button onClick={onToggleSummary} className="btn-edit">Edit</button>
          </div>
        )}
      </div>

      <div className="cv-form-card">
        <h2>3. KEAHLIAN / SKILLS</h2>
        {editMode.skills ? (
          <form onSubmit={(e) => { e.preventDefault(); onToggleSkills(); }}>
            <label>Keahlian (Pisahkan dengan koma)</label>
            <input type="text" name="skills" value={data.skills} onChange={onChange} placeholder="Contoh: HTML, CSS, JavaScript, PHP, MySQL, Laravel, Git" required />
            <button type="submit" className="btn-submit">Simpan</button>
          </form>
        ) : (
          <div>
            <p className="locked-text">&#10004; Tersimpan.</p>
            <button onClick={onToggleSkills} className="btn-edit">Edit</button>
          </div>
        )}
      </div>
    </>
  );
}