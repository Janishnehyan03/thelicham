import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anek_Malayalam } from "next/font/google";
import Link from "next/link";
const notoSansMalayalam = Anek_Malayalam({ subsets: ["latin"] });

function Latest() {
  const data = [
    {
      title: "ഔലിയാപ്പേടി: ഭീതിയുടെ ഖുർആനിക തത്വവിചാരങ്ങൾ",
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
    {
      title: "ഔലിയാപ്പേടി: ഭീതിയുടെ ഖുർആനിക തത്വവിചാരങ്ങൾ",
      author: "ഷമീർ കെ.എസ്",
      image:
        "https://images.unsplash.com/photo-1682641995211-82d677b7d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "22 june 2022",
      description:
        "ഖുർആനിലെ സൂറത്തുൽ കഹ്ഫ് എല്ലാ വെള്ളിയാഴ്ചയും പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബ് (ശിക്ഷ) ഏശുകയില്ല എന്ന് പ്രവാചക വചനമുണ്ട്. സൂറത്തുൽ കഹ്ഫ് പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബിനെക്കുറിച്ച് ഭൂതോദയം ",
    },
    {
      title: "ഔലിയാപ്പേടി: ഭീതിയുടെ ഖുർആനിക തത്വവിചാരങ്ങൾ",
      author: "ഷമീർ കെ.എസ്",
      image:
        "https://images.unsplash.com/photo-1683728213861-47854a0c0e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "22 june 2022",
      description:
        "ഖുർആനിലെ സൂറത്തുൽ കഹ്ഫ് എല്ലാ വെള്ളിയാഴ്ചയും പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബ് (ശിക്ഷ) ഏശുകയില്ല എന്ന് പ്രവാചക വചനമുണ്ട്. സൂറത്തുൽ കഹ്ഫ് പതിവാക്കുന്നവർക്ക് അന്ത്യനാളിലെ അദാബിനെക്കുറിച്ച് ഭൂതോദയം ",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold hover:text-black text-red-900 dark:text-white">
            Our Latest Posts
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {data.map((item, key) => (
            <div className="max-w-sm bg-white border hover:bg-gray-100 group border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href={`/posts/${item.title}`}>
                <img className="rounded-t-lg" src={item.image} alt />
              </Link>

              <div className="p-5">
                <Link href={`/posts/${item.title}`}>
                  <h5
                    className={`${notoSansMalayalam.className} font-bold mb-2 transition group-hover:text-red-500 text-red-800`}
                  >
                    {item.title}
                  </h5>
                </Link>
                <p className={notoSansMalayalam.className}>
                  {item.description}
                </p>
                <div className="flex mt-3 items-center">
                  <FontAwesomeIcon icon={faPen} className="text-gray-400" />
                  <p
                    className={`${notoSansMalayalam.className} font-semibold text-gray-400`}
                  >
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Latest;
