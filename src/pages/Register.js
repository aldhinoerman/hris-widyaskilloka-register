import React, { useState } from 'react';
import Logo from '../assets/img/logo-widya-skilloka.png';
import Company from '../components/CompanyField';

import { Card, CardGroup, Col, Container, Row, Form, InputGroup, Button, Modal } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { Formik } from 'formik';
import * as yup from 'yup';

import './Register.css';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    namaPerusahaan: yup.string().required(),
    websitePerusahaan: yup.string().required(),
    noPerusahaan: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    bidangPerusahaan: yup.object().required(),
    namaLengkap: yup.string().required(),
    namaPanggilan: yup.string().required(),
    userEmail: yup.string().email().required(),
    noUser: yup.number().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function Register() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                namaPerusahaan: '',
                websitePerusahaan: '',
                noPerusahaan: '',
                bidangPerusahaan: '',
                namaLengkap: '',
                namaPanggilan: '',
                userEmail: '',
                noUser: '',
                terms: false,
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={8} md={9}>
                            <CardGroup>
                                <Card className="register-form">
                                    <Card.Body className="d-flex">
                                        <Form noValidate onSubmit={handleSubmit} style={{ width: '80%' }}>

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
                                                    <Form.Group controlId="validationFormik01">
                                                        <Form.Label className="input-label" htmlFor="namaPerusahaan">
                                                            Nama Perusahaan
                                                </Form.Label>
                                                        <Form.Control
                                                            label='Nama Perusahaan'
                                                            type='text'
                                                            id="namaPerusahaan"
                                                            name='namaPerusahaan'
                                                            value={values.namaPerusahaan}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.namaPerusahaan}
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Isian tidak boleh kosong.
                                                        </Form.Control.Feedback>
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
                                                            value={values.websitePerusahaan}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.websitePerusahaan}
                                                            required
                                                        ></Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            Isian tidak boleh kosong.
                                                        </Form.Control.Feedback>
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
                                                                value={values.noPerusahaan}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.noPerusahaan}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Nomor Telepon Tidak Sesuai.
                                                            </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>

                                                <Col sm={6}>
                                                    <Form.Group>
                                                        <Form.Label className="input-label" htmlFor="bidangPerusahaan">
                                                            Bidang Perusahaan
                                                        </Form.Label>
                                                        <Company
                                                            value={values.bidangPerusahaan}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.bidangPerusahaan}
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Isian tidak boleh kosong.
                                                        </Form.Control.Feedback>
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
                                                            value={values.namaLengkap}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.namaLengkap}
                                                            required
                                                        ></Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            Isian tidak boleh kosong.
                                                        </Form.Control.Feedback>
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
                                                            value={values.namaPanggilan}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.namaPanggilan}
                                                            required
                                                        ></Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            Isian tidak boleh kosong.
                                                        </Form.Control.Feedback>
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
                                                            value={values.userEmail}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.userEmail}
                                                            required
                                                        ></Form.Control>
                                                        <Form.Control.Feedback type="invalid">
                                                            Isian tidak boleh kosong.
                                                        </Form.Control.Feedback>
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
                                                                value={values.noUser}
                                                                onChange={handleChange}
                                                                isInvalid={!!errors.noUser}
                                                                required
                                                            ></Form.Control>
                                                            <Form.Control.Feedback type="invalid">
                                                                Nomor Telepon Tidak Sesuai.
                                                        </Form.Control.Feedback>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group>
                                                <ReCAPTCHA
                                                    id="terms"
                                                    className="text-center recaptcha"
                                                    sitekey="6LcGvNsaAAAAAK8cQAiqKMtfxirOPb6BM61jr1bx"
                                                />
                                            </Form.Group>

                                            <Button
                                                type="submit"
                                                className="register-submit mt-3 btn-secondary"
                                                style={{ width: '100%', padding: '10px 0', color: '#fff', backgroundColor: '#335877' }}
                                                onClick={handleShow}
                                            >
                                                Register
                                            </Button>

                                            <Modal show={show} onHide={handleClose} animation={false}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Sukses</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                            <div className="mt-5">
                                                <a className="text-link" href="https://widyaskilloka.com/login">
                                                    <i class="fas fa-chevron-left"></i>
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
        </Formik>
    )
}

export default Register;