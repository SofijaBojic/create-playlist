import React, { Component } from "react";
import { FormWraperStyle, FormButtonStyle } from "../Form/Form.style";
import { Grid, GridElement } from "../../styles/grid";
import { Heading1 } from "../Text/Text.style";

class Form extends Component<IFormProps, IFormState> {
  initState: IFormState = {
    file: "",
    image: "",
    title: ""
  }
  state: IFormState = this.initState;

  handleClick = (event: any): void => {
    event.preventDefault && event.preventDefault();
    const { file, image, title } = this.state;
    if (file !== "" && image !== "" && title !== "") {
      this.props.addVideo({ file, image, title });
      this.setState(this.initState);
    }
  };

  handleInputChange = (event: { target: { value: string, name: string } }): void => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { file, image, title } = this.state;
    return (
      <>
        <FormWraperStyle onSubmit={(event: any) => this.handleClick(event)} noValidate>
          <Grid>
            <GridElement lgColumn="1 / 13" mdColumn="1 / 13" smColumn="1 / 7">
              <Heading1>Add video to playlist</Heading1>
              <input
                data-testid="form_file"
                name="file"
                type="text"
                placeholder="FILE URL"
                value={file}
                onChange={event => this.handleInputChange(event)}
                required
              />
              <input
                data-testid="form_image"
                name="image"
                type="text"
                placeholder="IMAGE URL"
                value={image}
                onChange={event => this.handleInputChange(event)}
                required
              />
              <input
                data-testid="form_title"
                name="title"
                type="text"
                placeholder="VIDEO TITLE"
                value={title}
                onChange={event => this.handleInputChange(event)}
                required
              />
              <FormButtonStyle type="submit" data-testid="form_button">
                Click
              </FormButtonStyle>
            </GridElement>
          </Grid>
        </FormWraperStyle>
      </>
    );
  }
}

export default Form;
