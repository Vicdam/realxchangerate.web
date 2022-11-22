import {Box, Typography} from "@mui/material"

export const RowComponent = ({country,bank,parallel})=>{
    return(
      <Box display="flex" justifyContent="space-between" height="45px" alignItems="center" fontSize="18px"  borderBottomColor="gray" width="100%" sx={{ borderBottom: 1,borderColor: 'grey.500' }}>
        {country}
        <Typography>{bank}</Typography>
        <Typography>{parallel}</Typography>
      </Box>
    )
  }
  
export const MobileRowComponent = ({country,rate})=>{
    return(
      <Box display="flex" justifyContent="space-between" height="45px" alignItems="center" fontSize="18px"  borderBottomColor="gray" width="100%" sx={{ borderBottom: 1,borderColor: 'grey.500' }}>
        {country}
        <Typography>{rate}</Typography>
      </Box>
    )
  }

export const RowHeaderComponent = () =>{
    return (
      <Box width="100%" backgroundColor="#F8FAFC" display="flex" fontSize="18px" height="44px" justifyContent="space-between" alignItems="center">
          <Typography>Country</Typography>
          <Typography sx={{paddingLeft:"64px"}}>Bank Rates</Typography>
          <Typography>Parallel Rates</Typography>
      </Box>
    )
  }

export const MobileRowHeaderComponent = ({rate}) =>{
    return (
      <Box width="100%" backgroundColor="#F8FAFC" display="flex" fontSize="18px" height="44px" justifyContent="space-between" alignItems="center">
          <Typography>Country</Typography>
          
          <Typography>{rate}</Typography>
      </Box>
    )
  }