import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
    render() {
        return (
            <Container>
                <Form className='form' onSubmit={(event) => this.props.getLocation(event)}>
                    Your City:{" "}
                    <Form.Control type="text" name="yourcity" onChange={(event) => this.props.handleChange(event)} />
                    <Button type='submit'>Search</Button>
                </Form>
            </Container>
        )
    }
}

export default SearchForm;
