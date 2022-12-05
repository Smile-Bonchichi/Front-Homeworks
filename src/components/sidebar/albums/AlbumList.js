import React, { useEffect, useState } from 'react';
import axios from '../../../axios/index.js';
import Album from './album/Album.js';

function AlbumList() {
    const [albums, setAlbums] = useState([]);
    
    const getAlbums = () => {
        axios.get('/albums').then((res) => {
            setAlbums(res);
        });
    };
    
    useEffect(() => {
        getAlbums();
    }, []);
    
    return (
        <>
            {
                albums.map(a => {
                    return <Album key={ a.id } album={ a }/>;
                })
            }
        </>
    );
}

export default AlbumList;