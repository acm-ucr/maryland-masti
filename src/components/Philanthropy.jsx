"use client";
import { who, what, where, image } from "@/data/philanthropy";
import { Col, Row } from "react-bootstrap";

const Philanthropy = () => {
  return (
    <Row className="p-0 m-0 font-antonio">
      <Col xl={5} className="bg-masti-red-200 p-4">
        <p className="font-bold text-masti-beige text-3xl">{who.title}</p>
        <p className="text-white text-lg font-poppins">{who.text}</p>
      </Col>
      <Col xl={7} className="bg-masti-red-100 p-4">
        <p className="font-bold text-white text-3xl">{what.title}</p>
        <p className="text-white text-lg font-poppins">{what.text}</p>
      </Col>
      <Col xl={12} className="bg-masti-beige flex p-0">
        <div className="w-8/12 p-4">
          <p className="font-bold text-masti-red-200 text-3xl text-right">
            {who.title}
          </p>
          <p className="text-masti-red-200 text-lg text-right font-poppins">
            {where.text}
          </p>
        </div>

        <img className="w-4/12" src={image} />
      </Col>
    </Row>
  );
};

export default Philanthropy;
