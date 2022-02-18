import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialIconsBoop from "../animators/SocialIconsBoop.js";

import Tooltip from "@mui/material/Tooltip";

import Zoom from "@mui/material/Zoom";
import Link from "@mui/material/Link";
export default function SocialButtons(props) {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <>
      <Row>
        <Col xl={"auto"} xs={2} md={"auto"}>
          <SocialIconsBoop
            afterColor={"rgba(115,199,204,1)"}
            rotation={0}
            x={0}
            y={-4}
          >
            <Tooltip TransitionComponent={Zoom} title="LinkedIn">
              <div>
                <FaLinkedin
                  type="button"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/jonathan-brown-858814201/"
                    )
                  }
                  className="linkedInIcon"
                ></FaLinkedin>
              </div>
            </Tooltip>
          </SocialIconsBoop>
        </Col>
        <Col xl={"auto"} xs={2} md={"auto"}>
          <SocialIconsBoop
            afterColor={"rgba(115,199,204,1)"}
            rotation={0}
            x={0}
            y={-4}
          >
            <Tooltip TransitionComponent={Zoom} title="GitHub">
              <div>
                <FaGithub
                  type="button"
                  className="githubIcon"
                  onClick={() => openInNewTab("https://github.com/JBrown9124")}
                ></FaGithub>
              </div>
            </Tooltip>
          </SocialIconsBoop>
        </Col>
        <Col xl={"auto"} xs={1} md={"auto"}>
          <SocialIconsBoop
            afterColor={"rgba(115,199,204,1)"}
            rotation={0}
            x={0}
            y={0}
          >
            <div className="emailLink">
              <Link
                variant="subtitle1"
                type="button"
                onClick={() =>
                  window.open(
                    "mailto:brownjs193@gmail.com?subject=Subject&body=Body%20goes%20here"
                  )
                }
                underline="none"
                color={"rgb(255, 255, 255)"}
              >
                brownjs193@gmail.com
              </Link>
            </div>
          </SocialIconsBoop>
        </Col>
      </Row>
    </>
  );
}
