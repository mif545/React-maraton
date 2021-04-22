import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { connect } from 'react-redux';
import {saveDeatailsRullsUser} from '../../store/action'


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

const  RulesAndPolicies=(props)=> {
    const classes = useStyles();
    let [whyChoose,setWhyChoose]=useState(props.user.whyChoose);
    let [whatExciting,setWhatExciting]=useState(props.user.whatExciting);
    let [acceptTerms,setAcceptTerms]=useState(props.user.acceptTerms);
    let [receivingInformation,setReceivingInformation]=useState(props.user.receivingInformation);
     //change valus in textFiled by name when inserted value
    const handleInputChange=(e) =>{
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
     
      switch (name){
        case("whyChoose"):{
          setWhyChoose(value);
          
          break;
        }
        case("whatExciting"):{
          setWhatExciting(value);
          break;
        }
        case("acceptTerms"):{
          setAcceptTerms(value);
          break;
        }
        default:{
          setReceivingInformation(value);
         
        }
      }
   
    }
    //send deatails terms to redux 
    const saveDeatailsRull=()=>{
      const deatailsRullsUser={
           "whyChoose":whyChoose,
           "whatExciting":whatExciting,
           "acceptTerms":acceptTerms,
           "receivingInformation":receivingInformation
      }
      props.saveDeatailsRullsUser(deatailsRullsUser);
      //movve to next page and move forward with the stepper
      props.handleNext();
    }
    return (    
      <TreeView
        className={classes.root2}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        style={{direction:"rtl",border:"1 solid black",width:"90%",marginLeft:"5%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}} noValidate autoComplete="off"
        >
         <TreeItem nodeId="1" label="תקנון ומדיניות" style={{marginBottom:"3%"}} > 
          <TextField required id="standard-required" label="למה בחרת לרוץ במרתון ירושלים?" name="whyChoose" value={whyChoose} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"3%",marginTop:"3%"}} />
          <TextField required id="standard-required" label="מה מרגש אותך לקראת מרתון ירושלים?" name="whatExciting" value={whatExciting} onChange={handleInputChange} style={{width:"40%",direction:"rtl",marginLeft:"5%",marginBottom:"5%",marginTop:"3%"}}/>
            <div style={{border:"1 solid black",width:"90%",padding:"2%",textAlign:"right",borderRadius:"20px",marginRight:"3%",backgroundColor:"background.paper",boxShadow:"rgb(230 230 230) -1px 2px 3px 3px"}}>
                <p>הצהרה: • אני החתום מטה מצהיר בזאת כי ידוע לי שאני מתעתד להשתתף באירוע ספורט המהווה מאמץ גופני ניכר. אני מצהיר בזאת שהנני בריא וכשיר למרוץ והתאמנתי כיאות לקראתו. אני מבין כי השתתפותי במידה ואיני מוכן גופנית כראוי עלולה לסכן את בריאותי. אם סבלת או הנך חושד כי סבלת במהלך השבוע הסמוך למרוץ ממחלה כלשהי, לרבות חום, הפרעות במערכת העיכול או שיעול, יש להיוועץ ברופא לפני ההשתתפות בפעילות ולקבל אישורו לביצוע המאמץ. •אני מוותר בזאת על כל טענה כלפי הוועדה המארגנת, עיריית ירושלים ומי מטעמה, בכל הנוגע לאחריות לנזק כלשהו שייגרם לי, לרבות נזקי גוף שייגרמו לי טרם המרוץ במהלכו או אחריו, ולרבות נזקי רכוש ו/או אבדן ציוד שייגרמו לי. מוסכם עלי שהגורמים המארגנים יהיו רשאים לקבל כל החלטה הנוגעת לביטול ו/או שינוי כלשהו במועדי המרתון או במסלולים או לביטול מלא ו/או חלקי של המרתון וזאת עקב תנאי מזג אויר שיהיו צפויים לפני המרתון ו/או יתממשו בזמן קיום המרתון ואני מוותר על כל טענה בקשר לכך. אני החתום מטה מתחייב שלא אתבע תביעת נזיקין את הגופים שהוזכרו לעיל. •אני מסכים לכך שמטה המרתון וגורמי החסות של מרתון ירושלים, ועיריית ירושלים, רשאים להשתמש בתצלומים בהם אני מופיע במהלך המרתון, לפניו ובסיומו, לצרכי פרסום ויחסי ציבור וכן יהיו רשאים לשדר את המרתון בחלקו ו/או בשלמותו בכל מדיית שידור קיימת או שתהיה קיימת בעתיד (טלוויזיה, אינטרנט, סלולאר ו/או כל מדיה אחרת) , ללא תמורה</p>
            </div>
            <FormControlLabel style={{direction:"rtl",marginRight:"0%",marginBottom:"3%" }}
            control={
              <Checkbox 
              name="acceptTerms"
              value={acceptTerms}
              onChange={handleInputChange} 
                color="primary"
              />
            }
            label="מאשר מדיניות ותקנון"
          />
          <FormControlLabel  style={{direction:"rtl",marginBottom:"3%" }}
            control={
              <Checkbox 
                onChange={handleInputChange}
                value={receivingInformation}
                name="receivingInformation"
                color="primary"
              />
            }
            label="מאשר קבלת מידע ממרתון ירושלים ומעירית ירושלים"
          />
          <div style={{marginBottom:"5%"}}>
          <Button  variant="contained" color="primary" onClick={saveDeatailsRull} >הבא</Button>    
          <Button  className={classes.backButton} onClick={props.changeDisplayFalseRulls}>הקודם</Button>
          </div>
        </TreeItem> 
      </TreeView>  
    );
  }
  
  const mapDispachToProps=(dispach)=>{
      return{
        user:dispach.deatailsRulls
      }
  }
  export default  connect(mapDispachToProps,{saveDeatailsRullsUser})(RulesAndPolicies);