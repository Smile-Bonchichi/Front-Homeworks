import React, { useEffect, useState } from 'react';
import axios from '../../../axios/index.js';
import Photo from './photo/Photo.js';

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);
    
    const getPhotos = () => {
        axios.get('/photos').then((res) => {
            setPhotos(res);
        });
    };
    
    useEffect(() => {
        getPhotos();
    }, []);
    
    return (
        <div className='photo-list'>
            <Photo photos={ photos }/>
        </div>
    );
}
