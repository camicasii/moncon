import { useState } from "react";
import { useHistory } from "react-router";
import {
  InputAdornment,
  Grid,
  Typography,
  makeStyles,
  Avatar,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Container,
} from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import Spinner from "./Spinner";
import IconDocuments from "../../../Assets/svg/IconDocuments";
import { CREDENTIAL_SUPPORT_ZKP, CONDITION_TYPE_TO_CREDENTIAL } from "../../../Constants";
import { countries, ageConditions } from "./credentialsData";

const useStyles = makeStyles((theme) => ({
  containerAddUrl: {
    padding: 20,
    marginBottom: 30,
  },
  input: {
    textAlign: "center",
    borderRadius: "99px",
    background: "#fff",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    borderColor: "#fff",
    padding: "12px 21px 14px",
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
    width: theme.spacing(17),
    height: theme.spacing(8),
  },
  cardContainer: {
    backgroundColor: "rgba(255,255,255,1)",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    borderRadius: ".5rem",
    height: "auto",
    marginTop: "15px",
    width: "auto",
    flexDirection: "column",
    textAlign: "center",
    margin: "0 40px",
    "@media screen and (min-width: 1024px)": {
      padding: "1.25rem",
      height: "auto",
      width: "auto",
      display: "flex",
      flexDirection: "row",
      textAlign: "left",
      margin: "0 14em",
      borderRadius: ".5rem",
    },
  },
  container: {
    marginTop: "50px",
    padding: "0 80px",
    display: "flex",
    alignSelf: "center",
    justifySelf: "center",
  },

  buttonLook: {
    margin: "0px 0px 0px 12px",
    borderRadius: "99em",
    fontSize: "14px",
    fontWeight: 600,
    padding: "12px 41px 14px",
    background: "rgb(25, 25, 25)",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(51,51,51,1)",
      boxShadow: "none",
    },
  },
  previewtitle: {
    fontWeight: "600 !important",
    wordBreak: "break-all",
    lineHeight: "21px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
    background: "#fff",
    padding: "0px 10px",
    borderColor: "#fff",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  textField: {
    fontSize: "16px",
    borderRadius: "99px",

    height: "5em",
    width: "5em",
  },
  boxSelect: {
    marginRight: "10px",
    "@media screen and (max-width: 800px)": {
      marginRight: "0em",
    },
  },
  itemImage: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  priceSpace: {
    display: "flex",
    justifySelf: "right",
    marginRight: "27em",
    "@media screen and (max-width: 800px)": {
      marginRight: "10em",
    },
  },
  domainLink: {
    wordBreak: "break-all",
    fontSize: "16px",
    color: "#828282",
    textDecoration: "underline",
    "@media screen and (max-width: 768px)": {
      fontWeight: 500,
      fontSize: "1rem",
    },
  },
  cardSection: {
    "@media screen and (min-width: 1024px)": {
      display: "flex",
    },
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
  },
  cardImage: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    "@media screen and (min-width: 1024px)": {
      width: "16.666667%",
    },
  },
  cardContent: {
    width: "100%",
    padding: "1.25rem 2.25rem",
    textAlign: "center",
    "@media screen and (min-width: 1024px)": {
      width: "91.666667",
      padding: "0.5rem",
      display: "flex",
      alignSelf: "center",
      justifySelf: "center",
      textAlign: "left",
    },
  },
  textTitle: {
    cursor: "pointer",
    wordBreak: "break-all",
    fontWeight: "600 !important",
    lineHeight: "21px",
    color: "rgba(0, 0, 0, 0.87) !important",
    fontSize: "21px",
    "@media screen and (max-width: 800px)": {
      fontSize: "1.4rem",
    },
  },

  cardItem: {
    width: "100%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
    textAlign: "center",
    "@media screen and (min-width: 1024px)": {
      flexDirection: "row",
      width: "33.333333%",
      paddingTop: "1.55rem",
      paddingLeft: 0,
      paddingRight: 0,
      alignSelf: "center",
      justifySelf: "center",
    },
  },
}));

