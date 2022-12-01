import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

type Props = {
    user: {
        username: string,
        name: string,
        email: string
    },
};
export default function User(props: Props) {
    return (
        <List onClick={ props.onClick } sx={ {
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