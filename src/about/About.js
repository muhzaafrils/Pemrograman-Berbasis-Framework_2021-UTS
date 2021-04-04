import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './About.css';

class About extends Component {

    render() {
        return (
            <div className="cart">
                <div className="container">
                    <h1>About Me</h1>
                    <div className="cart-list">
                    <p>Nama: Muhammad Zaafril Sodik</p>
                        <p>NIM: 1841720123</p>
                        <p>Jurusan : Teknologi Informasi</p>
                        <p>Program Studi : Teknik Informatika</p>
                        <p>POLITEKNIK NEGERI MALANG</p>
                        <div className="img-wrp">
                        <img src={`/media/me.jpg`}/>    
                        </div>                                         
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
