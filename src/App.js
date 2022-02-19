import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

import { grey, purple } from '@mui/material/colors';
import Layout from './components/Layout';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})
 
function App() {
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
       <Layout >
      <Routes>
        <Route path="/"
         element={<Notes />}
        />
        <Route path="/create"
         element={<Create />}
        />
      </Routes></Layout>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
