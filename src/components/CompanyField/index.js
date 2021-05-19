import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../../pages/Register.css'
import axios from 'axios';

class Company extends Component {

    state = {
        data: []
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://widyaskilloka.com/api/v1/master/company-types')
                .then(result => {
                    resolve(result.data)
                }, error => {
                    reject(error)
                });
        });
    };

    componentDidMount = async () => {
        const data = await this.getData();
        this.setState({
            data: data.data
        })

    }

    render() {
        return (
            <div>
                <Form.Control as="select" id="bidangPerusahaan">
                    {
                        this.state.data.map(v => {
                            return <option key={v.id} className="company">
                                {v.name}
                            </option>
                        })
                    }
                </Form.Control>
            </div >
        )
    }
}

export default Company;