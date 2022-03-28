import {
  Container,
  Typography,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { red, blue, green } from "@mui/material/colors";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const deconstructedProductInformation = props.productInformation;
  const [selectedValue, setSelectedValue] = useState("a");
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  let { id } = useParams();

  const product = deconstructedProductInformation?.find(
    (ele) => ele._id === id
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const quantityDropDownSelection = () => {
    let totalQuantityChoices = 99;
    let allTags = [];
    for (let i = 0; i < totalQuantityChoices; i++) {
      allTags.push(<MenuItem value={i}>{i}</MenuItem>);
    }
    return allTags.map(returnDropDownSelections());
  };

  function returnDropDownSelections(number) {
    return number;
  }

  const renderImage = (variable) => {
    return variable[0];
  };

  return (
    <Container
      sx={{ width: 1000, display: "flex" }}
      maxWidth="md"
      xs={12}
      sm={6}
      md={3}
    >
      <Box sx={{ width: "50%" }} marginTop={5} marginRight={2} sm={6}>
        <img
          src={product?.image}
          alt="product-image"
          min-height={300}
          width={300}
        />
      </Box>
      <Container>
        <Box>
          <Typography marginTop={5}>
            <text>{product?.description}</text>
          </Typography>
        </Box>
        <Container marginTop={2}>
          <FormControl marginTop={2}>
            <FormLabel id="demo-row-radio-buttons-group-label">Color</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Black"
                control={<Radio {...controlProps("a")} color="default" />}
                label="Black"
              />
              <FormControlLabel
                value="Red"
                control={
                  <Radio
                    {...controlProps("b")}
                    sx={{
                      color: red[800],
                      "&.Mui-checked": {
                        color: red[600],
                      },
                    }}
                  />
                }
                label="Red"
              />
              <FormControlLabel
                value="Blue"
                control={
                  <Radio
                    {...controlProps("c")}
                    sx={{
                      color: blue[800],
                      "&.Mui-checked": {
                        color: blue[600],
                      },
                    }}
                  />
                }
                label="Blue"
              />
              <FormControlLabel
                value="Green"
                control={
                  <Radio
                    {...controlProps("d")}
                    sx={{
                      color: green[800],
                      "&.Mui-checked": {
                        color: green[600],
                      },
                    }}
                  />
                }
                label="Green"
              />
            </RadioGroup>
          </FormControl>
          <div>
            <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
              Select Quantity
            </Button>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Quantity
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                label="Age"
                onChange={handleChangeAge}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/*quantityDropDownSelection()*/}
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{ display: "inline", mt: 2 }}
              variant="contained"
              color="success"
            >
              Add to Cart
            </Button>
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default Product;
