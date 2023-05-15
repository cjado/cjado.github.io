import React from 'react';

function Contact() {
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#FCEDDA'  }}>
      <div className="row">
        <div className="col-md-6 offset-md-1">
          <h2 style={{color: '#2BAE66'}}>Contact Me:</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name" style={{ fontSize: '1.2rem', color: '#2BAE66' }}>Name:</label>
              <input type="text" className="form-control " id="name" name="name" placeholder="Enter your name" required style={{ fontSize: '1.2rem' }} />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontSize: '1.2rem', color: '#2BAE66' }}>Email address:</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required style={{ fontSize: '1.2rem' }} />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{ fontSize: '1.2rem', color: '#2BAE66' }}>Message:</label>
              <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required style={{ fontSize: '1.2rem' }}></textarea>
            </div>
            <button type="submit" className="btn btn-dark rainbow" style={{ fontSize: '1.2rem', backgroundColor: '#2BAE66' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
