import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ShirtSize from './ShirtSize';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { connect } from 'react-redux';
import {saveDeatailsMaratonUser} from '../../store/action'


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

const  DeatailsMaraton=(props)=>{
    let [runningGroup,setRunningGroup]=useState(props.user.runningGroup);
    let [nickname,setNickname]=useState(props.user.nickname);
    let [targetTime,setTargetTime]=useState(props.user.targetTime)
    let [registrationCode,setRegistrationCode]=useState(props.user.registrationCode)
    let [jerusalemite,setJerusalemite]=useState(props.user.jerusalemite);
    let [newcomer,setNewcomer]=useState(props.user.newcomer);
    let [shirtSize,setShirtSize]=useState([]);
    
    
    const classes = useStyles();
    //change valus in textFiled by name when inserted value
    const handleInputChange=(e) =>{
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
     
      switch (name){
        case("runningGroup"):{
          setRunningGroup(value);
          
          break;
        }
        case("nickname"):{
          setNickname(value);
          break;
        }
        case("targetTime"):{
          setTargetTime(value);
          break;
        }
        case("registrationCode"):{
          setRegistrationCode(value);
          break;
        }
        case("jerusalemite"):{
          setJerusalemite(value);
          setNewcomer(!value);
          break;
        }
        case("newcomer"):{
          setNewcomer(value);
          setJerusalemite(!value);
          break;
        }
        default:{
         let arr=shirtSize;
         arr.push(value)
          setShirtSize(arr);
         
        }
      }
   
    }
    //send deatails maraton to redux
    const deatailsMaratonUser=()=>{
     
      const deatailsMaratonUser={"runningGroup":runningGroup,
                           "nickname":nickname,
                           "targetTime":targetTime,
                           "registrationCode":registrationCode,
                           "jerusalemite":jerusalemite,
                           "newcomer":newcomer,
                           "shirtSize":shirtSize
                          }
    props.saveDeatailsMaratonUser(deatailsMaratonUser);
    //show form rulls
    props.changeDisplayRulls();
    
    }
  
   
    return (    
       <TreeView
          className={classes.root2}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
          style={{direction:"rtl",border:"1 solid black",width:"90%",marginLeft:"5%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}} noValidate autoComplete="off"
        >
          <TreeItem nodeId="1" label="פרטי המרוץ" style={{marginBottom:"3%"}} > 
            <TextField required id="standard-required" label="מועדון/קבוצת ריצה"  name="runningGroup" value={runningGroup} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%",marginTop:"3%"}} />
            <TextField required id="standard-required" label="כינוי שיודפס על מס' חוזה"  name="nickname" value={nickname} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"5%",marginTop:"3%"}}/>
            <FormControl className={classes.formControl} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%"}}>
              <InputLabel htmlFor="age-native-simple">זמן מטרה*</InputLabel>
              <Select
                native
                name="targetTime"
                value={targetTime}
                onChange={handleInputChange} 
              >
                <option aria-label="None" value="" />
                <option value="30-34">30-34</option>
                <option value="35-40">35-40</option>
                <option value="41-45">41-45</option>
                <option value="46-50">46-50</option>
                <option value="51-55">51-55</option>
                <option value="56-60">56-60</option>
                <option value="61-65">61-65</option>
                <option value="66-70">66-70</option>
                <option value="71-80">71-80</option>
                <option value={"80 ומעלה"}>80 ומעלה</option>
              </Select>
            </FormControl>
            <TextField required id="standard-required" label="קוד רישום אם קיים" name="registrationCode" value={registrationCode} onChange={handleInputChange}  style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%" }} />
            <Button variant="contained"  style={{backgroundColor:"grey",color:"black",marginRight:"60%",marginBottom:"3%",marginLeft:"20%"}}>
                    בדוק קוד
            </Button>      
              <FormControlLabel style={{width:"40%",direction:"rtl",marginRight:"0%",marginBottom:"3%" }}
              control={
                <Checkbox 
                name="jerusalemite"
                onChange={handleInputChange}
                color="primary"
                />
              }
              label="מחזיק כרטיס ירושלמי"
            />
              <FormControlLabel  style={{width:"40%",direction:"rtl",marginBottom:"3%" }}
              control={
                <Checkbox  
                  name="newcomer" 
                  onChange={handleInputChange}
                  color="primary"
                />
              }
              label="מסלול עולה חדש (תאריך עלייה 1.1.2019 ואילך)
              "
            />
           
           <ShirtSize name="shirtSize" shirtSize={shirtSize} handleInputChange={handleInputChange} num={props.numUsers}/>
         
        <div style={{marginBottom:"5%",marginTop:"3%"}}>
          <Button onClick={deatailsMaratonUser} variant="contained" color="primary" >הבא</Button>    
          <Button  className={classes.backButton} onClick={props.changeDisplayFalseMaraton}>הקודם</Button>
        </div>
       
          </TreeItem> 
         </TreeView>
    );
  }
  const mapDispachToProps=(dispach)=>{
    return {
      user:dispach.deatailsMaratonUser,
      numUsers:dispach.kindMaraton.numUsers
    } 
  }

  export default  connect(mapDispachToProps,{saveDeatailsMaratonUser})(DeatailsMaraton)

