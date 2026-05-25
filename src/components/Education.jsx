export default function Education({ data, onChange, isEdit, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>3. PENDIDIKAN</h2>
      {isEdit ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); onToggle(); }}
          onKeyDown={handleKeyDown}
        >
          <label>Nama Sekolah / Universitas</label>
          <input type="text" name="school" value={data.school} onChange={onChange} placeholder="Contoh: Universitas Brawijaya" required />
          
          <label>Jurusan / Program Studi</label>
          <input type="text" name="study" value={data.study} onChange={onChange} placeholder="Contoh: Teknik Informatika" required />
          
          <label>Tahun Kelulusan / Periode</label>
          <input type="text" name="eduDate" value={data.eduDate} onChange={onChange} placeholder="Contoh: 2022 - 2026" required />
          
          <button type="submit" className="btn-submit">Simpan</button>
        </form>
      ) : (
        <div>
          <p className="locked-text">&#10004; Tersimpan.</p>
          <button onClick={onToggle} className="btn-edit">Edit</button>
        </div>
      )}
    </div>
  );
}