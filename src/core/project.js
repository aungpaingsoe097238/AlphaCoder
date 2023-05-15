
import alpha from "../assets/images/projects/alpha.png"
import mkitchen from "../assets/images/projects/mkitchen.png"
import reactsocial from "../assets/images/projects/social.png"

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
    {
      title: "ReactSocial",
      image: reactsocial,
      url: "https://social-peach.vercel.app",
      github: "https://github.com/aungpaingsoe097238/react-fb-social.git",
      text: "This is a social media website like instagram.You can make CRUD post and give like and dislike and also create comments.",
      tools: [
        'JavaScript',
        'ReactJs',
        'FireBase',
        'Tailwind'
      ]
    },
  ];

export default projectData;