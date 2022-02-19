import React,{useState ,useEffect} from 'react'
import {Typography,Button,Container, FormControlLabel, FormLabel, FormControl} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { Navigate, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  Button: {
    fontSize: "60 px !important",
    backgroundColor: 'black !important',
    '&:hover': {
      background: 'blue !important'
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: '100px',
  },
  field:{
    display:'block !important',
    marginTop:'20px !important' ,
    marginBottom:'20px !important',
  }
})


export default function Create(props) {
  const navigate=useNavigate()
  
  const classes = useStyles(props)
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }
    if (title && details) {
     fetch("http://localhost:8000/notes",{
       method:'POST',
       headers:{"content-type":"application/json"},
       body:JSON.stringify({title,details,category})
     }).then(()=>navigate('/'))
  }
  }

  return (
    <Container size="sm">
      <Typography 
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField sx={{
           width:'100%',
           
        }}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        {/* <Radio value="hello" />
        <Radio value="goodbye" /> */}

        <FormControl className={classes.field} >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
        className={classes.Button}
        display="block"
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>

      
    </Container>
  )
}