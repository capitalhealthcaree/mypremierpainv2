import Link from "next/link";

// // const videos = [
// //   {
// //     id: 1,
// //     backgroundImage:
// //       "/images/youtube/spinal-cord-stimulator-implants-with-pedal-leads.jpg",
// //     videoId: "zgeg0igIk6k",
// //     description:
// //       "Spinal Cord Stimulator Implants with Pedal Leads How They Improved My Pain and Life",
// //   },
// //   {
// //     id: 2,
// //     backgroundImage: "/images/youtube/chronic-knee-pain-treatment-dallas.jpg",
// //     videoId: "ZKOR9ycRkI8",
// //     description: "Chronic Knee Pain Treatment in Dallas",
// //   },
// //   {
// //     id: 3,
// //     backgroundImage: "/images/youtube/chronic-low-back-pain-cluneal-nerve-stimulation.jpg",
// //     videoId: "vMsulGxuK8U",
// //     description: "Chronic Low Back Pain Treated with Cluneal Nerve Stimulation",
// //   },
// //   {
// //     id: 4,
// //     backgroundImage:
// //       "/images/youtube/spinal-cord-stimulator-implant-premier-pain-centers-corsicana.jpg",
// //     videoId: "rzdx_wYg30M",
// //     description: "Spinal Cord Stimulator Implant at premier pain centers Corsicana",
// //   },
// //   // {
// //   //   id: 5,
// //   //   backgroundImage:
// //   //     "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994439/video-testimonials/g2jt0fbaewbzgfkv7nsu.webp",
// //   //   videoId: "NflZfK2itFY",
// //   //   description:
// //   //     "How to Improve Quality of Life by Comprehensive Pain Management",
// //   // },
// //   {
// //     id: 6,
// //     backgroundImage:
// //       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994445/video-testimonials/vkbgqgbhbdrczdznkgvd.webp",
// //     videoId: "cY6lBFdHlmI",
// //     description:
// //       "Compression Fracture Caused by Osteoporosis & Fall Treated by performing Kyphoplasty",
// //   },
// //   {
// //     id: 7,
// //     backgroundImage:
// //       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994453/video-testimonials/cuehzg2i8kddiv8bulmi.webp",
// //     videoId: "weM6bfy73ow",
// //     description:
// //       "How 36 Year Old Abdominal Pain Treated by Spinal Cord Simulator",
// //   },
// //   {
// //     id: 8,
// //     backgroundImage:
// //       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994463/video-testimonials/oxpcv0f3psfrr1s8k5nz.webp",
// //     videoId: "nUFTjdDJ7G8",
// //     description: "Nerve Blocks Provide Great Pain Relief To All Age Groups",
// //   },
// //   {
// //     id: 9,
// //     backgroundImage:
// //       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994472/video-testimonials/fz5ellrf2z8uusxtjnqy.webp",
// //     videoId: "hAqRESlEJTU",
// //     description: "Instant Pain Relief After Lumbar Epidural Injection",
// //   },

// //   {
// //     id: 10,
// //     backgroundImage:
// //       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994490/video-testimonials/bbuignzgaunp2yk6jusx.webp",
// //     videoId: "JBJs2kyhNx8",
// //     description:
// //       "Radiofrequency Ablation, Pain Management Procedure Providing Great Relief",
// //   },
// //   {
// //     id: 11,
// //     backgroundImage:
// //       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994498/video-testimonials/py2wmreun8la0m3abceu.webp",
// //     videoId: "isoN2Yj47G4",
// //     description:
// //       "Spinal Cord Stimulator Implant at premier pain centers Corsicana helped patient who received no relief from similar technology in past.",
// //   },
// // ];

// // import { useState } from "react";

// // const VideoTestimonials = ({ count }) => {
// //   const [selectedVideo, setSelectedVideo] = useState(null);

// //   const handleOpen = (videoId) => {
// //     setSelectedVideo(videoId);
// //   };

// //   const handleClose = () => {
// //     setSelectedVideo(null);
// //   };

// //   return (
// //     <div>
// //       <div className="container">
// //         <div
// //           style={{
// //             textAlign: "center",
// //             marginBottom: "30px",
// //           }}
// //         >
// //           <h2
// //             style={{
// //               fontSize: "2.5rem",
// //               color: "black",
// //             }}
// //           >
// //             Patient Testimonials
// //           </h2>
// //           <p
// //             style={{
// //               fontSize: "1.1rem",
// //               color: "black",
// //               maxWidth: "600px",
// //               margin: "0 auto",
// //             }}
// //           >
// //             Hear from our patients about their experiences and treatment
// //             outcomes
// //           </p>
// //         </div>

