import * as React from 'react';
import {
    Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography
} from '@mui/material';

type Props = {
    todo: {
        title: string,
        completed: boolean,
    },
};
export default function Todo(props: Props) {
    return (
        <List sx={ {
            width: '100%', maxWidth: 360
        } }>
            <ListItem alignItems='center'>
                <ListItemAvatar>
                    <Avatar
                        alt={ `${ props.todo.title }` }
                        src={ `../../asserts/img/users/${ props.todo.title }` }/>
                </ListItemAvatar>
                <ListItemText
                    primary={ `${ props.todo.title }` }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={ {
                                    display: 'inline'
                                } }
                                component='span'
                                variant='body2'
                                color='text.primary'
                            >
                                { props.todo.completed
                                    ? 'Выполнено'
                                    : 'Не выполнено' }
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}