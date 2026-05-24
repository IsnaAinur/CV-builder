import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import SummarySkills from './components/SummarySkills.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Organization from './components/Organization.jsx';
import PreviewCV from './components/PreviewCV.jsx';
import './styles/App.css';
import './styles/GeneralInfo.css';

function App() {
  const [cvData, setCvData] = useState({
    name: '', email: '', phone: '',
    summary: '', skills: '',
    school: '', study: '', eduDate: '',
    company: '', position: '', expFrom: '', expUntil: '', responsibilities: '',
    orgName: '', orgRole: '', orgDate: '', orgDesc: ''
  });

  const [editMode, setEditMode] = useState({
    general: true,
    summary: true,
    skills: true,
    education: true,
    experience: true,
    organization: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = (section) => {
    setEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="app-container">
      <div className="btn-download-container">
        <button className="btn-download" onClick={() => window.print()}>
          <span dangerouslySetInnerHTML={{ __html: '&#128190; ' }} /> UNDUH CV (PDF)
        </button>
      </div>

      <header>
        <h1>Curriculum Vitae</h1>
        <p>Build your own CV with ease</p>
      </header>

      <main className="cv-builder">
        {/* KOLOM KIRI: KUMPULAN INPUT FORM */}
        <div className="form-column">
          <GeneralInfo data={cvData} onChange={handleChange} isEdit={editMode.general} onToggle={() => toggleEdit('general')} />
          <SummarySkills data={cvData} onChange={handleChange} isEdit={editMode.summary} onToggleSummary={() => toggleEdit('summary')} onToggleSkills={() => toggleEdit('skills')} editMode={editMode} />
          <Education data={cvData} onChange={handleChange} isEdit={editMode.education} onToggle={() => toggleEdit('education')} />
          <Experience data={cvData} onChange={handleChange} isEdit={editMode.experience} onToggle={() => toggleEdit('experience')} />
          <Organization data={cvData} onChange={handleChange} isEdit={editMode.organization} onToggle={() => toggleEdit('organization')} />
        </div>

        {/* KOLOM KANAN: LIVE PREVIEW RESUME */}
        <PreviewCV data={cvData} />
      </main>
    </div>
  );
}

export default App;