"use client";
import { useParams } from "next/navigation";
import { Anek_Malayalam } from "next/font/google";

const notoSansMalayalam = Anek_Malayalam({ subsets: ["latin"] });

function Categories() {
  const params = useParams();
  const name = params.name;
  const data = [
    {
      title: "വിയോജിപ്പ്: സമവായത്തിന്റെ ഇസ്ലാമിക സാധ്യതകൾ",
      author: "ഷമീർ കെ.എസ്",
      image:
        "https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "22 june 2022",
      description:
        "ഖുർആനിലെ സൂറത്തുൽ കഹ്ഫ് എല്ലാ വെള്ളിയാഴ്ചയും പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബ് (ശിക്ഷ) ഏശുകയില്ല എന്ന് പ്രവാചക വചനമുണ്ട്. സൂറത്തുൽ കഹ്ഫ് പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബിനെക്കുറിച്ച് ഭൂതോദയം ",
    },
    {
      title: "ഔലിയാപ്പേടി: ഭീതിയുടെ ഖുർആനിക തത്വവിചാരങ്ങൾ",
      author: "ഷമീർ കെ.എസ്",
      image:
        "https://images.unsplash.com/photo-1683661649729-1053579e0d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      time: "22 june 2022",
      description:
        "ഖുർആനിലെ സൂറത്തുൽ കഹ്ഫ് എല്ലാ വെള്ളിയാഴ്ചയും പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബ് (ശിക്ഷ) ഏശുകയില്ല എന്ന് പ്രവാചക വചനമുണ്ട്. സൂറത്തുൽ കഹ്ഫ് പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബിനെക്കുറിച്ച് ഭൂതോദയം ",
    },
    {
      title: "ഔലിയാപ്പേടി: ഭീതിയുടെ ഖുർആനിക തത്വവിചാരങ്ങൾ",
      author: "ഷമീർ കെ.എസ്",
      image:
        "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "22 june 2022",
      description:
        "ഖുർആനിലെ സൂറത്തുൽ കഹ്ഫ് എല്ലാ വെള്ളിയാഴ്ചയും പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബ് (ശിക്ഷ) ഏശുകയില്ല എന്ന് പ്രവാചക വചനമുണ്ട്. സൂറത്തുൽ കഹ്ഫ് പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബിനെക്കുറിച്ച് ഭൂതോദയം ",
    },
    {
      title: "ഔലിയാപ്പേടി: ഭീതിയുടെ ഖുർആനിക തത്വവിചാരങ്ങൾ",
      author: "ഷമീർ കെ.എസ്",
      image:
        "https://images.unsplash.com/photo-1683526976156-1a3f1a315049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "22 june 2022",
      description:
        "ഖുർആനിലെ സൂറത്തുൽ കഹ്ഫ് എല്ലാ വെള്ളിയാഴ്ചയും പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബ് (ശിക്ഷ) ഏശുകയില്ല എന്ന് പ്രവാചക വചനമുണ്ട്. സൂറത്തുൽ കഹ്ഫ് പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബിനെക്കുറിച്ച് ഭൂതോദയം ",
    },
  ];
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-red-900 hover:text-black dark:text-white">
              {name.toUpperCase()}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {data.map((item, key) => (
              <article key={key} className="p-6 group hover:cursor-pointer bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex  justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Tutorial
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-red-900 transition group-hover:text-red-400 dark:text-white">
                  <a href="#" className={notoSansMalayalam.className}>
                    {item.title}
                  </a>
                </h2>
                <p className={notoSansMalayalam.className}>
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                      alt="Jese Leos avatar"
                    />
                    <span className="font-medium dark:text-white">
                      Jese Leos
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
