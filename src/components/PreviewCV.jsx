export default function PreviewCV({ data }) {
  return (
    <div className="preview-column">
      {/* Header */}
      <div className="cv-preview-header">
        <h2>{data.name || 'Your Name'}</h2>
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
          {!data.email && !data.phone && <span className="cv-placeholder-text">Your contact information will appear here</span>}
        </div>
      </div>

      {/* Summary */}
      <div className="cv-preview-section">
        <h3>Summary</h3>
        <p className="cv-text-paragraph">
          {data.summary || 'Write a brief professional profile about your interests, focus, and main skills.'}
        </p>
      </div>

      {/* Skills */}
      <div className="cv-preview-section">
        <h3>Skills</h3>
        <p className="cv-text-skills">
          {data.skills || 'Write a list of your technical skills.'}
        </p>
      </div>

      {/* Education */}
      <div className="cv-preview-section">
        <h3>Education</h3>
        <div className="cv-item">
          <div className="cv-item-title">
            <span className="text-left">{data.school || 'Name of Educational Institution'}</span>
            <span className="cv-item-date">{data.eduDate || 'Period'}</span>
          </div>
          <div className="cv-item-sub">{data.study || 'Major / Program of Study'}</div>
        </div>
      </div>

      {/* SWork Experience */}
      <div className="cv-preview-section">
        <h3>Work Experience</h3>
        <div className="cv-item">
          <div className="cv-item-title">
            <span className="text-left">{data.company || 'Name of Company / Project'}</span>
            <span className="cv-item-date">
              {data.expFrom && data.expUntil ? `${data.expFrom} &#8212; ${data.expUntil}` : 'Period'}
            </span>
          </div>
          <div className="cv-item-sub">{data.position || 'Position or Main Role'}</div>
          <p className="cv-item-desc">
            {data.responsibilities || 'Detail description of job duties and responsibilities.'}
          </p>
        </div>
      </div>

      {/* Organizational Experience */}
      <div className="cv-preview-section">
        <h3>Organizational Experience</h3>
        <div className="cv-item">
          <div className="cv-item-title">
            <span className="text-left">{data.orgName || 'Name of Organization / Community'}</span>
            <span className="cv-item-date">{data.orgDate || 'Period'}</span>
          </div>
          <div className="cv-item-sub">{data.orgRole || 'Position / Role'}</div>
          <p className="cv-item-desc">
            {data.orgDesc || 'Detail contribution or work programs within the organization.'}
          </p>
        </div>
      </div>
    </div>
  );
}