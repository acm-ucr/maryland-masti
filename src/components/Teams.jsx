"use client";
import { teams } from "@/data/teams";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Teams = () => {
  return (
    <Row>
      {teams.map((team, index) => (
        <Col key={index} className={`p-4 ${team.color}`} xl={3}>
          <img src={team.image} className="" />
        </Col>
      ))}
    </Row>
  );
};

export default Teams;
