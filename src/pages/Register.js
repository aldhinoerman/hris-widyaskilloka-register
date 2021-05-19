import React from 'react';
import Logo from '../assets/img/logo-widya-skilloka.png';
import Company from '../components/CompanyField';
import { Card, CardGroup, Col, Container, Row, Form, InputGroup, Button } from 'react-bootstrap';
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

                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="namaPerusahaan">
                                                    Nama Perusahaan
                                                </Form.Label>
                                                <Form.Control
                                                    label='Nama Perusahaan'
                                                    type='text'
                                                    id="namaPerusahaan"
                                                    name='namaPerusahaan'
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="websitePerusahaan">
                                                    Website Perusahaan
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    label="Website Perusahaan"
                                                    id="websitePerusahaan"
                                                    name="websitePerusahaan"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="noPerusahaan">
                                                    Nomor Telepon Perusahaan
                                            </Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="noPerusahaan">
                                                            +
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        label="Nomor Telpon Perusahaan"
                                                        type="tel"
                                                        placeholder="62"
                                                        id="noPerusahaan"
                                                        name="noPerusahaan"
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>

                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="bidangPerusahaan">
                                                    Bidang Perusahaan
                                            </Form.Label>
                                                <Company />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <hr></hr>

                                    <h5>
                                        <b>Data Diri Anda</b>
                                    </h5>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="namaLengkap">
                                                    Nama Lengkap
                                            </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    label="Nama Lengkap"
                                                    id="namaLengkap"
                                                    name="namaLengkap"
                                                    required
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="namaPanggilan">
                                                    Nama Panggilan
                                            </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    label="Nama Panggilan"
                                                    id="namaPangilan"
                                                    name="namaPanggilan"
                                                    required
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="userEmail">
                                                    Email
                                            </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    label="Email"
                                                    id="userEmail"
                                                    name="userEmail"
                                                    required
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col sm={6}>
                                            <Form.Group>
                                                <Form.Label className="input-label" htmlFor="noUser">
                                                    Telepon
                                            </Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="noUser">
                                                            +
                                                    </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="tel"
                                                        label="Nomor Telepon"
                                                        placeholder="62"
                                                        id="noUser"
                                                        name="noUser"
                                                    ></Form.Control>
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <ReCAPTCHA
                                        className="text-center"
                                        sitekey="6LdRldAaAAAAAKZRCsMMkCz5m40ybek3KY8Pak2t"
                                    />

                                    <Button
                                        type="button"
                                        className="btn btn-secondary btn-lg btn-block btn-register"
                                    >
                                        Register
                                    </Button>

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