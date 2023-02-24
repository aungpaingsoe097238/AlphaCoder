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
      <LineTitle title="Programming" />
      <div className=" flex">
        <div className=" basis-1/3">
          <div className="flex flex-col gap-3 text-slate-700">
            <ul className=" flex justify-center gap-6">
              <li>
                <div className=" w-[50px] text-center">
                  <AiFillHtml5 className=" text-2xl mx-auto" />
                  <span className="text-xs">Html</span>
                </div>
              </li>
              <li>
                <div className="w-[50px]  text-center">
                  <IoLogoCss3 className=" text-2xl mx-auto" />
                  <span className="text-xs">Css</span>
                </div>
              </li>
              <li>
                <div className="w-[50px]  text-center">
                  <IoLogoJavascript className=" text-2xl mx-auto" />
                  <span className="text-xs">JavaScript</span>
                </div>
              </li>
            </ul>
            <ul className=" flex justify-center gap-6">
              <li>
                <div className=" w-[50px] text-center">
                  <SiBootstrap className=" text-2xl mx-auto" />
                  <span className="text-xs">Bootstrap5</span>
                </div>
              </li>
              <li>
                <div className="w-[50px]  text-center">
                  <SiTailwindcss className=" text-2xl mx-auto" />
                  <span className="text-xs">TailwindCss</span>
                </div>
              </li>
              <li>
                <div className="w-[50px]  text-center">
                  <SiReact className=" text-2xl mx-auto" />
                  <span className="text-xs">React</span>
                </div>
              </li>
            </ul>
            <ul className=" flex justify-center gap-6">
              <li>
                <div className=" w-[50px] text-center">
                  <TbHash className=" text-2xl mx-auto" />
                  <span className="text-xs">C#</span>
                </div>
              </li>
              <li>
                <div className="w-[50px]  text-center">
                  <GrMysql className=" text-2xl mx-auto" />
                  <span className="text-xs">MySQL</span>
                </div>
              </li>
              <li>
                <div className="w-[50px]  text-center">
                  <SiMongodb className=" text-2xl mx-auto" />
                  <span className="text-xs">MongoDB</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" basis-1/3">
          <div className=" text-lg">Other</div>
          <p className=" text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptatibus consectetur dolorum omnis. Laboriosam, obcaecati!
            Nostrum officiis neque repellat, dolorem ea voluptates aut. Omnis ex
            eos eveniet. Similique, perspiciatis itaque.
          </p>
        </div>
      </div>
      <LineTitle title="Education" />
      <div className=" flex">
        <div className=" basis-1/3">
          <div className=" text-center">
            <div className=" flex flex-col gap-4">
              <div>2012年10月 〜 2016年10月</div>
              <div>2019年3月 〜 2021年3月</div>
              <div>2021年4月 〜 2023年3月</div>
            </div>
          </div>
        </div>
        <div className=" basis-2/3">
          <div className=" flex flex-col gap-4">
            <div>
              B.A(Geography) Yangon University of Distance Education (Dagon
              branch)
            </div>
            <div>国際言葉学院</div>
            <div>
              専門学校静岡電子情報カレッジ IT スペシャリスト IT
              ゲームロボット＆システム学科
            </div>
          </div>
        </div>
      </div>
      <LineTitle title="Experience" />
    </div>
  );
};

export default AboutScreen;
