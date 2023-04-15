import { GiHeartOrgan, GiMedicines } from "react-icons/gi";
import HeartIcon from "../assets/svg/heart.svg"
import EyeIcon from "../assets/svg/eye.svg"
import UrologyIcon from "../assets/svg/urology.svg"
import PharmacyIcon from "../assets/svg/pharmacy_alt.svg"
import DiabetesIcon from "../assets/svg/diabetes.svg"
import NeurologyIcon from "../assets/svg/neurology.svg"
import SurgicalIcon from "../assets/svg/surgical.svg"
import { AiTwotoneHome } from "react-icons/ai";
import { ImAddressBook } from "react-icons/im";
import { MdSettings, MdWorkHistory } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
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


export const DashboardLink = [
  {
    icon:<AiTwotoneHome className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>,
    name:'Overview',
    link:'/dashboard/overview'
  },
  {
    icon:<ImAddressBook className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>,
    name:'Appointment',
    link:'/dashboard/patient'
  },
  {
    icon:<MdWorkHistory className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>,
    name:'History',
    link:'/dashboard/history'
  },
  {
    icon:<BsBellFill className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>,
    name:'Notifications',
    link:'/dashboard/notification'
  },  
  {
    icon:<MdSettings className='h-[1rem] w-[1rem] lg:h-[1.5rem] lg:w-[1.5rem]'/>,
    name:'Setting',
    link:'/dashboard/setting'
  },
]

export const DoctorServices = [
  {
    name:'Urology',
    link:'urology',
  },

  {
    name:'Anesthesiologists',
    link:'anesthesiologist',
  },

  {
    name:'Cardiologists',
    link:'cardiologist',
  },

  {
    name:'Dermatologists',
    link:'dermatologist',
  },

  {
    name:'Endocrinologists',
    link:'endocrinologist',
  },

  
  {
    name:'Dentists',
    link:'Dentist',
  },
  
  {
    name:'Gastroenterologists',
    link:'gastroenterologist',
  },
  
  {
    name:'Hematologists',
    link:'hematologist',
  },

  {
    name:'Neurologists',
    link:'neurologists',
  },

  {
    name:'Neurologists',
    link:'neurologist',
  },

  {
    name:'Nephrologists',
    link:'nephrologist'
  },
  
  {
    name:'Gynecologists',
    link:'gynecologists'
  },
  
  {
    name:'Oncologists',
    link:'oncologists'
  },
  {
    name:'Ophthalmologists',
    link:'ophthalmologist'
  },
  {
    name:'Radiologists',
    link:'radiologist'
  },
  {
    name:'Pulmonologists',
    link:'pulmonologists'
  },
  {
    name:'Psychiatrists',
    link:'psychiatrists'
  },
  {
   name:'Otolaryngologists',
   link:'otolaryngologist'
  },


]