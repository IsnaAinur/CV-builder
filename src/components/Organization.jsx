export default function Organization({ data, onChange, isEdit, onToggle }) {
  return (
    <div className="cv-form-card">
      <h2>6. PENGALAMAN ORGANISASI</h2>
      {isEdit ? (
        <form onSubmit={(e) => { e.preventDefault(); onToggle(); }}>
          <label>Nama Organisasi / Komunitas</label>
          <input type="text" name="orgName" value={data.orgName} onChange={onChange} placeholder="Contoh: Komunitas IT Senior" required />
          <label>Jabatan / Peran</label>
          <input type="text" name="orgRole" value={data.orgRole} onChange={onChange} placeholder="Contoh: Anggota Divisi Hubungan Masyarakat" required />
          <label>Periode Waktu</label>
          <input type="text" name="orgDate" value={data.orgDate} onChange={onChange} placeholder="Contoh: 2024 - 2025" required />
          <label>Deskripsi Singkat Kegiatan</label>
          <textarea name="orgDesc" value={data.orgDesc} onChange={onChange} placeholder="• Merancang program kerja publikasi digital.&#10;• Mengelola komunikasi eksternal." required />
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