import React, { Component } from 'react';

class Dowload extends Component {
    render() {
        return (
            <div>
                <div className="bootstrapMain" id="download" style={{ backgroundColor: 'darkgreen' }}>
                    <section className="text-center content-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2>Download app</h2>
                                    <div className="imgdown">
                                        <div className="imgg1">
                                            <img src="img/unnamed.png" className="imgdownstyle" />
                                        </div>
                                        <div className="imgg2">
                                            <img src="img/unnamed (1).png" className="imgdownstyle" />
                                        </div>
                                    </div>
                                    <div className="down2app">
                                        <div className="btn1">
                                            <button className="btn btn-primary btn-lg btn-default btndown" type="button" onclick="location.href='https://bluezone.gov.vn/';">
                                                <i className="fa fa-download" /> download bluezone
                      </button>
                                        </div>
                                        <div className="btn2">
                                            <button className="btn btn-primary btn-lg btn-default btndown" type="button" onclick="location.href='https://ncovi.vnpt.vn/';">
                                                <i className="fa fa-download" /> download ncovi
                      </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Dowload;