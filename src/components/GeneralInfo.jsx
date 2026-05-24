export default function GeneralInfo({ data, onChange, isEdit, onToggle }) {
  return (
    <div className="cv-form-card">
      <h2>1. INFORMASI UMUM</h2>
      {isEdit ? (
        <form onSubmit={(e) => { e.preventDefault(); onToggle(); }}>
          <label>Nama Lengkap</label>
          <input type="text" name="name" value={data.name} onChange={onChange} placeholder="Contoh: john" required />
          <label>Email Utama</label>
          <input type="email" name="email" value={data.email} onChange={onChange} placeholder="Contoh: nama@gmail.com" required />
          <label>Nomor Telepon</label>
          <input type="tel" name="phone" value={data.phone} onChange={onChange} placeholder="Contoh: 081000000000" required />
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