import React from 'react';
import {
    IconButton, ImageList, ImageListItem, ImageListItemBar
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

type Props = {
    photos: [
        {
            url: string,
            title: string
        }
    ],
};

export default function Photo(props: Props) {
    return (
        <ImageList sx={ 'width: 50vw; height: 50vh' }>
            { props.photos.map((item) => (
                <ImageListItem key={ item.url }>
                    <img
                        src={ `${ item.url }?w=248&fit=crop&auto=format` }
                        srcSet={ `${ item.url }?w=248&fit=crop&auto=format&dpr=2 2x` }
                        alt={ item.title }
                        loading='lazy'
                    />
                    <ImageListItemBar
                        title={ item.title }
                        subtitle={ item.title }
                        actionIcon={
                            <IconButton
                                sx={ { color: 'rgba(255, 255, 255, 0.54)' } }
                                aria-label={ `info about ${ item.title }` }
                            >
                                <InfoIcon/>
                            </IconButton>
                        }
                    />
                </ImageListItem>
            )) }
        </ImageList>
    );
}
