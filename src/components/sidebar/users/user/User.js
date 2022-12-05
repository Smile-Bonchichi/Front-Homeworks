import * as React from 'react';
import {
    Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography
} from '@mui/material';

type Props = {
    user: {
        username: string,
        name: string,
        email: string
    },
};
export default function User(props: Props) {
    return (
        <List sx={ {
            width: '100%', maxWidth: 360
        } }>
            <ListItem alignItems='center'>
                <ListItemAvatar>
                    <Avatar
                        alt={ `${ props.user.username }` }
                        src={ `../../asserts/img/users/${ props.user.username }` }/>
                </ListItemAvatar>
                <ListItemText
                    primary={ `${ props.user.username }` }
                    secondary={ <React.Fragment>
                        <Typography
                            sx={ {
                                display: 'inline'
                            } }
                            component='span'
                            variant='body2'
                            color='text.primary'
                        >
                            { props.user.name }
                        </Typography>
                        <> { props.user.email } </>
                    </React.Fragment> }
                />
            </ListItem>
        </List>
    );
}