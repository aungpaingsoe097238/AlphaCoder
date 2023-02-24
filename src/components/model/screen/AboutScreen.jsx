import React from "react";
import suya from "../../../assets/images/kznm/suya.jpg";
import photo from "../../../assets/images/kznm/photo.jpg";
import { BsFacebook, BsInstagram, BsLine, BsGithub } from "react-icons/bs";
import LineTitle from "../../utli/LineTitle";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap, SiTailwindcss, SiReact, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbHash } from "react-icons/tb";

const AboutScreen = () => {
  const table_abouts = [
    { title: "Name", text: "Khaing Zar Ni Maw" },
    { title: "Email", text: "khaingzarnimaw1996@gmail.com" },
    { title: "Phone", text: "080-5160-7234" },
    { title: "Birthday", text: "1996-6-10" },
    { title: "Gender", text: "Female" },
    { title: "Nationality", text: "Burmese" },
    { title: "Relagion", text: "Buddha" },
    {
      title: "Address",
      text: "〒 160-0007 東京都 新宿区荒木町15番地横内マンション302ホンケマンション２０２号"
    }
  ];

  return (
    <div className=" overflow-y-auto h-full m-5">
      <LineTitle title="Biography" />
      <div className="flex ">
        <div className=" basis-1/3">
          <div className="">
            <img
              src={photo}
              className=" h-64 mx-auto rounded-sm shadow-sm "
              alt=""
            />
          </div>
          <div className="my-2">
            <div className=" flex justify-center items-center gap-5 text-slate-700">
              <BsFacebook className=" text-xl cursor-pointer" />
              <BsInstagram className=" text-xl cursor-pointer" />
              <BsLine className=" text-xl cursor-pointer" />
              <BsGithub className=" text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className=" basis-2/3">
          <div className=" flex flex-col gap-2">
            <div>
              <table className=" text-sm text-slate-700">
                <tbody>
                  {table_abouts?.map((list) => (
                    <tr>
                      <td className="py-1">{list.title}</td>
                      <td>:</td>
                      <td>{list.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <button className=" py-2 px-3 border border-slate-700 rounded-sm hover:bg-slate-700 hover:text-white ">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
      <LineTitle title="Knowledge" />
      <div>
        <ul>
          <li>
            <div className=" p-2 border rounded-lg inline-block">
              <AiFillHtml5 className=" text-2xl" />
              <span>Html</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutScreen;
