import React from 'react';
import { Container, Card } from 'react-bootstrap';

const CreateAdminTemplate = () => {
  return (
    <div className="create-new-project">
      <Container>
        <Card>
          <Card.Body>
            <div className="text-center">
              <Link to="company/business-account" className="create-button">
                Create New Project
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CreateAdminTemplate;