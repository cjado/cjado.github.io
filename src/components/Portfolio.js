import React from 'react';

function Portfolio() {
  return (
    <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#FCEDDA' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Portfolio</h1>
      <div className="row" style={{marginTop: '5vh', marginBottom: '5vh'}}>
        <div className="col-md-4 mb-5">
          <div className="card custom-card">
            <div className="card-body">
              <h5 className="card-title">Box 1</h5>
              <p className="card-text">Description of box 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card custom-card">
            <div className="card-body">
              <h5 className="card-title">Box 2</h5>
              <p className="card-text">Description of box 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card custom-card">
            <div className="card-body">
              <h5 className="card-title">Box 3</h5>
              <p className="card-text">Description of box 3.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card custom-card">
            <div className="card-body">
              <h5 className="card-title">Box 4</h5>
              <p className="card-text">Description of box 4.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card custom-card">
            <div className="card-body">
              <h5 className="card-title">Box 5</h5>
              <p className="card-text">Description of box 5.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card custom-card">
            <div className="card-body">
              <h5 className="card-title">Box 6</h5>
              <p className="card-text">Description of box 6.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
