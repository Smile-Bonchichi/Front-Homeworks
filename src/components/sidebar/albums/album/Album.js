import * as React from 'react';
import {
    Avatar, List, ListItem, ListItemAvatar, ListItemText
} from '@mui/material';

type Props = {
    album: {
        image: string,
        title: string
    },
};
export default function Album(props: Props) {
    return (
        <List sx={ {
            width: '100%', maxWidth: 360
        } }>
            <ListItem alignItems='center'>
                <ListItemAvatar>
                    <Avatar
                        alt={ `${ props.album.title }` }
                        src={ `../../asserts/img/users/${ props.album.image }` }/>
                </ListItemAvatar>
                <ListItemText
                    primary={ `${ props.album.title }` }
                    secondary={
                        <React.Fragment>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}