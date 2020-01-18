import React, { Component } from 'react';
import 'materialize-css';
import axios from 'axios';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import './index.css';


class App extends Component {

  state = {
    filter: "",
    people: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api')
    .then(res => 
      this.setState({people: res.data, loading: true})
      );
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };


  render() {

    const { filter, people } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = people.filter(person => {
      console.log(person);
      return Object.keys(person).some(key => typeof person[key] === "string" &&
        person[key].toLowerCase().includes(lowercasedFilter)
        
      );
    });
 
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        width: '10%'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        width: '7%'
      },
      {
        title: 'Eye color',
        dataIndex: 'eyeColor',
        key: 'eyeColor',
        width: '9%'
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        width: '11%'
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '17%'
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        width: '17%'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: '21%'
      }
    ];
  
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field grey lighten-4">
                <input id="search" type="search" required  value={filter} onChange={this.handleChange} placeholder="Search"/>
              </div>
            </form>
          </div>
        </nav>
        <div className='braker'>
        </div>
        <Table columns={columns} dataSource={filteredData} rowKey={filteredData => filteredData.email} />
      </div>
    );
    
  }
}

export default App;






