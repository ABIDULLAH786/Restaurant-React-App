import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom"

function RendreMenuItem({ dish, onClick }) {
  return (
    <Card key={dish.id} >
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={process.env.PUBLIC_URL + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
const Menu = (props) => {
  const menu = props.dishes.map((dish, ind) => {
    return <div key={dish.id} className="col-12 col-md-5 m-1">
      <RendreMenuItem dish={dish} />
    </div>;
  });
  return (
    <div className="container">

      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to={"/home"}>Home</Link> </BreadcrumbItem>
          <BreadcrumbItem active>Menu </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{menu}</div>

    </div>
  );
}

export default Menu;
