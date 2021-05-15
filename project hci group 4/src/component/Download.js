import React, { Component } from 'react';

class Download extends Component {
    render() {
        return (
            <div>
                <section className="text-center content-section" id="download" style={{ backgroundColor: 'white', border: '1px solid #009cd7' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2>Tải app</h2>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '50%', margin: 'auto' }}><img src="assets/img/bluezone.png" style={{ borderRadius: '75px', border: '2px solid #009cd7' }} /><button className="button" type="button" data-hover="Are you sure?" style={{ borderRadius: '70px' }} onclick="location.href='https://bluezone.gov.vn/'"><span>Download Bluezone</span></button></div>
                                    <div style={{ width: '50%', margin: 'auto' }}><img src="assets/img/ncovi.png" style={{ borderRadius: '75px', border: '2px solid #009cd7' }} /><button className="button" type="button" data-hover="Are you sure?" style={{ borderRadius: '70px' }} onclick="location.href='https://ncovi.vnpt.vn/'"><span>Download NCOVI</span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Download;