// //         <div className="row">
// //           {videos.slice(0, count ? count : videos.length).map((vid, index) => (
// //             <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={vid.id}>
// //               <div
// //                 style={{
// //                   position: "relative",
// //                   borderRadius: "12px",
// //                   overflow: "hidden",
// //                   boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// //                   transition: "all 0.3s ease",
// //                   cursor: "pointer",
// //                   backgroundColor: "#fff",
// //                   height: "100%",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "translateY(-8px)";
// //                   e.currentTarget.style.boxShadow =
// //                     "0 8px 25px rgba(0,0,0,0.15)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "translateY(0)";
// //                   e.currentTarget.style.boxShadow =
// //                     "0 4px 15px rgba(0,0,0,0.1)";
// //                 }}
// //                 onClick={() => handleOpen(vid.videoId)}
// //               >
// //                 {/* Thumbnail */}
// //                 <div
// //                   style={{
// //                     position: "relative",
// //                     width: "100%",
// //                     paddingTop: "56.25%", // 16:9 Aspect Ratio
// //                     backgroundImage: `url(${vid.backgroundImage})`,
// //                     backgroundSize: "cover",
// //                     backgroundPosition: "center",
// //                   }}
// //                 >
// //                   {/* Overlay */}
// //                   <div
// //                     style={{
// //                       position: "absolute",
// //                       top: 0,
// //                       left: 0,
// //                       right: 0,
// //                       bottom: 0,
// //                       backgroundColor: "rgba(0,0,0,0.3)",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       transition: "background-color 0.3s ease",
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)";
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)";
// //                     }}
// //                   >
// //                     {/* Play Button */}
// //                     <div
// //                       style={{
// //                         width: "70px",
// //                         height: "70px",
// //                         backgroundColor: "rgba(255,255,255,0.95)",
// //                         borderRadius: "50%",
// //                         display: "flex",
// //                         alignItems: "center",
// //                         justifyContent: "center",
// //                         transition: "all 0.3s ease",
// //                       }}
// //                       onMouseEnter={(e) => {
// //                         e.currentTarget.style.transform = "scale(1.1)";
// //                         e.currentTarget.style.backgroundColor = "#ff0000";
// //                         const icon = e.currentTarget.querySelector("i");
// //                         if (icon) icon.style.color = "#fff";
// //                       }}
// //                       onMouseLeave={(e) => {
// //                         e.currentTarget.style.transform = "scale(1)";
// //                         e.currentTarget.style.backgroundColor =
// //                           "rgba(255,255,255,0.95)";
// //                         const icon = e.currentTarget.querySelector("i");
// //                         if (icon) icon.style.color = "#ff0000";
// //                       }}
// //                     >
// //                       <i
// //                         className="icofont-ui-play"
// //                         style={{
// //                           fontSize: "30px",
// //                           color: "#ff0000",
// //                           marginLeft: "5px",
// //                           transition: "color 0.3s ease",
// //                         }}
// //                       ></i>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Description */}
// //                 <div
// //                   style={{
// //                     padding: "15px",
// //                     backgroundColor: "#fff",
// //                   }}
// //                 >
// //                   <p
// //                     style={{
// //                       margin: 0,
// //                       color: "black",
// //                       lineHeight: "1.5",
// //                       display: "-webkit-box",
// //                       WebkitLineClamp: 3,
// //                       WebkitBoxOrient: "vertical",
// //                       overflow: "hidden",
// //                       minHeight: "60px",
// //                     }}
// //                   >
// //                     {vid.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       {selectedVideo && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             bottom: 0,
// //             backgroundColor: "rgba(0,0,0,0.9)",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             zIndex: 9999,
// //             padding: "20px",
// //           }}
// //           onClick={handleClose}
// //         >
// //           <div
// //             style={{
// //               position: "relative",
// //               width: "100%",
// //               maxWidth: "900px",
// //               backgroundColor: "#000",
// //               borderRadius: "8px",
// //               overflow: "hidden",
// //             }}
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <button
// //               onClick={handleClose}
// //               style={{
// //                 position: "absolute",
// //                 top: "-40px",
// //                 right: "0",
// //                 background: "transparent",
// //                 border: "none",
// //                 color: "#fff",
// //                 fontSize: "30px",
// //                 cursor: "pointer",
// //                 zIndex: 10000,
// //                 padding: "5px 10px",
// //               }}
// //             >
// //               ✕
// //             </button>
// //             <div
// //               style={{
// //                 position: "relative",
// //                 paddingTop: "56.25%",
// //               }}
// //             >
// //               <iframe
// //                 src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
// //                 style={{
// //                   position: "absolute",
// //                   top: 0,
// //                   left: 0,
// //                   width: "100%",
// //                   height: "100%",
// //                   border: "none",
// //                 }}
// //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                 allowFullScreen
// //               ></iframe>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default VideoTestimonials;