const PreviewUrl = ({ previewUrl, addUrl, loading, stripeAccountId }) => {

  const classes = useStyles();
  const [amount, setAmount] = useState(0);
  const [conditionType, setConditionType] = useState("");
  const [condition, setCondition] = useState("");
  const [verification_type,setVerificationType] = useState("");
  const [openConditionType, setOpenConditionType] = useState(false);
  const [openCondition, setOpenCondition] = useState(false);
  const [openVerification, setOpenVerification] = useState(false);
  const NO_CREDENTIAL = "NO_CREDENTIAL";
  const AGE = "age";
  const NATIONALITY = "nationality";
  const LEGAL_AGE = "LEGAL_AGE";
  const UNDERAGE = "UNDERAGE";
  const ZKP = 'zkp';
  const W3C = 'w3c';
  const history = useHistory();
  const { addToast } = useToasts();

  const conditionTypeToData = {
    [NATIONALITY]: countries,
    [AGE]: ageConditions,
  };

  const conditionTypeToStyles = {
    [NATIONALITY]: {
      marginLeft:"5em",
      marginRight:"12.5em",
    },
    [AGE]:{
      marginLeft:"5.5em",
      marginRight:"17.5em",
    },
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const errOptions = {
    appearance: "error",
    autoDismiss: true,
    autoDismissTimeout: 2500,
  }

  const handleBlockClick = () => {
    let localAmount = String(amount).replace(",", ".");

    if (!stripeAccountId) {
      addToast("You must create a stripe account to be able to loock content",errOptions);
      return history.push("/publishers/settings");
    }
    if (isNaN(localAmount)) {
      return addToast("The price should contain only numbers",errOptions);
    }
    if (amount == 0 && (condition === "" || condition === NO_CREDENTIAL)) {
      addToast(
        "you should have a price greater than 0 or ask a credential to block the content",
        errOptions
      );
      return;
    }

    if(!condition && conditionType && conditionType != NO_CREDENTIAL){
      return addToast(
        `You should select a condition or change the condition to be meet to don't require condition`,
        errOptions
      );
    }

    let info = Object(previewUrl);

    info.amount = parseFloat(localAmount);
    info.conditionType = conditionType;
    info.condition = condition;
    info.verification_type = verification_type;
    addUrl(info);
    setAmount(0);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleConditionTypeChange = (event) => {
    setConditionType(event.target.value);
  };

  const handleVerificationType = (event) => {
    setVerificationType(event.target.value);
  }

  const handleCloseConditionType = () => {
    setOpenConditionType(false);
  };

  const handleOpenConditionType = () => {
    setOpenConditionType(true);
  };

  const handleCloseCondition = () => {
    setOpenCondition(false);
  };

  const handleOpenCondition = () => {
    setOpenCondition(true);
  };

  const handleCloseVerification = () => {
    setOpenVerification(false);
  };

  const handleOpenVerification = () => {
    setOpenVerification(true);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid>
            <div className={classes.cardContainer}>
              <div className={classes.cardImage}>
                <div style={{ textAlign: "center" }}>
                
                    <Grid className={classes.imageFallback}>
                      <IconDocuments
                        height={"4em"}
                        width={"3.5em"}
                        color={"#1c1c1c"}
                      />
                    </Grid>
                
                </div>
              </div>
              <Grid className={classes.cardContent}>
                <Grid container direction="column">
                  <Grid item xs={12}>
                    <Typography
                      variant="caption"
                      gutterBottom
                      display="inline"
                      className={classes.domainLink}
                    >
                      {previewUrl.domain}
                    </Typography>
                    <Typography className={classes.previewtitle} variant="h5">
                      {previewUrl.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid></Grid>

          <Box
            className={classes.container}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box className={classes.priceSpace}>
              <Typography variant="h6">Price</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <TextField
                disableUnderline={false}
                className={classes.textField}
                placeholder="0"
                InputProps={{
                  disableUnderline: true,
                  className: classes.input,
                  endAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
                error={isNaN(amount) || amount < 0}
                value={amount}
                fullWidth
                onChange={handleAmountChange}
              />
            </Box>
          </Box>

          <Box
            className={classes.container}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              className={classes.boxSelect}
              style={{
                display: "flex",
                alignSelf: "center",
                marginLeft: "5em",
                marginRight: "7.90em",
                justifySelf: "end",
              }}
            >
              <Typography variant="h6">Select condition must meet</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openConditionType}
                  onClose={handleCloseConditionType}
                  onOpen={handleOpenConditionType}
                  value={conditionType}
                  onChange={handleConditionTypeChange}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value={AGE}>Age</MenuItem>
                  <MenuItem value={NATIONALITY}>Nationality</MenuItem>
                  <MenuItem value={NO_CREDENTIAL}>
                    Don't require condition
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {
            conditionType != "" && conditionType != NO_CREDENTIAL &&
              <Box
                className={classes.container}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  className={classes.boxSelect}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    marginLeft: conditionTypeToStyles[conditionType].marginLeft,
                    marginRight: conditionTypeToStyles[conditionType].marginRight,
                    justifySelf: "end",
                  }}
                >
                  <Typography variant="h6">
                    {
                      `${conditionType.slice(0,1).toUpperCase()}${conditionType.slice(1)} condition`
                    }
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifySelf: "center",
                  }}
                >
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={openCondition}
                      onClose={handleCloseCondition}
                      onOpen={handleOpenCondition}
                      value={condition}
                      onChange={handleConditionChange}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {
                        conditionTypeToData[conditionType]?.map((data) => (
                          <MenuItem value={data.value}>{data.name}</MenuItem>
                        ))

                      }
                    </Select>
                  </FormControl>
                </Box>
                </Box>
          }
            {
              CREDENTIAL_SUPPORT_ZKP.includes(CONDITION_TYPE_TO_CREDENTIAL[conditionType]) &&
                condition &&
                <Box
                  className={classes.container}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    className={classes.boxSelect}
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      marginLeft: "5em",
                      marginRight: "7.9em",
                      justifySelf: "end",
                    }}
                  >
                    <Typography variant="h6">Credential verification method</Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      justifySelf: "center",
                      marginLeft: "-3em",
                    }}
                  >
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-controlled-open-select-label"></InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openVerification}
                        onClose={handleCloseVerification}
                        onOpen={handleOpenVerification}
                        value={verification_type}
                        onChange={handleVerificationType}
                      >
                        <MenuItem value="">
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem value={ZKP}>zkp</MenuItem>
                        <MenuItem value={W3C}>w3c</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
              </Box>

            }

          <Grid
            style={{ marginTop: "60px", marginBottom: "20px" }}
            container
            justify="center"
          >
            <div
              variant="contained"
              component="span"
              color="primary"
              onClick={handleBlockClick}
              className={classes.buttonLook}
            >
              Lock Content
            </div>
          </Grid>
        </>
      )}
    </>
  );
};
export default PreviewUrl;
