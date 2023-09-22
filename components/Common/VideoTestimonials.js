import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const videos = [
  {
    id: 1,
    backgroundImage: "/images/video-testimonials/1.webp",
    videoId: "Rl9QSwdkXtM",
    description: "Chronic Low Back Pain Treated with Cluneal Nerve Stimulation",
  },
  {
    id: 2,
    backgroundImage: "/images/video-testimonials/2.webp",
    videoId: "l9bmF878XqE",
    description: "Radiofrequency Ablation for Knee Pain",
  },
  {
    id: 3,
    backgroundImage: "/images/video-testimonials/3.webp",
    videoId: "NflZfK2itFY",
    description:
      "How to Improve Quality of Life by Comprehensive Pain Management",
  },
  {
    id: 4,
    backgroundImage: "/images/video-testimonials/4.webp",
    videoId: "cY6lBFdHlmI",
    description:
      "Compression Fracture Caused by Osteoporosis & Fall Treated by performing Kyphoplasty",
  },
  {
    id: 5,
    backgroundImage: "/images/video-testimonials/5.webp",
    videoId: "weM6bfy73ow",
    description:
      "How 36 Year Old Abdominal Pain Treated by Spinal Cord Simulator",
  },
  {
    id: 6,
    backgroundImage: "/images/video-testimonials/6.webp",
    videoId: "nUFTjdDJ7G8",
    description: "Nerve Blocks Provide Great Pain Relief To All Age Groups",
  },
  {
    id: 7,
    backgroundImage: "/images/video-testimonials/7.webp",
    videoId: "hAqRESlEJTU",
    description: "Instant Pain Relief After Lumbar Epidural Injection",
  },
  {
    id: 8,
    backgroundImage: "/images/video-testimonials/8.webp",
    videoId: "DSbN7yXxkpM",
    description: "How Spinal Cord Simulator Changed Patient's Life",
  },
  {
    id: 9,
    backgroundImage: "/images/video-testimonials/9.webp",
    videoId: "JBJs2kyhNx8",
    description:
      "Radiofrequency Ablation, Pain Management Procedure Providing Great Relief",
  },
  {
    id: 10,
    backgroundImage: "/images/video-testimonials/10.webp",
    videoId: "isoN2Yj47G4",
    description:
      "Spinal Cord Stimulator Implant at premier pain centers Corsicana helped patient who received no relief from similar technology in past.",
  },
];

const VideoTestimonials = () => {
  // Create an array of states for each video
  const [isOpen, setIsOpen] = useState(new Array(videos.length).fill(false));

  const handleOpen = (index) => {
    // Create a copy of the state array and set the state for the video at the given index to true
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = true;
    setIsOpen(updatedIsOpen);
  };

  const handleClose = (index) => {
    // Create a copy of the state array and set the state for the video at the given index to false
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = false;
    setIsOpen(updatedIsOpen);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {videos.map((vid, index) => {
            return (
              <div className="col-sm-12 col-lg-6 mb-4" key={index}>
                <div className="video-wrap">
                  <div
                    className="video-area"
                    style={{
                      backgroundImage: `url(${vid.backgroundImage})`,
                      height: "350px",
                    }}
                  >
                    <div className="d-table">
                      <div className="d-table-cell">
                        <div className="container">
                          <div className="video-item">
                            <div
                              onClick={() => handleOpen(index)}
                              className="popup-youtube"
                            >
                              <i className="icofont-ui-play"></i>
                            </div>

                            <div className="video-content">
                              <p>{vid.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Render each modal video */}
      {videos.map((vid, index) => (
        <ModalVideo
          key={index}
          channel="youtube"
          autoplay
          isOpen={isOpen[index]}
          videoId={vid.videoId}
          onClose={() => handleClose(index)}
        />
      ))}
    </>
  );
};

export default VideoTestimonials;