// import { useState } from "react";

// const videos = [
//   {
//     id: 1,
//     backgroundImage:
//       "/images/youtube/spinal-cord-stimulator-implants-with-pedal-leads.jpg",
//     videoId: "zgeg0igIk6k",
//     type: "video", // regular video
//     description:
//       "Spinal Cord Stimulator Implants with Pedal Leads How They Improved My Pain and Life",
//   },
//   {
//     id: 2,
//     backgroundImage: "/images/youtube/chronic-knee-pain-treatment-dallas.jpg",
//     videoId: "ZKOR9ycRkI8",
//     type: "video",
//     description: "Chronic Knee Pain Treatment in Dallas",
//   },
//   {
//     id: 3,
//     backgroundImage: "/images/youtube/chronic-low-back-pain-cluneal-nerve-stimulation.jpg",
//     videoId: "vMsulGxuK8U",
//     type: "video",
//     description: "Chronic Low Back Pain Treated with Cluneal Nerve Stimulation",
//   },
//   {
//     id: 4,
//     backgroundImage:
//       "/images/youtube/spinal-cord-stimulator-implant-premier-pain-centers-corsicana.jpg",
//     videoId: "rzdx_wYg30M",
//     type: "video",
//     description: "Spinal Cord Stimulator Implant at premier pain centers Corsicana",
//   },
//   {
//     id: 5,
//     backgroundImage: "https://i.ytimg.com/vi/ljtAZJ1iNiI/maxresdefault.jpg", // YouTube auto-generated thumbnail
//     videoId: "ljtAZJ1iNiI",
//     type: "short", // YouTube Short
//     description: "Quick Pain Relief Tips",
//   },
//   {
//     id: 6,
//     backgroundImage:
//       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994445/video-testimonials/vkbgqgbhbdrczdznkgvd.webp",
//     videoId: "cY6lBFdHlmI",
//     type: "video",
//     description:
//       "Compression Fracture Caused by Osteoporosis & Fall Treated by performing Kyphoplasty",
//   },
//   {
//     id: 7,
//     backgroundImage:
//       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994453/video-testimonials/cuehzg2i8kddiv8bulmi.webp",
//     videoId: "weM6bfy73ow",
//     type: "video",
//     description:
//       "How 36 Year Old Abdominal Pain Treated by Spinal Cord Simulator",
//   },
//   {
//     id: 8,
//     backgroundImage:
//       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994463/video-testimonials/oxpcv0f3psfrr1s8k5nz.webp",
//     videoId: "nUFTjdDJ7G8",
//     type: "video",
//     description: "Nerve Blocks Provide Great Pain Relief To All Age Groups",
//   },
//   {
//     id: 9,
//     backgroundImage:
//       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994472/video-testimonials/fz5ellrf2z8uusxtjnqy.webp",
//     videoId: "hAqRESlEJTU",
//     type: "video",
//     description: "Instant Pain Relief After Lumbar Epidural Injection",
//   },
//   {
//     id: 10,
//     backgroundImage:
//       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994490/video-testimonials/bbuignzgaunp2yk6jusx.webp",
//     videoId: "JBJs2kyhNx8",
//     type: "video",
//     description:
//       "Radiofrequency Ablation, Pain Management Procedure Providing Great Relief",
//   },
//   {
//     id: 11,
//     backgroundImage:
//       "http://res.cloudinary.com/dngmflrpx/image/upload/v1734994498/video-testimonials/py2wmreun8la0m3abceu.webp",
//     videoId: "isoN2Yj47G4",
//     type: "video",
//     description:
//       "Spinal Cord Stimulator Implant at premier pain centers Corsicana helped patient who received no relief from similar technology in past.",
//   },
// ];

// const VideoTestimonials = ({ count }) => {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const handleOpen = (video) => {
//     setSelectedVideo(video);
//   };

