import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const videos = [
  {
    id: 1,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994372/video-testimonials/w3motgsnsqn0jmvmzztk.webp",
    videoId: "Rl9QSwdkXtM",
    description: "Chronic Low Back Pain Treated with Cluneal Nerve Stimulation",
  },
  {
    id: 2,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994431/video-testimonials/zt0eob5qold58ouuoieb.webp",
    videoId: "l9bmF878XqE",
    description: "Radiofrequency Ablation for Knee Pain",
  },
  {
    id: 3,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994439/video-testimonials/g2jt0fbaewbzgfkv7nsu.webp",
    videoId: "NflZfK2itFY",
    description:
      "How to Improve Quality of Life by Comprehensive Pain Management",
  },
  {
    id: 4,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994445/video-testimonials/vkbgqgbhbdrczdznkgvd.webp",
    videoId: "cY6lBFdHlmI",
    description:
      "Compression Fracture Caused by Osteoporosis & Fall Treated by performing Kyphoplasty",
  },
  {
    id: 5,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994453/video-testimonials/cuehzg2i8kddiv8bulmi.webp",
    videoId: "weM6bfy73ow",
    description:
      "How 36 Year Old Abdominal Pain Treated by Spinal Cord Simulator",
  },
  {
    id: 6,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994463/video-testimonials/oxpcv0f3psfrr1s8k5nz.webp",
    videoId: "nUFTjdDJ7G8",
    description: "Nerve Blocks Provide Great Pain Relief To All Age Groups",
  },
  {
    id: 7,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994472/video-testimonials/fz5ellrf2z8uusxtjnqy.webp",
    videoId: "hAqRESlEJTU",
    description: "Instant Pain Relief After Lumbar Epidural Injection",
  },
  {
    id: 8,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994481/video-testimonials/wfwsztja8rv6gcnw3ojv.webp",
    videoId: "DSbN7yXxkpM",
    description: "How Spinal Cord Simulator Changed Patient's Life",
  },
  {
    id: 9,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994490/video-testimonials/bbuignzgaunp2yk6jusx.webp",
    videoId: "JBJs2kyhNx8",
    description:
      "Radiofrequency Ablation, Pain Management Procedure Providing Great Relief",
  },
  {
    id: 10,
    backgroundImage:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994498/video-testimonials/py2wmreun8la0m3abceu.webp",
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
