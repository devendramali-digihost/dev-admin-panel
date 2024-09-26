import React from 'react';
import { Container, Card } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const CreateModule = () => {
  return (
    <>
       <Container>
        <Card>
          <Card.Body>
            <div className="text-center">
              <Link to="/create-page/create-new-page" className="create-button btn btn-primary waves-effect waves-light">
                <AiOutlinePlus /> Create Modules
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default CreateModule