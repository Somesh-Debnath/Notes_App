import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import React from 'react'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { blue } from '@mui/material/colors';
const drawerWidth=220
const useStyles=makeStyles((theme)=>{
    return{
        page: {
            background: '#f9f9f9 !important',
            width: '100% !important',
            padding: 'theme.spacing(2) !important',
            paddingTop:'10px !important'
          },
        root:{
        display:'flex',
    },
    active:{
        background:"#caf0f8 !important"
    },
    title:{
         padding:20
    },
    toolbar:theme.mixins.toolbar
}
}
)
export default function Layout(props) {
    const classes=useStyles(props)
    const navigate=useNavigate()
    const location=useLocation()
    const menuItems=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color="primary"/>,
            path:"/",
            
        },
        {
            text:'Create Note',
            icon:<AddCircleOutlined color="primary"/>,
            path:"/create",
           
        }
    ]
    return (
        <div className={classes.root}>
             <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    },
                }}
                anchor='left'
                variant='permanent'
                >
                    <div>
                        <Typography variant="h6" className={classes.title}
                        sx={{
                            paddingLeft:3
                        }}>
                            Somesh's Notes
                        </Typography>
                    </div>
            <AppBar sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
                background:'#fefefe',
                color:'black'
                }}
            elevation={0}
           position='fixed'>
                <Toolbar>
                    <Typography
                    sx={{
                        flexGrow:1
                    }}>
                           { format(new Date(), "'Today is ' do MMMM y")}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar alt="Mario " src="/static/images/avatar/1.jpg" sx={{
                         marginLeft: 2,
                         bgcolor:blue[500]
                    }}/>
 
                </Toolbar>
                
            </AppBar>
               <List>
                   {menuItems.map(item=>
                   <ListItem
                       button
                       key={item.text}
                       onClick={()=>navigate(item.path)}
                       className={location.pathname === item.path ? classes.active :"null"}
                       >
                           <ListItemIcon>{item.icon}</ListItemIcon> 
                           <ListItemText>{item.text}</ListItemText>
                 </ListItem>
                   )}
               </List>
                </Drawer>
                <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { props.children }
      </div>
    </div>
    )
}
