import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, IconButton, makeStyles, Typography } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { yellow, green, pink, blue } from '@mui/material/colors'
import clsx from 'clsx';
const useStyles = (note)=>{
  switch(note.category){
    case "todos":
      return yellow[700];
      break;
      case "reminders":
        return blue[500];
        break;
      case "money":
        return pink[600];
        break;
      default:
        return green[500];
 }
    };
  export default function NoteCard({note,handleDelete}) {
      return (
        <div>
            <Card elevation={1} >
                <CardHeader 
                avatar={
                  <Avatar sx={{
                    bgcolor:useStyles(note)
                    
                  }}>
                    {note.category[0].toUpperCase()}
                  </Avatar>}
               action={ <IconButton onClick={()=>handleDelete(note.id)} >
                <DeleteOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
            classes
            />
            
            <CardContent>
                <Typography variant="body2" color='textSecondary'>
                    {note.details}
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}
