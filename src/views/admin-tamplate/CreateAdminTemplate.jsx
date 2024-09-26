import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const CreateAdminTemplate = () => {
  return (
    <div className="create-new-project">
      <Container>
        <Card>
          <Card.Body>
            <div className="text-center">
              <Link to="/company/business-account" className="create-button btn btn-primary">
                <AiOutlinePlus /> Create Admin Template
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CreateAdminTemplate;
