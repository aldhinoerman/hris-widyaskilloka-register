import React from 'react';
import Logo from '../assets/img/logo-widya-skilloka.png';
import Company from '../components/CompanyField';
import { Card, CardGroup, Col, Container, Row, Form } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import './Register.css';

function Register() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col sm={8} md={9}>
                    <CardGroup>
                        <Card className="register-form">
                            <Card.Body className="d-flex">
                                <Form action='#' style={{ width: '80%' }}>

                                    <div className="logo text-center">
                                        <img
                                            className="app-logo"
                                            src={Logo}
                                            alt="logo"
                                        />
                                    </div>

                                    <h5>
                                        <b>Data Perusahaan</b>
                                    </h5>

                                    <div className='row'>
                                        <div className="col-sm-6">
                                            <div className='form-group'>
                                                <label className="input-label" htmlFor="namaPerusahaan">
                                                    Nama Perusahaan
                                            </label>
                                                <input
                                                    label='Nama Perusahaan'
                                                    type='text'
                                                    className='form-control'
                                                    id="namaPerusahaan"
                                                    name='namaPerusahaan'
                                                    required
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Website Perusahaan
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-url"
                                                    aria-describedby="basic-addon3"
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Nomor Telepon Perusahaan
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        +
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="62"
                                                    aria-label="62"
                                                    aria-describedby="basic-addon1"
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Bidang Perusahaan
                                            </label>
                                            <Company />
                                        </div>
                                    </div>
                                    <hr></hr>

                                    <h5 style={{ textAlign: "left", fontSize: "17.5px" }}>
                                        <b>Data Diri Anda</b>
                                    </h5>

                                    <Row>
                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Nama Lengkap
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-url"
                                                    aria-describedby="basic-addon3"
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Nama Panggilan
                                            </label>
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-url"
                                                    aria-describedby="basic-addon3"
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Email
                                            </label>
                                            <div className="input-group">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label className="input-label" htmlFor="basic-url">
                                                Telepon
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        +
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="62"
                                                    aria-label="62"
                                                    aria-describedby="basic-addon1"
                                                ></input>
                                            </div>
                                        </div>
                                    </Row>

                                    <ReCAPTCHA
                                        className="text-center"
                                        sitekey="6LdEU9saAAAAAAWscR0jnmDBSWohEevM21GYi5f4"
                                    />

                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-lg btn-block btn-register"
                                    >
                                        Register
                                    </button>

                                    <div className="mt-5">
                                        <a className="text-link" href="https://widyaskilloka.com/login">
                                            <i className="mr-2 fa fa-chevron-left font-weigh-bold" aria-hidden="true"></i>
                                            Ke Halaman Login
                                        </a>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;