//   const handleClose = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <div>
//       <div className="container">
//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: "30px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               color: "black",
//             }}
//           >
//             Patient Testimonials
//           </h2>
//           <p
//             style={{
//               fontSize: "1.1rem",
//               color: "black",
//               maxWidth: "600px",
//               margin: "0 auto",
//             }}
//           >
//             Hear from our patients about their experiences and treatment
//             outcomes
//           </p>
//         </div>

//         <div className="row">
//           {videos.slice(0, count ? count : videos.length).map((vid) => (
//             <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={vid.id}>
//               <div
//                 style={{
//                   position: "relative",
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                   boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//                   transition: "all 0.3s ease",
//                   cursor: "pointer",
//                   backgroundColor: "#fff",
//                   height: "100%",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 25px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 15px rgba(0,0,0,0.1)";
//                 }}
//                 onClick={() => handleOpen(vid)}
//               >
//                 {/* Thumbnail */}
//                 <div
//                   style={{
//                     position: "relative",
//                     width: "100%",
//                     paddingTop: vid.type === "short" ? "177.78%" : "56.25%", // 9:16 for shorts, 16:9 for videos
//                     backgroundImage: `url(${vid.backgroundImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 >
//                   {/* Shorts Badge */}
//                   {vid.type === "short" && (
//                     <div
//                       style={{
//                         position: "absolute",
//                         top: "10px",
//                         left: "10px",
//                         backgroundColor: "rgba(255,0,0,0.9)",
//                         color: "#fff",
//                         padding: "4px 8px",
//                         borderRadius: "4px",
//                         fontSize: "12px",
//                         fontWeight: "bold",
//                         zIndex: 2,
//                       }}
//                     >
//                       SHORTS
//                     </div>
//                   )}

//                   {/* Overlay */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       backgroundColor: "rgba(0,0,0,0.3)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       transition: "background-color 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)";
//                     }}
//                   >
//                     {/* Play Button */}
//                     <div
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         backgroundColor: "rgba(255,255,255,0.95)",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         transition: "all 0.3s ease",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "scale(1.1)";
//                         e.currentTarget.style.backgroundColor = "#ff0000";
//                         const icon = e.currentTarget.querySelector("i");
//                         if (icon) icon.style.color = "#fff";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "scale(1)";
//                         e.currentTarget.style.backgroundColor =
//                           "rgba(255,255,255,0.95)";
//                         const icon = e.currentTarget.querySelector("i");
//                         if (icon) icon.style.color = "#ff0000";
//                       }}
//                     >
//                       <i
//                         className="icofont-ui-play"
//                         style={{
//                           fontSize: "30px",
//                           color: "#ff0000",
//                           marginLeft: "5px",
//                           transition: "color 0.3s ease",
//                         }}
//                       ></i>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div
//                   style={{
//                     padding: "15px",
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   <p
//                     style={{
//                       margin: 0,
//                       color: "black",
//                       lineHeight: "1.5",
//                       display: "-webkit-box",
//                       WebkitLineClamp: 3,
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden",
//                       minHeight: "60px",
//                     }}
//                   >
//                     {vid.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedVideo && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0,0,0,0.9)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 9999,
//             padding: "20px",
//           }}
//           onClick={handleClose}
//         >
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               maxWidth: selectedVideo.type === "short" ? "400px" : "900px",
//               backgroundColor: "#000",
//               borderRadius: "8px",
//               overflow: "hidden",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={handleClose}
//               style={{
//                 position: "absolute",
//                 top: "-40px",
//                 right: "0",
//                 background: "transparent",
//                 border: "none",
//                 color: "#fff",
//                 fontSize: "30px",
//                 cursor: "pointer",
//                 zIndex: 10000,
//                 padding: "5px 10px",
//               }}
//             >
//               ✕
//             </button>
//             <div
//               style={{
//                 position: "relative",
//                 paddingTop: selectedVideo.type === "short" ? "177.78%" : "56.25%",
//               }}
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   border: "none",
//                 }}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoTestimonials;

import { useState } from "react";

