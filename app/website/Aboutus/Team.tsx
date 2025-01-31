// Team.tsx
import Image from "next/image";
export const Team = () => {
  return (
    <>
      <div className="font-sans pt-10 pb-10 bg-black">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 py-px mb-4 text-xl  font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
              <strong>Team Showcase:</strong>
            </p>
            <p className="text-base text-gray-100 md:text-lg">
              Discover the talented individuals who make up our dynamic
              team—each contributing their unique skills and perspectives to our
              shared success.
            </p>
          </div>
          <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
            {/* Sudeeksha maam */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705691622/Tudar/sudheeksha_youefw.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Sudeeksha S Pai</p>
                <p className="mb-4 text-xs text-gray-100">
                  Assistant Professor Department of Humanities
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  As the Club Faculty Coordinator, play a pivotal role in
                  guiding and supporting student initiatives, ensuring a dynamic
                  and enriching club experience.
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


            {/* Shushan */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705692297/Tudar/Screenshot_2024-01-20_005439_wrmlfv.png"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Shushan Kotian</p>
                <p className="mb-4 text-xs text-gray-100">President</p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  As President, leads with vision, driving the organization
                  towards success through strategic planning and inspiring
                  leadership
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Anwesh */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705691469/Tudar/IMG_20231110_184846_-_4NM20EE009_ANWESH_R_SHETTY_m8awhp.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Anwesh</p>
                <p className="mb-4 text-xs text-gray-100">Secretary</p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Arrange meeting place, prepare an agenda, record minutes, and
                  provide regular updates to the president and institute on
                  pertinent matters affecting the proceedings
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Blenson */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581159/Tudar/IMG_0014_-_BLENSON_CARDOZA_nmrqje.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Blenson Cardoza</p>
                <p className="mb-4 text-xs text-gray-100">Head - Tulu Lipi </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  As the Head of Tulu Script Lipi, lead the innovation in
                  preserving and enhancing the Tulu language through script
                  development
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Suvith */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705626318/Tudar/suvith_pvlksc.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Suvith Kumar</p>
                <p className="mb-4 text-xs text-gray-100">Technical Head</p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  In my role as the Technical Head, I&pos;m a forward-thinking
                  technologist propelling our cultural community into the
                  digital age.
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Brijwin */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581160/Tudar/IMG_2558_-_4NM20AI013_BRIJWIN_BALAKRISHNA_qzmftp.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Brijwin Balakrishna</p>
                <p className="mb-4 text-xs text-gray-100">
                  Digital and Social Media Head
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Designing and managing various creatives for the digital
                  assets of the club on various social media platforms
                </p>
              </div>
            </div>
            {/* shreya */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581172/Tudar/Shreya_-_NNM22BT034_SHREYA_P_V_jz5arh.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Shreya P V</p>
                <p className="mb-4 text-xs text-gray-100">Documentation Head</p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Creating , maintaining ,managing the documentation of club
                  events, meetings and other activities.
                </p>
              </div>
            </div>
            {/* Vishnu         */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581177/Tudar/SPV00316_-_4NM22AI405_VISHNUPRASAD_V_BHAT_jwyz6z.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Vishnuprasad V Bhat</p>
                <p className="mb-4 text-xs text-gray-100">Joint Secretary </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  I ensure our club adheres to the event timeline, ensuring
                  seamless execution of all our events.
                </p>
              </div>
            </div>
            {/* Tvisha */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705691467/Tudar/personal2_-_4NM21CS195_TVISHA_PRAKASH_JARAPPA_q3ocvx.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Tvisha Prakash</p>
                <p className="mb-4 text-xs text-gray-100">
                  {" "}
                  Social Media - Cohead
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  As Co-Head of Social Media, spearheads our digital presence,
                  driving engagement and fostering connections in the virtual
                  realm
                </p>
              </div>
            </div>
            {/* vignesh */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581160/Tudar/vignesh_mallya_lipi_-_NNM22BT040_VIGNESH_MALLYA_rsbmgo.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold"> Vignesh mallya . </p>
                <p className="mb-4 text-xs text-gray-100">
                  Asst tulu lipi head
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  To promote tulu language and lipi. Conduct various events
                  related to same. Tulu lipi classes and other activities.
                </p>
              </div>
            </div>
            {/* Prathama */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581151/Tudar/IMG-20231122-WA0008_-_4NM21CS115_Prathama_S_J_pfcl6j.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Prathama S J</p>
                <p className="mb-4 text-xs text-gray-100">
                  Event Management Head
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Overseeing and coordinating various events, ensuring their
                  successful planning, execution, and follow-up
                </p>
              </div>
            </div>
            {/* mayur  */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581186/Tudar/mayur_m_shet_-_NNM22IS090_MAYUR_M_SHET_bqwqiu.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Mayur Shet</p>
                <p className="mb-4 text-xs text-gray-100">co head SMC</p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                Creative visionary curating compelling visual stories for social media excellence.
                </p>
              </div>
            </div>
            {/* Amrith */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581155/Tudar/IMG_20240107_141407_-_Amrith_R_Naik_tsdjgy.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Amrith R Naik</p>
                <p className="mb-4 text-xs text-gray-100">
                  Event Management Co-head
                </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Collaborating in the planning and execution of events for our
                  club with enthusiasm and precision
                </p>
              </div>
            </div>
            {/* Gagan */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581155/Tudar/Gagan_Rai_-_Gagan_Rai_xuucv8.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Gagan R Rai</p>
                <p className="mb-4 text-xs text-gray-100">Joint Secretary </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Managing cultural events, coordinating activities, and
                  supporting administrative tasks.
                </p>
              </div>
            </div>
            {/* Sampreeth */}
            <div className="grid sm:grid-cols-3">
              <div className="relative sm:h-48 rounded shadow max-sm:h-80">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://res.cloudinary.com/deax1ssmv/image/upload/v1705581153/Tudar/Sampreeth_T_Poojary_-_Sampreeth_poojary_ejye9q.jpg"
                />
              </div>
              <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                <p className="text-lg font-bold">Sampreeth T Poojary</p>
                <p className="mb-4 text-xs text-gray-100"> Core Member </p>
                <p className="mb-4 text-sm tracking-wide text-gray-100">
                  Writing a content for social media post, volunteering events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
