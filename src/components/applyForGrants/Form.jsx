function Form() {
  return (
    <>
      <div className="header">
        <h1>Grant application</h1>
      </div>
      <div className="form-container">
        <form className="grant-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name <span className="required">*</span>
            </label>
            <input id="name" type="text" required className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <p className="form-helper-text">
              Primary contact if applying as a team/company
            </p>
            <input id="email" type="email" required className="form-input" />
          </div>

          <div className="form-group">
            <label htmlFor="about" className="form-label">
              About You <span className="required">*</span>
            </label>
            <p className="form-helper-text">
              Tell us about yourself and/or your team
            </p>
            <textarea id="about" required className="form-textarea" />
          </div>

          <div className="form-group">
            <label htmlFor="links" className="form-label">
              Additional Links
            </label>
            <p className="form-helper-text">
              If helpful, please share any links about you (e.g. Website,
              GitHub, Twitter)
            </p>
            <textarea id="links" className="form-textarea" />
          </div>

          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
