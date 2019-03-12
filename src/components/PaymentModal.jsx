import React from "react";
import styled from "styled-components";
import { Grid, Row } from "react-styled-flexboxgrid";
import {
  CircularProgress,
  Button,
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Typography
} from "@material-ui/core";
import axios, { CancelToken } from "axios";

import { injectStripe, CardElement } from "react-stripe-elements";

const Container = styled(Grid)`
  padding: 1.5rem;
`;

const LoadingContainer = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const PaymentModal = ({
  stripe,
  handleTokenReceived,
  loading,
  setLoading,
  setPaymentError,
  error,
  cancel,
  setCancel,
  slugValid,
  setSlugValidity,
  slug,
  handleRadioChanged
}) => {
  async function handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    setPaymentError(null);
    setLoading(true);

    const { token, error } = await stripe.createToken({ name: "Jenny Rosen" });
    if (error) {
      setPaymentError(error.message);
      setLoading(false);
      return;
    }

    const email = "clio.harper@gmail.com";
    handleTokenReceived(true, token, email);
  }

  async function handleSlugChanged(ev) {
    ev.preventDefault();
    if (cancel) {
      cancel();
    }

    const slug = ev.target.value;

    const { data, error } = await axios.get(
      `http://localhost:3000/exists?slug=${slug}`,
      {
        cancelToken: new CancelToken(function executor(c) {
          setCancel(c);
        })
      }
    );
    if (!error) {
      const { slugAvailable } = data;
      setSlugValidity(slug, slugAvailable);
    }
  }

  function handleChange(ev) {
    ev.preventDefault();
    handleRadioChanged(ev.target.value);
  }

  return (
    <Container fluid>
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Packages</FormLabel>
          <RadioGroup
            aria-label="Packages"
            name="packages"
            onChange={handleChange}
          >
            <FormControlLabel
              value="pdfOnly"
              control={<Radio />}
              label="PDF Download Only"
            />
            <FormControlLabel
              value="pdfAndWebsite"
              control={<Radio />}
              label="PDF + Custom Domain"
            />
            <TextField
              error={!slugValid}
              onChange={handleSlugChanged}
              id="outlined-error"
              label="Your Desired URL"
              defaultValue=""
              margin="normal"
              variant="outlined"
            />
            {!slugValid && (
              <Typography variant="p">
                This URL is not available. Please try another one
              </Typography>
            )}
            {slugValid && (
              <Typography variant="p">
                {`Your unique url will be swiftresume.io/${encodeURIComponent(
                  slug
                )}`}
              </Typography>
            )}
            <FormControlLabel
              value="code"
              control={<Radio />}
              disabled
              label="PDF + Custom Domain + Source Code (contact us)"
            />
          </RadioGroup>
        </FormControl>
        {error && <strong style={{ color: "red" }}>{error}</strong>}
        {loading && (
          <LoadingContainer>
            <CircularProgress style={{ height: "60px", width: "60px" }} />
          </LoadingContainer>
        )}

        <div style={loading ? { display: "none" } : { display: "block" }}>
          <label>
            Card details
            <CardElement style={{ base: { fontSize: "18px" } }} />
          </label>
        </div>
        <Row center="xs">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={loading}
          >
            Download my PDF
          </Button>
        </Row>
      </form>
    </Container>
  );
};

export default injectStripe(PaymentModal);
