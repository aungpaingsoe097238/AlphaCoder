import StudyGirl from "../assets/images/wallpaper/studygirl.jpg";
import StudyGirl2 from "../assets/images/wallpaper/studygirl2.jpg";
import StudyGirl3 from "../assets/images/wallpaper/studygirl3.jpg";
import Girl from "../assets/images/wallpaper/girl.png";
import Girl2 from "../assets/images/wallpaper/girl2.png";
import Girl3 from "../assets/images/wallpaper/girl3.png";
import alpha from "../assets/images/projects/alpha.png"
import mkitchen from "../assets/images/projects/mkitchen.png"

const projectData = [
    {
      title: "Alpha",
      image: alpha,
      url: "https://aps-alpha.vercel.app",
      github: "https://github.com/aungpaingsoe097238/portfolio",
      text: "This is my old and first portfolio project.In this project,admin can login and register to the firebase authorization.Admin can create, delete, and update blog, photos, and project.",
      tools: [
        'JavaScript',
        'Vue2',
        'FireBase',
        'VueBootStrap'
      ]
    },
    {
      title: "Mkitchen",
      image: mkitchen,
      url: "https://testing.mkitchen.com.mm/dashboard",
      github: "",
      text: "This is ecomerce project.You can login with userName is super_admin and password is secret123",
      tools: [
        'JavaScript',
        'NuxtJs',
        'Laravel',
        'Vuetify',
        'Tailwind'
      ]
    },
  ];

export default projectData;