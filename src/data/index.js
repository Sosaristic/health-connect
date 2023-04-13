import { GiHeartOrgan, GiMedicines } from "react-icons/gi";
import HeartIcon from "../assets/svg/heart.svg"
import UrologyIcon from "../assets/svg/urology.svg"
import PharmacyIcon from "../assets/svg/pharmacy_alt.svg"
import DiabetesIcon from "../assets/svg/diabetes.svg"
import NeurologyIcon from "../assets/svg/neurology.svg"
import SurgicalIcon from "../assets/svg/surgical.svg"

export const successHistory = [
  {
    name: "Doctor",
    value: 175,
  },
  {
    name: "Clinic location",
    value: 50,
  },
  {
    name: "Surgery room",
    value: 30,
  },
  {
    name: "Patient Capacity",
    value: 1200,
  },
];

export const testmonialData = [
  {
    id: 1,
    name: "Sunday Omena",
    sickness: "fever",
    message: "havn't been feeling well, found the nearest doctor with this app",
  },
  {
    id: 2,
    name: "Yayi Dev",
    sickness: "headache",
    message: "Got quick medicine thanks to health connect",
  },
  {
    id: 3,
    name: "Isreal Dev",
    sickness: "Over Coding",
    message: "almost quit coding thanks to health connect for therapist",
  },
  {
    id: 4,
    name: "Harison Dev",
    sickness: "Sleeplessness",
    message: "was able to locate the nearest pharmacist shop",
  },
];

export const ServicesData = [
  {
    id: 1,
    title: "Cardiologist",
    icon: HeartIcon,
    description:
      "Link up with experts on the heart and blood vessels, You might see them for heart failure, a heart attack, and irregular heart beat",
  },
  {
    id: 2,
    title: "Dermatologists",
    icon: DiabetesIcon,
    description:
      "Have problems with ur skin, hair, nails? Do you have moles, scars, acne? Dermatologist can help",
  },
  {
    id: 3,
    title: "Neurologist",
    icon: NeurologyIcon,
    description:
      "Specialist in nervous system, which includes the brain, spinal cord, and nerves. They treat stokes, brain, and spinal tumors.",
  },
  {
    id: 4,
    title: "General Surgeons",
    icon: SurgicalIcon,
    description:
      "These Doctors can operate on all parts of your body. They can take tumors, appendences, or gallbladders and repair hernias.",
  },
  {
    id: 5,
    title: "Ureologist",
    icon: UrologyIcon,
    description:
      "These are surgeons who care for men and women for problems in the urinary tract, like a leaky bladder.",
  },
  {
    id: 6,
    title: "Pharmacist",
    icon: PharmacyIcon,
    description: "Helps patients with prescription and description on how to take drugs",
  },
];
