import { useRouter } from "next/router";
import Link from "next/link";

// Define a list of known URLs that should return a 200 status
const knownURLs = [
  "/",
  "conditions-we-treat/",
  "conditions-we-treat/car-accident-injury/",
  "conditions-we-treat/shoulder-pain/",
  "conditions-we-treat/sports-injury/",
  "conditions-we-treat/headaches/",
  "conditions-we-treat/back-pain/",
  "conditions-we-treat/neck-pain/",
  "conditions-we-treat/knee-pain/",
  "conditions-we-treat/joint-pain/",
  "conditions-we-treat/leg-pain/",
  "conditions-we-treat/hip-pain/",
  "treatments/",
  "treatments/hip-joint-injections/",
  "treatments/disc-regenerative-therapy/",
  "treatments/mild-procedure/",
  "treatments/facet-joint-injection/",
  "treatments/percutaneous-discectomy/",
  "treatments/trigger-point-injections/",
  "treatments/joint-injections/",
  "treatments/lumbar-sympathetic-injections/",
  "treatments/epidural-nerve-block/",
  "treatments/si-joint-injection/",
  "treatments/pronox/",
  "treatments/occipital-nerve-block/",
  "treatments/genicular-nerve-block/",
  "treatments/spinal-cord-stimulation/",
  "treatments/bursa-injection/",
  "treatments/peripheral-nerve-stimulation/",
  "meet-our-team/",
  "meet-our-team/rao-k-ali/",
  "meet-our-team/dr-muhammad-zulqarnain-dr-z-/",
  "contact-locations/",
  "contact-locations/richardson/",
  "contact-locations/north-richland-hills/",
  "contact-locations/waxahachie/",
  "contact-locations/fort-worth/",
  "contact-locations/hillsboro/",
  "contact-locations/lancaster/",
  "contact-locations/farmers-branch/",
  "contact-locations/corsicana/",
  "contact-locations/decatur/",
  "contact-locations/cleburne/",
  "blog/",
  "about/",
  "faqs/",
  "news/",
  "educational-videos/",
  "video-testimonials/",
  "interventional-pain-management/",
  "reviews/",
  "appointment/",
  "conditions-we-treat/coccydynia/",
  "blog/back-pain/sciatica-symptoms-and-prevention/",
  "blog/back-pain/herniated-disc/",
  "blog/back-pain/spinal-stenosis-types-symptoms-and-causes/",
  "blog/neck-pain/8-remedies-to-fix-crick-in-neck/",
  "blog/treatments/hip-pain-when-walking/",
  "blog/treatments/hip-flexor-pain/",
  "images/Rao-Ali-AR-1.pdf",
  "faqs/i-am-in-great-pain-please-help-me/",
  "faqs/when-to-worry-about-leg-pain/",
  "faqs/what-causes-hip-pain-that-radiates-down-the-leg/",
  "faqs/how-to-relieve-buttock-muscle-pain/",
  "faqs/how-to-relieve-rotator-cuff-pain-at-night/",
  "faqs/dr-ali/",
  "faqs/what-will-hospital-do-for-sciatica-pain/",
  "faqs/how-long-does-wisdom-tooth-growing-pain-last/",
  "faqs/stabbing-pain-when-pooping-during-period/",
  "faqs/how-to-sit-with-si-joint-pain/",
  "faqs/what-causes-pain-under-right-breast-radiating-to-back/",
  "faqs/how-to-relive-back-pain-from-constipation/",
  "blog/back-pain/disc-osteophyte-complex/",
  "blog/back-pain/dorsalgia/",
  "blog/treatments/how-long-do-pinched-nerves-last/",
  "news/spinal-cord-stimulation-may-improve-long-term-motor-function/",
  "blog/treatments/everything-youve-ever-wanted-to-know-about-pain-management-doctors/",
  "blog/neck-pain/do-you-suffer-from-neck-pain-when-cycling/",
  "blog/neck-pain/loud-pop-in-neck-followed-by-pain/",
  "blog/neck-pain/ice-or-heat-for-neck-pain-all-you-need-to-understand/",
  "blog/neck-pain/how-to-lose-neck-fat/",
  "blog/neck-pain/how-to-fix-nerd-neck-forwarded-head-posture/",
  "blog/neck-pain/how-to-find-the-right-chiropractor-for-neck-pain-treatment/",
  "blog/knee-pain/loss-of-knee-rom-range-of-motion/",
  "blog/back-pain/dead-leg-numbness-in-legs/",
  "blog/leg-pain/peripheral-neuropathy-types-symptoms-diagnosis-and-treatment/",
  "blog/knee-pain/11-causes-why-sharp-stabbing-pain-in-knee-comes-and-goes/",
  "blog/treatments/chest-pain-icd-10/",
  "blog/treatments/sharp-pain-in-breast/",
  "blog/back-pain/constipation-and-back-pain/",
  "blog/knee-pain/how-to-identify-and-treat-inside-knee-oain-pain/",
  "blog/back-pain/lower-back-pain-when-coughing/",
  "blog/back-pain/lower-back-pain-from-squats/",
  "blog/back-pain/nausea-due-to-back-pain-when-breathing/",
  "blog/back-pain/stiff-back-causes-and-treatment/",
  "news/high-frequency-spinal-cord-stimulation-shows-improved-longer-lasting-pain-relief/",
  "blog/back-pain/causes-of-back-pain-and-types-of-back-doctor-near-me/",
  "blog/neck-pain/why-do-you-need-to-visit-a-neck-pain-doctor/",
  "blog/neck-pain/how-to-get-rid-of-turkey-neck/",
  "blog/neck-pain/is-mesotherapy-effective-for-reducing-neck-fat/",
  "blog/neck-pain/chin-tuck-exercises-for-neck-pain/",
  "blog/neck-pain/9-causes-you-feel-pain-in-the-front-of-the-neck/",
  "blog/neck-pain/are-you-suffering-from-tendonitis-neck-pain/",
  "blog/knee-pain/knee-flexion-measure-and-improve-your-range-of-motion/",
  "blog/knee-pain/loose-body-in-knee-joint-causes-treatment/",
  "blog/knee-pain/chondrosis-signs-and-symptoms-home-remedies/",
  "blog/knee-pain/knee-support/",
  "treatments/electrodiagnostic/",
  "blog/back-pain/what-you-need-to-know-about-hip-injections-for-arthritis/",
  "blog/knee-pain/getting-pain-behind-knee/",
  "news/how-physiotherapy-can-help-in-treating-suprapatellar-bursitis/",
  "blog/knee-pain/do-you-suffer-from-inner-knee-pain-running/",
  "blog/knee-pain/what-are-possible-causes-and-treatment-weak-knees/",
  "blog/knee-pain/knee-pain-location-chart-helps-to-find-possible-causes-of-pain-and-diagnosis/",
  "blog/knee-pain/why-do-you-suffer-knee-buckling/",
  "blog/knee-pain/what-is-a-knee-fracture-symptoms-and-treatment/",
  "blog/back-pain/lower-back-pain-that-radiates-to-front-pelvic-area/",
  "blog/update/5-best-recliners-for-back-pain/",
  "blog/knee-pain/swollen-knee/",
  "blog/leg-pain/mcl-sprain-causes-symptoms-diagnosis-treatment/",
  "blog/back-pain/9-causes-you-feel-back-pain-when-breathing/",
  "blog/back-pain/9-ways-to-treat-lower-back-hurts-after-squats/",
  "blog/back-pain/lower-back-pain-and-diarrhea/",
  "blog/neck-pain/what-is-a-talar-neck-fracture/",
  "blog/neck-pain/why-is-flat-neck-syndrome-called-a-military-neck/",
  "blog/leg-pain/suprapatellar-bursitis-symptoms-diagnosis-treatment/",
  "blog/knee-pain/knee-pain-when-squatting/",
  "blog/knee-pain/quadriceps-tendonitis-causes-effects-treatment/",
  "blog/knee-pain/symptoms-and-treatment-of-lateral-knee-pain/",
  "blog/leg-pain/mcl-brace-for-sprain-recovery-choose-the-right-one-now/",
  "blog/back-pain/you-should-be-aware-of-uses-and-side-effects-of-facet-joint-injections/",
  "blog/knee-pain/why-should-i-wear-knee-support-for-running/",
  "blog/leg-pain/reasons-for-lower-leg-pain/",
  "blog/leg-pain/patellar-tracking-disorder/",
  "blog/knee-pain/different-ways-used-by-doctor-for-knee-pain/",
  "blog/knee-pain/meniscal-cyst-causes-signs-diagnosis-and-treatment/",
  "blog/knee-pain/prevention-from-medial-knee-pain/",
  "blog/knee-pain/how-to-prevent-knee-pain-when-hiking/",
  "blog/back-pain/what-causes-upper-back-pain-during-pregnancy/",
  "blog/knee-pain/treatment-of-knee-pain-when-squatting/",
  "blog/knee-pain/why-wear-tennis-elbow-brace/",
  "blog/back-pain/5-steps-on-how-to-fix-lower-back-pain-from-a-deadlift/",
  "blog/back-pain/sacroiliac-joint-fusion-for-low-back-pain/",
  "news/spinal-cord-stimulation-approved-by-fda-for-diabetic-pain/",
  "blog/leg-pain/list-some-of-the-best-exercises-for-fractured-patella/",
  "blog/back-pain/aleve-back-and-muscle-pain/",
  "blog/knee-pain/why-do-i-feel-pain-in-knee-when-walking-downhill/",
  "blog/knee-pain/7-reasons-of-knee-pain-when-riding-a-bike/",
  "blog/health-tips/spinal-infection-from-drug-use/",
  "blog/knee-pain/tight-muscles-causing-sharp-stabbing-pain-in-knee-comes-and-goes/",
  "blog/knee-pain/11-causes-your-knee-hurts-when-straightened/",
  "blog/knee-pain/common-knee-bursitis-treatment/",
  "blog/back-pain/6-cause-you-may-have-a-knot-in-lower-left-back/",
  "blog/leg-pain/do-you-want-to-know-how-to-sit-with-si-joint-pain/",
];

export default function Page() {
  const router = useRouter();
  const { path } = router.query;
  // Determine whether to return a 410 status or a 200 status based on the path
  const shouldReturnGone = !knownURLs.includes(path);

  if (shouldReturnGone) {
    // Return a 410 status (Gone)
    return (
      <div className="error-area">
        <div className="error-item">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="error-text">
                <h1>410 - Gone</h1>
                <p>Sorry! This page no longer exists.</p>

                <Link href="/">Return to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Return a 200 status for known URLs
    return (
      <div>
        <h1>Your page content here</h1>
        <p>This page is active and accessible.</p>
      </div>
    );
  }
}
