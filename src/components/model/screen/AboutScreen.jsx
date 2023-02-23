import React from "react";
import suya from "../../../assets/images/kznm/suya.jpg";
import photo from "../../../assets/images/kznm/photo.jpg";

const AboutScreen = () => {
  return (
    <div className="my-3 mx-10">
      <div className="flex ">
        <div className="">
          <div>Biography</div>
          <div className=" flex gap-5">
            <div>
              <img src={ photo } className=" h-[200px] rounded-sm write-style" alt="" />
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-gray-800 ">
                <tbody>
                  <tr>
                    <td className="py-1">Name</td>
                    <td>:</td>
                    <td>Khaing Zar Ni Maw</td>
                  </tr>
                  <tr>
                    <td className="py-1">Email</td>
                    <td>:</td>
                    <td>khaingzarnimaw1996@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="py-1">Phone</td>
                    <td>:</td>
                    <td>080-5160-7234</td>
                  </tr>
                  <tr>
                    <td className="py-1">Birthday</td>
                    <td>:</td>
                    <td>10-6-1996</td>
                  </tr>
                  <tr>
                    <td className="py-1">Gender</td>
                    <td>:</td>
                    <td>Female</td>
                  </tr>
                  <tr>
                    <td className="py-1">Address</td>
                    <td>:</td>
                    <td>〒 160-0007 東京都 新宿区荒木町15番地横内マンション302ホンケマンション２０２号</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
