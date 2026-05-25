export default function Experience({ data, onChange, isEdit, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  return (
    <div className="cv-form-card">
      <h2>4. PENGALAMAN KERJA</h2>
      {isEdit ? (
        <form 
          onSubmit={(e) => { e.preventDefault(); onToggle(); }}
          onKeyDown={handleKeyDown}
        >
          <label>Nama Perusahaan</label>
          <input type="text" name="company" value={data.company} onChange={onChange} placeholder="Contoh: PT. Maju Mundur" required />
          
          <label>Posisi / Jabatan</label>
          <input type="text" name="position" value={data.position} onChange={onChange} placeholder="Contoh: Full Stack Developer" required />
          
          <label>Tanggal Mulai</label>
          <input type="text" name="expFrom" value={data.expFrom} onChange={onChange} placeholder="Contoh: Januari 2024" required />
          
          <label>Tanggal Selesai (Ketik 'Sekarang' jika masih bekerja)</label>
          <input type="text" name="expUntil" value={data.expUntil} onChange={onChange} placeholder="Contoh: Sekarang" required />
          
          <label>Detail Tanggung Jawab / Deskripsi</label>
          <textarea name="responsibilities" value={data.responsibilities} onChange={onChange} placeholder="Tuliskan tugas dan pencapaian Anda..." required />
          
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