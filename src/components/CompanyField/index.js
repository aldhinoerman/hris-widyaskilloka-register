import React, { Component } from 'react';
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
                <select className="form-control input-lg">
                    {
                        this.state.data.map(v => {
                            return <option key={v.id}>
                                {v.name}
                            </option>
                        })
                    }

                </select>
            </div>
        )
    }
}

export default Company;