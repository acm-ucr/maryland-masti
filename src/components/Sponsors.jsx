"use client";
import { sponsors } from "@/data/sponsors";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Sponsors = () => {
  return (
    <Row className="m-0 p-0">
      {sponsors.map((team, index) => (
        <Col key={index} className={`p-4 ${team.color}`} xl={3}>
          <img src={team.image} className="" />
        </Col>
      ))}
    </Row>
  );
};

export default Sponsors;
