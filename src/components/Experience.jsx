export default function Experience({ data, onChange, isEdit, onToggle }) {
  return (
    <div className="cv-form-card">
      <h2>5. PENGALAMAN KERJA / PROYEK</h2>
      {isEdit ? (
        <form onSubmit={(e) => { e.preventDefault(); onToggle(); }}>
          <label>Nama Perusahaan / Proyek</label>
          <input type="text" name="company" value={data.company} onChange={onChange} placeholder="Contoh: Task Mate Project" required />
          <label>Posisi / Peran Utama</label>
          <input type="text" name="position" value={data.position} onChange={onChange} placeholder="Contoh: Full-Stack Web Developer" required />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label>Tahun Mulai</label>
              <input type="text" name="expFrom" value={data.expFrom} onChange={onChange} placeholder="2025" required />
            </div>
            <div>
              <label>Tahun Selesai</label>
              <input type="text" name="expUntil" value={data.expUntil} onChange={onChange} placeholder="Sekarang" required />
            </div>
          </div>
          <label>Detail Tanggung Jawab</label>
          <textarea name="responsibilities" value={data.responsibilities} onChange={onChange} placeholder="• Membangun fitur dashboard interaktif.&#10;• Mengoptimalkan query database." required />
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