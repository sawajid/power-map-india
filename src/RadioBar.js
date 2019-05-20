import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { PlantTypeContext } from "./PlantTypeContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

const RadioBar = () => {
  const classes = useStyles();
  const [state, setState] = useContext(PlantTypeContext);

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Plant Type</FormLabel>
        <RadioGroup aria-label="PlantType" name="plantType"
          value={state.plantType} onChange={(e) => setState(state => ({ ...state, plantType: e.target.value }))} row>
          <FormControlLabel value="hydel" control={<Radio />} label="Hydel" />
          <FormControlLabel value="nuclear" control={<Radio />} label="Nuclear" />
          <FormControlLabel value="thermal" control={<Radio />} label="Thermal" />
          <FormControlLabel value="cpp" control={<Radio />} label="CPP" />
          <FormControlLabel value="gt" control={<Radio />} label="GT" />
          <FormControlLabel value="dg" control={<Radio />} label="DG" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioBar;