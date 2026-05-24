export default function Education({ data, onChange, isEdit, onToggle }) {
  return (
    <div className="cv-form-card">
      <h2>4. RIWAYAT PENDIDIKAN</h2>
      {isEdit ? (
        <form onSubmit={(e) => { e.preventDefault(); onToggle(); }}>
          <label>Institusi Pendidikan</label>
          <input type="text" name="school" value={data.school} onChange={onChange} placeholder="Contoh: SMK Negeri 2 Surakarta" required />
          <label>Program Studi / Jurusan</label>
          <input type="text" name="study" value={data.study} onChange={onChange} placeholder="Contoh: Rekayasa Perangkat Lunak" required />
          <label>Periode Studi</label>
          <input type="text" name="eduDate" value={data.eduDate} onChange={onChange} placeholder="Contoh: Jan 2023 - Sep 2027" required />
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