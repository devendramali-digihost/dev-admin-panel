import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const CreateAdminTemplate = () => {
  return (
    <div className="create-new-project">
      <Card>
        <Card.Body>
          <div className="text-center">
            <Link
              to="/template/create-admin"
              className="create-button btn btn-primary waves-effect waves-light"
            >
              <AiOutlinePlus /> Create New Admin Template
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CreateAdminTemplate;
