import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

const StyledForm = styled(Form)`
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Label = styled.label`
  display: block;
  margin: 10px;
`;

const StyledField = styled(Field)`
  margin-left: 10px;
  padding: 5px;
`;

const SampleForm = () => (
  <React.Fragment>
  <Formik
    initialValues={{
      text: 'This is some sample text',
      textArea: 'This is a block of even more sample text that is displayed in a text area field',
      check: false,
    }}
    onSubmit={(values) => console.log(values)}
    render={() => (
      <StyledForm id="capture">
        <Label>
          Text Field #1:
          <StyledField name="text" />
          <ErrorMessage name="text" />
        </Label>
        <Label>
          Text Area #1:
          <StyledField name="textArea" component="textarea" />
          <ErrorMessage name="textArea" />
        </Label>
        <Label>
          Check Field #1:
          <StyledField name="check" type="checkbox" />
          <ErrorMessage name="check" />
        </Label>
      </StyledForm>
    )}
    />
  </React.Fragment>
);

export default SampleForm;