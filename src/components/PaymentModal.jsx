import React from "react";
import styled from "styled-components";
import { Grid, Row } from "react-styled-flexboxgrid";
import { CircularProgress, Button } from "@material-ui/core";

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
  error
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

  return (
    <Container fluid>
      {error && <strong style={{ color: "red" }}>{error}</strong>}
      {loading && (
        <LoadingContainer>
          <CircularProgress style={{ height: "60px", width: "60px" }} />
        </LoadingContainer>
      )}
      <form onSubmit={handleSubmit}>
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
