import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import NoteCard from '../components/NoteCard'
export default function Notes() {
  const [notes,setNotes]=useState([])
  
  useEffect(()=>{
    fetch('http://localhost:8000/notes')
    .then(res=>res.json())
    .then(data=>setNotes(data))

  },[])
  const handleDelete=async (id)=>{
    await fetch(`http://localhost:8000/notes/${id}`,{
      method:'DELETE'
    })
    const newNote=notes.filter(note=>note.id!==id)
    setNotes(newNote)
  }
  return (
    
      <Container>
      <Grid container spacing={3}> 
      {notes.map(note=>(
     <Grid  item key={note.id} xs={12} md={6} lg={4} >
                <NoteCard note={note} handleDelete={handleDelete}/>
     </Grid>
      ))}
      </Grid>
      </Container>
   
  )
}