import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Noto_Serif_Malayalam } from "next/font/google";
import Image from "next/image";

const notoSansMalayalam = Noto_Serif_Malayalam({ subsets: ["latin"] });
// export const metadata = {
//   title: "Thelicham Monthly",
// };

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `${decodeURIComponent(params.name)} | Thelicham Monthly`,
    
  };
}
export default async function RepoPage({ params: { name } }) {
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
    <>
      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
          <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full mx-auto space-y-4 text-center">
              <p className="text-xs font-semibold tracking-wider uppercase">
                #Articles
              </p>
              <h1
                className={`text-4xl font-bold text-red-800 leading-tight md:text-5xl ${notoSansMalayalam.className}`}
              >
                വിയോജിപ്പ്: സമവായത്തിന്റെ ഇസ്ലാമിക സാധ്യതകൾ
              </h1>
              <Image
                src="https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt={"title"}
                className="w-full rounded-[20px]"
                height={400}
                width={400}
              />
              <p className="text-sm dark:text-gray-400">
                <FontAwesomeIcon icon={faPen} className="text-gray-500 mr-2" />
                <a
                  rel="noopener noreferrer"
                  href="#"
                  target="_blank"
                  className="underline dark:text-violet-400"
                >
                  <span className="mr-3">Leroy Jenkins</span>
                </a>
              </p>
              <time>Feb 12th 2021</time>
            </div>
            <div
              className={`dark:text-gray-100 ${notoSansMalayalam.className}`}
            >
              <p>
                സംശയങ്ങൾ പ്രകടിപ്പിക്കുകയും അവക്കുള്ള ഉത്തരങ്ങൾ
                കണ്ടെത്തലുമൊക്കെയാണ് ഇസ്‌ലാമിക ജ്ഞാന സമ്പാദനത്തിന്റെ ഏറ്റവും
                മഹിതമായ ഭാഗമെന്ന് ഞാൻ കരുതുന്നു. ആദ്യവിശ്വാസികളായ സ്വഹാബികൾ
                തങ്ങളുടെ സംശയങ്ങൾ മുഹമ്മദ് നബിയോട് ചോദിക്കുകയും ഉത്തരം
                കണ്ടെത്തുകയുമായിരുന്നു ചെയ്തിരുന്നത്. വിശുദ്ധ ഖുർആനിന്റെ
                വലിയൊരളവോളവും, ഹദീസുകളുടെ വലിയ ഭാഗവും അവരുടെ സംശയങ്ങൾക്കുള്ള
                ഉത്തരങ്ങളടങ്ങിയതായിരുന്നു. മുഹമ്മദ് നബിയുടെ വഫാത്തിനു ശേഷം
                സ്വഹാബികൾ തങ്ങളിൽ നിന്ന് ഏറ്റവും അറിവുള്ള പ്രമുഖരായ സ്വഹാബികളെ
                സമീപിക്കുകയും അവരുടെ സമീപനങ്ങൾ ആരായുകയും ചെയ്തിരുന്നു. പിന്നീട്
                വന്ന സമൂഹം അവരിൽ നിന്ന് പാണ്ഡിത്യമുള്ളവരുമായി തങ്ങളുടെ സംശയങ്ങൾ
                പങ്കുവെച്ചു.
              </p>
              <br />
              <p>
                ഖലീഫ ഉസ്മാൻ(റ)വിന്റെ വധത്തോടെയാണ് ഇസ്‌ലാമിക ലോകത്തെ വലിയ
                പ്രതിസന്ധികൾ രൂപമെടുത്തത്. പ്രവാചകർക്കു ശേഷം ആരാണ്
                നേതൃത്വമേറ്റെടുക്കേണ്ടത് എന്നതു പോലെയുള്ള നിരവധി വിഷയങ്ങളിൽ
                മുസ്‌ലിം സമൂഹം വലിയ രീതിയിലുള്ള സംഘട്ടനത്തിലേർപ്പെട്ടു.
                പലപ്പോഴും അധികാരവടംവലികളായിരുന്നുവെങ്കിൽ അതിനോട് കൂടെ തന്നെ
                ഇസ്‌ലാമിക വൈജ്ഞാനിക മേഖലകളിലേക്കുമായി അവ വഴിമാറി. ഇസ്‌ലാമിന്റെ
                ആദ്യകാലത്ത് ഇസ്‌ലാമിക നിയമങ്ങളുടെ രീതിശാസ്ത്രത്തെക്കുറിച്ചും,
                അവയുടെ സ്വഭാവത്തെക്കുറിച്ചും അടിസ്ഥാന ആശയരൂപീകരണത്തെ
                സംബന്ധിച്ചും, ഹദീസുകളിൽ സ്വീകരണനിരാകരണ മാർഗങ്ങളുടെ മാനദണ്ഡം
                സംബന്ധിച്ചുമെല്ലാമായി വലിയ രീതിയിലുള്ള തർക്കങ്ങളാണ് നടന്നത്.
              </p>
              <br />
              <p>
                സംശയങ്ങൾ പ്രകടിപ്പിക്കുകയും അവക്കുള്ള ഉത്തരങ്ങൾ
                കണ്ടെത്തലുമൊക്കെയാണ് ഇസ്‌ലാമിക ജ്ഞാന സമ്പാദനത്തിന്റെ ഏറ്റവും
                മഹിതമായ ഭാഗമെന്ന് ഞാൻ കരുതുന്നു. ആദ്യവിശ്വാസികളായ സ്വഹാബികൾ
                തങ്ങളുടെ സംശയങ്ങൾ മുഹമ്മദ് നബിയോട് ചോദിക്കുകയും ഉത്തരം
                കണ്ടെത്തുകയുമായിരുന്നു ചെയ്തിരുന്നത്. വിശുദ്ധ ഖുർആനിന്റെ
                വലിയൊരളവോളവും, ഹദീസുകളുടെ വലിയ ഭാഗവും അവരുടെ സംശയങ്ങൾക്കുള്ള
                ഉത്തരങ്ങളടങ്ങിയതായിരുന്നു. മുഹമ്മദ് നബിയുടെ വഫാത്തിനു ശേഷം
                സ്വഹാബികൾ തങ്ങളിൽ നിന്ന് ഏറ്റവും അറിവുള്ള പ്രമുഖരായ സ്വഹാബികളെ
                സമീപിക്കുകയും അവരുടെ സമീപനങ്ങൾ ആരായുകയും ചെയ്തിരുന്നു. പിന്നീട്
                വന്ന സമൂഹം അവരിൽ നിന്ന് പാണ്ഡിത്യമുള്ളവരുമായി തങ്ങളുടെ സംശയങ്ങൾ
                പങ്കുവെച്ചു.
              </p>
              <br />
              <p>
                ഖലീഫ ഉസ്മാൻ(റ)വിന്റെ വധത്തോടെയാണ് ഇസ്‌ലാമിക ലോകത്തെ വലിയ
                പ്രതിസന്ധികൾ രൂപമെടുത്തത്. പ്രവാചകർക്കു ശേഷം ആരാണ്
                നേതൃത്വമേറ്റെടുക്കേണ്ടത് എന്നതു പോലെയുള്ള നിരവധി വിഷയങ്ങളിൽ
                മുസ്‌ലിം സമൂഹം വലിയ രീതിയിലുള്ള സംഘട്ടനത്തിലേർപ്പെട്ടു.
                പലപ്പോഴും അധികാരവടംവലികളായിരുന്നുവെങ്കിൽ അതിനോട് കൂടെ തന്നെ
                ഇസ്‌ലാമിക വൈജ്ഞാനിക മേഖലകളിലേക്കുമായി അവ വഴിമാറി. ഇസ്‌ലാമിന്റെ
                ആദ്യകാലത്ത് ഇസ്‌ലാമിക നിയമങ്ങളുടെ രീതിശാസ്ത്രത്തെക്കുറിച്ചും,
                അവയുടെ സ്വഭാവത്തെക്കുറിച്ചും അടിസ്ഥാന ആശയരൂപീകരണത്തെ
                സംബന്ധിച്ചും, ഹദീസുകളിൽ സ്വീകരണനിരാകരണ മാർഗങ്ങളുടെ മാനദണ്ഡം
                സംബന്ധിച്ചുമെല്ലാമായി വലിയ രീതിയിലുള്ള തർക്കങ്ങളാണ് നടന്നത്.
              </p>
              <br />
              <p>
                സംശയങ്ങൾ പ്രകടിപ്പിക്കുകയും അവക്കുള്ള ഉത്തരങ്ങൾ
                കണ്ടെത്തലുമൊക്കെയാണ് ഇസ്‌ലാമിക ജ്ഞാന സമ്പാദനത്തിന്റെ ഏറ്റവും
                മഹിതമായ ഭാഗമെന്ന് ഞാൻ കരുതുന്നു. ആദ്യവിശ്വാസികളായ സ്വഹാബികൾ
                തങ്ങളുടെ സംശയങ്ങൾ മുഹമ്മദ് നബിയോട് ചോദിക്കുകയും ഉത്തരം
                കണ്ടെത്തുകയുമായിരുന്നു ചെയ്തിരുന്നത്. വിശുദ്ധ ഖുർആനിന്റെ
                വലിയൊരളവോളവും, ഹദീസുകളുടെ വലിയ ഭാഗവും അവരുടെ സംശയങ്ങൾക്കുള്ള
                ഉത്തരങ്ങളടങ്ങിയതായിരുന്നു. മുഹമ്മദ് നബിയുടെ വഫാത്തിനു ശേഷം
                സ്വഹാബികൾ തങ്ങളിൽ നിന്ന് ഏറ്റവും അറിവുള്ള പ്രമുഖരായ സ്വഹാബികളെ
                സമീപിക്കുകയും അവരുടെ സമീപനങ്ങൾ ആരായുകയും ചെയ്തിരുന്നു. പിന്നീട്
                വന്ന സമൂഹം അവരിൽ നിന്ന് പാണ്ഡിത്യമുള്ളവരുമായി തങ്ങളുടെ സംശയങ്ങൾ
                പങ്കുവെച്ചു.
              </p>
              <br />
              <p>
                ഖലീഫ ഉസ്മാൻ(റ)വിന്റെ വധത്തോടെയാണ് ഇസ്‌ലാമിക ലോകത്തെ വലിയ
                പ്രതിസന്ധികൾ രൂപമെടുത്തത്. പ്രവാചകർക്കു ശേഷം ആരാണ്
                നേതൃത്വമേറ്റെടുക്കേണ്ടത് എന്നതു പോലെയുള്ള നിരവധി വിഷയങ്ങളിൽ
                മുസ്‌ലിം സമൂഹം വലിയ രീതിയിലുള്ള സംഘട്ടനത്തിലേർപ്പെട്ടു.
                പലപ്പോഴും അധികാരവടംവലികളായിരുന്നുവെങ്കിൽ അതിനോട് കൂടെ തന്നെ
                ഇസ്‌ലാമിക വൈജ്ഞാനിക മേഖലകളിലേക്കുമായി അവ വഴിമാറി. ഇസ്‌ലാമിന്റെ
                ആദ്യകാലത്ത് ഇസ്‌ലാമിക നിയമങ്ങളുടെ രീതിശാസ്ത്രത്തെക്കുറിച്ചും,
                അവയുടെ സ്വഭാവത്തെക്കുറിച്ചും അടിസ്ഥാന ആശയരൂപീകരണത്തെ
                സംബന്ധിച്ചും, ഹദീസുകളിൽ സ്വീകരണനിരാകരണ മാർഗങ്ങളുടെ മാനദണ്ഡം
                സംബന്ധിച്ചുമെല്ലാമായി വലിയ രീതിയിലുള്ള തർക്കങ്ങളാണ് നടന്നത്.
              </p>
              <br />
              <p>
                സംശയങ്ങൾ പ്രകടിപ്പിക്കുകയും അവക്കുള്ള ഉത്തരങ്ങൾ
                കണ്ടെത്തലുമൊക്കെയാണ് ഇസ്‌ലാമിക ജ്ഞാന സമ്പാദനത്തിന്റെ ഏറ്റവും
                മഹിതമായ ഭാഗമെന്ന് ഞാൻ കരുതുന്നു. ആദ്യവിശ്വാസികളായ സ്വഹാബികൾ
                തങ്ങളുടെ സംശയങ്ങൾ മുഹമ്മദ് നബിയോട് ചോദിക്കുകയും ഉത്തരം
                കണ്ടെത്തുകയുമായിരുന്നു ചെയ്തിരുന്നത്. വിശുദ്ധ ഖുർആനിന്റെ
                വലിയൊരളവോളവും, ഹദീസുകളുടെ വലിയ ഭാഗവും അവരുടെ സംശയങ്ങൾക്കുള്ള
                ഉത്തരങ്ങളടങ്ങിയതായിരുന്നു. മുഹമ്മദ് നബിയുടെ വഫാത്തിനു ശേഷം
                സ്വഹാബികൾ തങ്ങളിൽ നിന്ന് ഏറ്റവും അറിവുള്ള പ്രമുഖരായ സ്വഹാബികളെ
                സമീപിക്കുകയും അവരുടെ സമീപനങ്ങൾ ആരായുകയും ചെയ്തിരുന്നു. പിന്നീട്
                വന്ന സമൂഹം അവരിൽ നിന്ന് പാണ്ഡിത്യമുള്ളവരുമായി തങ്ങളുടെ സംശയങ്ങൾ
                പങ്കുവെച്ചു.
              </p>
              <br />
              <p>
                ഖലീഫ ഉസ്മാൻ(റ)വിന്റെ വധത്തോടെയാണ് ഇസ്‌ലാമിക ലോകത്തെ വലിയ
                പ്രതിസന്ധികൾ രൂപമെടുത്തത്. പ്രവാചകർക്കു ശേഷം ആരാണ്
                നേതൃത്വമേറ്റെടുക്കേണ്ടത് എന്നതു പോലെയുള്ള നിരവധി വിഷയങ്ങളിൽ
                മുസ്‌ലിം സമൂഹം വലിയ രീതിയിലുള്ള സംഘട്ടനത്തിലേർപ്പെട്ടു.
                പലപ്പോഴും അധികാരവടംവലികളായിരുന്നുവെങ്കിൽ അതിനോട് കൂടെ തന്നെ
                ഇസ്‌ലാമിക വൈജ്ഞാനിക മേഖലകളിലേക്കുമായി അവ വഴിമാറി. ഇസ്‌ലാമിന്റെ
                ആദ്യകാലത്ത് ഇസ്‌ലാമിക നിയമങ്ങളുടെ രീതിശാസ്ത്രത്തെക്കുറിച്ചും,
                അവയുടെ സ്വഭാവത്തെക്കുറിച്ചും അടിസ്ഥാന ആശയരൂപീകരണത്തെ
                സംബന്ധിച്ചും, ഹദീസുകളിൽ സ്വീകരണനിരാകരണ മാർഗങ്ങളുടെ മാനദണ്ഡം
                സംബന്ധിച്ചുമെല്ലാമായി വലിയ രീതിയിലുള്ള തർക്കങ്ങളാണ് നടന്നത്.
              </p>
            </div>
            <div className="pt-12 border-t dark:border-gray-700">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                  <p className="dark:text-gray-400">
                    Sed non nibh iaculis, posuere diam vitae, consectetur neque.
                    Integer velit ligula, semper sed nisl in, cursus commodo
                    elit. Pellentesque sit amet mi luctus ligula euismod
                    lobortis ultricies et nibh.
                  </p>
                </div>
              </div>
              <div className="flex justify-center pt-4 space-x-4 align-center">
  <a
    rel="noopener noreferrer"
    href="#"
    aria-label="GitHub"
    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
  >
    <img
      src="/social-media/github.svg"
      alt="GitHub"
      className="w-4 h-4 fill-current"
    />
  </a>
  <a
    rel="noopener noreferrer"
    href="#"
    aria-label="Dribble"
    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
  >
    <img
      src="/social-media/dribble.svg"
      alt="Dribble"
      className="w-4 h-4 fill-current"
    />
  </a>
  <a
    rel="noopener noreferrer"
    href="#"
    aria-label="Twitter"
    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
  >
    <img
      src="/social-media/twitter.svg"
      alt="Twitter"
      className="w-4 h-4 fill-current"
    />
  </a>
  <a
    rel="noopener noreferrer"
    href="#"
    aria-label="Email"
    className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
  >
    <img
      src="/social-media/email.svg"
      alt="Email"
      className="w-4 h-4 fill-current"
    />
  </a>
</div>

            </div>
          </article>
        </main>
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {data.map((item, key) => (
                <article className="max-w-xs">
                  <a href="#">
                    <img
                      src={item.image}
                      className="mb-5 rounded-lg"
                      alt="Image 1"
                    />
                  </a>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                    <a href="#" className={notoSansMalayalam.className}>
                      {item.title}
                    </a>
                  </h2>
                  <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                    {item.author}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
