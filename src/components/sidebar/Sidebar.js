import React from 'react';
import {
    Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon,
    ListItemText, styled, useTheme
} from '@mui/material';
import { ChevronLeft, ChevronRight, Inbox, Mail } from '@mui/icons-material';
import { DrawerHeader } from '../UI/DrawerHeader/DrawerHeader.js';
import { useNavigate } from 'react-router-dom';

const openedMixin = (theme) => ({
    width: 240,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${ theme.spacing(7) } + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${ theme.spacing(8) } + 1px)`
    }
});

const DrawerUI = styled(Drawer,
    { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: 240,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme)
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme)
        })
    })
);

type Props = {
    sidebarName: [],
    open: boolean,
    setOpen: Function,
    setTitle: Function,
}
export default function Sidebar(props: Props) {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleDrawerClose = () => {
        props.setOpen(!props.open);
    };
    
    const handlePage = (routeInfo) => {
        props.setTitle(routeInfo.text);
        
        navigate(routeInfo.url);
    };
    
    return (
        <DrawerUI variant='permanent' open={ props.open }>
            <DrawerHeader>
                <IconButton onClick={ handleDrawerClose }>
                    { theme.direction === 'rtl' ? <ChevronRight/> :
                        <ChevronLeft/> }
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>{
                props.sidebarName.map(
                    (value, index) => (
                        <ListItem key={ index } disablePadding
                                  sx={ { display: 'block' } }>
                            <ListItemButton
                                onClick={ () => handlePage(value) }
                                sx={ {
                                    minHeight: 48,
                                    justifyContent: props.open
                                        ? 'initial'
                                        : 'center',
                                    px: 2.5
                                } }
                            >
                                <ListItemIcon
                                    sx={ {
                                        minWidth: 0,
                                        mr: props.open ? 3 : 'auto',
                                        justifyContent: 'center'
                                    } }
                                >
                                    { index % 2 === 0 ? <Inbox/> :
                                        <Mail/> }
                                </ListItemIcon>
                                <ListItemText primary={ value.text }
                                              sx={ {
                                                  opacity: props.open
                                                      ? 1
                                                      : 0
                                              } }/>
                            </ListItemButton>
                        </ListItem>
                    )) }
            </List>
        </DrawerUI>
    );
}
