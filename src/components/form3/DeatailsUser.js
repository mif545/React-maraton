import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Calender from './Calender';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from '@material-ui/core/Button';
import {saveDeatailsUser} from '../../store/action'
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  MuiSvgIcon: {
    root: {
        width: 18,
        height: 18,
    },
},
root2: {
  height: "50%",
  flexGrow: 1,
  maxWidth:"100%",
},
}));

const Deatails=(props)=> {
    let [firstName,setFirstname]=useState(props.user.firstName);
    let [lastName,setLastName]=useState(props.user.lastName);
    let [sex,setSex]=useState(props.user.sex);
    let [dateOfBirth,setDateOfBirth]=useState(props.user.dateOfBirth);
    let [postalCode,setPostalCode]=useState(props.user.postalCode);
    let [city,setCity]=useState(props.user.city);
    let [addres,setAddres]=useState(props.user.addres);
    let [mail,setMail]=useState(props.user.mail);
    let [phone,setPhone]=useState(props.user.phone);
    // let [fields,setFileds]=useState();
    // let [errorsEmail,setErrorsEmail]=useState("");
    
     
    const classes = useStyles();
   //change valus in textFiled by name when inserted value
    const handleInputChange=(e) =>{
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
     
      switch (name){
        case("firstName"):{
          setFirstname(value);
          console.log(value)
          break;
        }
        case("lastName"):{
          setLastName(value);
          break;
        }
        case("sex"):{
          setSex(value);
          break;
        }
        case("dateOfBirth"):{
          setDateOfBirth(value);
          break;
        }
        case("postalCode"):{
          setPostalCode(value)
          break;
        }
        case("city"):{
          setCity(value);
          break;
        }
        case("addres"):{
          setAddres(value)
          break;
        }
        case("mail"):{
          setMail(value);
          break;
        }
        default:{
          setPhone(value);
         
        }
      }
   
    }
   //send deatails user to redux
    const deatailsUser=()=>{
     
      const deatailsUser={"firstName":firstName,
                           "lastName":lastName,
                           "sex":sex,
                           "dateOfBirth":dateOfBirth,
                           "city":city,
                           "postalCode":postalCode,
                           "addres":addres,
                           "mail":mail,
                           "phone":phone
                          }
    props.saveDeatailsUser(deatailsUser);
    //show form deatailsMaraton 
    props.changeDisplayMaraton();
    }
  
    
   
    return (  

  <TreeView
      className={classes.root2}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      style={{direction:"rtl",border:"1 solid black",width:"90%",marginLeft:"5%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}} noValidate autoComplete="off"
    >
    <TreeItem nodeId="1" label="פרטים אישיים" style={{marginBottom:"3%"}} > 
       <TextField required id="standard-required" label="שם פרטי"  name="firstName" value={firstName} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%",marginTop:"3%"}} />
       <TextField required id="standard-required" label="שם משפחה"  name="lastName" value={lastName} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%",marginTop:"3%"}}/>
       <FormControl className={classes.formControl} style={{width:"40%",direction:"rtl",marginRight:"5%",marginBottom:"3%",float:"right"}}>
        <InputLabel  htmlFor="age-native-simple">מין*</InputLabel>
        <Select
          native
          value={sex} 
          onChange={handleInputChange}
          inputProps={{
            name: 'sex',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"זכר"}>זכר</option>
          <option value={"נקבה"}>נקבה</option>
        </Select>
      </FormControl>
      <Calender name="dateOfBirth" date={dateOfBirth} handleInputChange={handleInputChange}/>
       <TextField required id="standard-required" label="עיר מגורים " name="city" value={city} onChange={handleInputChange}  style={{width:"40%",direction:"rtl",marginLeft:"50%",marginBottom:"3%"}} />
       <TextField required id="standard-required" label="מיקוד"      name="postalCode" value={postalCode} onChange={handleInputChange}  style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%"}}/>
       <TextField required id="standard-required" label="רחוב ומספר"  name="addres" value={addres} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%"}}/> 
       <TextField required id="standard-required" label="כתובת מייל "  name="mail" value={mail}  onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"8%"}}/>
       <TextField required id="standard-required" label="טלפון נייד"  name="phone" value={phone} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"8%"}}/>
        <div style={{marginBottom:"5%"}}>
        <Button onClick={deatailsUser} variant="contained" color="primary" >הבא</Button>    
        <Button onClick={props.handleBack} className={classes.backButton}>הקודם</Button>
        </div>  
   </TreeItem> 
  </TreeView>   
    );
  }
  const mapDispachToProps=(dispach)=>{
    return {
      user:dispach.deatailsUser
    } ;
  }
  export default  connect(mapDispachToProps,{saveDeatailsUser})(Deatails);