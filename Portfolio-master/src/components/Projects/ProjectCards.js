import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProjectCards(props) {
  const [showVideo, setShowVideo] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState(0);
  const projectImages = props.imagePaths || [props.imgPath];

  const showPreviousImage = () => {
    setActiveImage((currentImage) =>
      currentImage === 0 ? projectImages.length - 1 : currentImage - 1
    );
  };

  const showNextImage = () => {
    setActiveImage((currentImage) =>
      currentImage === projectImages.length - 1 ? 0 : currentImage + 1
    );
  };

  return (
    <Card className="project-card-view">
      {props.imagePaths ? (
        <div className="project-image-computer project-image-carousel">
          <div className="project-image-screen">
            <Card.Img
              variant="top"
              src={projectImages[activeImage]}
              alt={`${props.title} screenshot ${activeImage + 1}`}
            />
            <button
              type="button"
              className="project-carousel-button project-carousel-previous"
              onClick={showPreviousImage}
              aria-label="Previous project image"
            >
              <BsChevronLeft />
            </button>
            <button
              type="button"
              className="project-carousel-button project-carousel-next"
              onClick={showNextImage}
              aria-label="Next project image"
            >
              <BsChevronRight />
            </button>
            <span className="project-carousel-count">
              {activeImage + 1} / {projectImages.length}
            </span>
          </div>
          <div className="project-image-base" />
        </div>
      ) : props.isComputerMockup ? (
        <div className="project-image-computer">
          <div className="project-image-screen">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          </div>
          <div className="project-image-base" />
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.videoLink && (
          <>
            <Button
              variant="primary"
              onClick={() => setShowVideo(true)}
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
            <Modal show={showVideo} onHide={() => setShowVideo(false)} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>{props.title} Demo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <video
                  src={props.videoLink}
                  controls
                  autoPlay
                  playsInline
                  style={{ width: "100%", display: "block" }}
                >
                  Your browser does not support video playback.
                </video>
              </Modal.Body>
            </Modal>
          </>
        )}

        {!props.isBlog && props.demoLink && !props.videoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
