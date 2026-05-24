export default function PreviewCV({ data }) {
  return (
    <div className="preview-column">
      {/* Header Utama Kertas CV */}
      <div className="cv-preview-header">
        <h2>{data.name || 'NAMA LENGKAP ANDA'}</h2>
        <div className="cv-contacts">
          {data.email && (
            <span>
              <span dangerouslySetInnerHTML={{ __html: '&#9993; ' }} />
              {data.email}
            </span>
          )}
          {data.email && data.phone && <span>&#8226;</span>}
          {data.phone && (
            <span>
              <span dangerouslySetInnerHTML={{ __html: '&#9742; ' }} />
              {data.phone}
            </span>
          )}
          {!data.email && !data.phone && <span className="cv-placeholder-text">Kontak Anda akan muncul di sini</span>}
        </div>
      </div>

      {/* Section: Summary */}
      <div className="cv-preview-section">
        <h3>Summary</h3>
        <p className="cv-text-paragraph">
          {data.summary || 'Tuliskan deskripsi profesional singkat tentang minat, fokus, dan keahlian utama Anda.'}
        </p>
      </div>

      {/* Section: Skills */}
      <div className="cv-preview-section">
        <h3>Skills</h3>
        <p className="cv-text-skills">
          {data.skills || 'Daftar keahlian teknis Anda.'}
        </p>
      </div>

      {/* Section: Pendidikan */}
      <div className="cv-preview-section">
        <h3>Pendidikan</h3>
        <div className="cv-item">
          <div className="cv-item-title">
            <span className="text-left">{data.school || 'Nama Institusi Pendidikan'}</span>
            <span className="cv-item-date">{data.eduDate || 'Periode'}</span>
          </div>
          <div className="cv-item-sub">{data.study || 'Jurusan / Program Studi'}</div>
        </div>
      </div>

      {/* Section: Kerja */}
      <div className="cv-preview-section">
        <h3>Pengalaman Kerja</h3>
        <div className="cv-item">
          <div className="cv-item-title">
            <span className="text-left">{data.company || 'Nama Perusahaan / Proyek'}</span>
            <span className="cv-item-date">
              {data.expFrom && data.expUntil ? `${data.expFrom} &#8212; ${data.expUntil}` : 'Periode'}
            </span>
          </div>
          <div className="cv-item-sub">{data.position || 'Posisi atau Peran Utama'}</div>
          <p className="cv-item-desc">
            {data.responsibilities || 'Detail deskripsi tugas kerja dan tanggung jawab.'}
          </p>
        </div>
      </div>

      {/* Section: Organisasi */}
      <div className="cv-preview-section">
        <h3>Pengalaman Organisasi</h3>
        <div className="cv-item">
          <div className="cv-item-title">
            <span className="text-left">{data.orgName || 'Nama Organisasi / Komunitas'}</span>
            <span className="cv-item-date">{data.orgDate || 'Periode'}</span>
          </div>
          <div className="cv-item-sub">{data.orgRole || 'Jabatan / Peran'}</div>
          <p className="cv-item-desc">
            {data.orgDesc || 'Detail kontribusi atau program kerja dalam organisasi.'}
          </p>
        </div>
      </div>
    </div>
  );
}