const videos = [
  {
    id: 1,
    backgroundImage: "https://i.ytimg.com/vi/zgeg0igIk6k/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "zgeg0igIk6k",
    type: "video",
    description:
      "Spinal Cord Stimulator Implants with Pedal Leads How They Improved My Pain and Life",
  },
  {
    id: 2,
    backgroundImage: "https://i.ytimg.com/vi/ZKOR9ycRkI8/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "ZKOR9ycRkI8",
    type: "video",
    description: "Chronic Knee Pain Treatment in Dallas",
  },
  {
    id: 3,
    backgroundImage: "https://i.ytimg.com/vi/vMsulGxuK8U/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "vMsulGxuK8U",
    type: "video",
    description: "Chronic Low Back Pain Treated with Cluneal Nerve Stimulation",
  },
  {
    id: 4,
    backgroundImage: "https://i.ytimg.com/vi/rzdx_wYg30M/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "rzdx_wYg30M",
    type: "video",
    description:
      "Spinal Cord Stimulator Implant at premier pain centers Corsicana",
  },
  {
    id: 5,
    backgroundImage: "https://i.ytimg.com/vi/v7lUm3eCP3k/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "v7lUm3eCP3k",
    type: "short", // YouTube Short
    description: "Radiofrequency Ablation for Knee Pain",
  },
  {
    id: 6,
    backgroundImage: "https://i.ytimg.com/vi/boUzgVx3ZPs/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "boUzgVx3ZPs",
    type: "short", // YouTube Short
    description:
      "Radiofrequency Ablation, Pain Management Procedure Providing Great Relief",
  },
  {
    id: 7,
    backgroundImage: "https://i.ytimg.com/vi/bqfqp-Tdof0/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "bqfqp-Tdof0",
    type: "short", // YouTube Short
    description: "Nerve Blocks Provide Great Pain Relief To All Age Groups",
  },

  {
    id: 8,
    backgroundImage: "https://i.ytimg.com/vi/ljtAZJ1iNiI/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "ljtAZJ1iNiI",
    type: "short", // YouTube Short
    description: "Instant Pain Relief After Lumbar Epidural Injection",
  },
  {
    id: 9,
    backgroundImage: "https://i.ytimg.com/vi/gJV5EK4DpvQ/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "gJV5EK4DpvQ",
    type: "short", // YouTube Short
    description:
      "Compression Fracture Caused by Osteoporosis & Fall Treated by performing Kyphoplasty",
  },
  {
    id: 10,
    backgroundImage: "https://i.ytimg.com/vi/4PQCnkzTLRo/maxresdefault.jpg", // YouTube auto-generated thumbnail
    videoId: "4PQCnkzTLRo",
    type: "video",
    description: "How Spinal Cord Simulator Changed Patient's Life",
  },
];

const VideoTestimonials = ({ count }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <div className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "black",
            }}
          >
            Patient Testimonials
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Hear from our patients about their experiences and treatment
            outcomes
          </p>
        </div>

        <div className="row">
          {videos.slice(0, count ? count : videos.length).map((vid) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={vid.id}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(0,0,0,0.1)";
                }}
                onClick={() => handleOpen(vid)}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px", // Fixed height for symmetry
                    backgroundImage: `url(${vid.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Shorts Badge */}
                  {vid.type === "short" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "rgba(255,0,0,0.9)",
                        color: "#fff",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        zIndex: 2,
                      }}
                    >
                      SHORTS
                    </div>
                  )}

                  {/* Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)";
                    }}
                  >
                    {/* Play Button */}
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "rgba(255,255,255,0.95)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.backgroundColor = "#ff0000";
                        const icon = e.currentTarget.querySelector("i");
                        if (icon) icon.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.backgroundColor =
                          "rgba(255,255,255,0.95)";
                        const icon = e.currentTarget.querySelector("i");
                        if (icon) icon.style.color = "#ff0000";
                      }}
                    >
                      <i
                        className="icofont-ui-play"
                        style={{
                          fontSize: "30px",
                          color: "#ff0000",
                          marginLeft: "5px",
                          transition: "color 0.3s ease",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div
                  style={{
                    padding: "15px",
                    backgroundColor: "#fff",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "black",
                      lineHeight: "1.5",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "60px",
                    }}
                  >
                    {vid.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
          onClick={handleClose}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: selectedVideo.type === "short" ? "400px" : "900px",
              backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "30px",
                cursor: "pointer",
                zIndex: 10000,
                padding: "5px 10px",
              }}
            >
              ✕
            </button>
            <div
              style={{
                position: "relative",
                paddingTop:
                  selectedVideo.type === "short" ? "177.78%" : "56.25%",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div
        className="common-btn"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          href="/video-testimonials/"
          style={{
            backgroundColor: "#0046c0",
            color: "white",
            padding: "10px 11px",
            marginBottom: "2vh",
          }}
          rel="preload"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default VideoTestimonials;
