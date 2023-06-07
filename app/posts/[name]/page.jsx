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
          <article className="max-w-3xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
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
           
            <div className={notoSansMalayalam.className}>
              <div
                className={`html-content`}
                style={{
                  color:"red"
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                  <style>
                  @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+Malayalam:wght@400&display=swap");
                  p,
                  span{
                    font-family: 'Noto Serif Malayalam', serif !important;
                    font-size:18px !important;
                  }
                  img{
                    margin:14px 0 !important;
                    border-radius:10px !important;
                  }
                  </style>
              <p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഹ്യുമാനിറ്റീസിലെ മറ്റു വിഭാഗങ്ങളിലെല്ലാം വര്‍ഷങ്ങളായി ഇത്തരം പ്രൊജക്റ്റുകള്‍ സിലബസുകളില്‍ ഉള്‍പെടുത്തിയിട്ടുണ്ടെങ്കിലും ഇസ്ലാമിക് സ്റ്റഡീസിലെ അധ്യാപകര്‍ ഇതിന് വേണ്ട കാര്യമായ ആലോചനകളൊന്നും നടത്തിയിട്ടില്ല. ഈയൊരവസ്ഥക്ക് പലവിധ കാരണങ്ങള്‍ നിരത്താമെങ്കിലും നോര്‍ത്ത് അമേരിക്കയിലെ ബിരുദ വിദ്യാര്‍ത്ഥികളെ സംബന്ധിച്ചിടത്തോളം പ്രധാന തടസ്സമായിട്ടുള്ളത് ഇംഗ്ലീഷ് സോഴ്‌സുകളുടെ ദൗര്‍ലഭ്യതയാണ്.</span></p>\n<p style="text-align:start;"></p>\n<img src="https://cdn.truecopymagazine.in/image-cdn/width=1024/img/2022-07/bosnia-and-herzegovina-a9af.jpg" alt="undefined" style="height: auto;width: auto"/>\n<p></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family:'Noto Serif Malayalam', serif;">ഇസ്ലാമിക് ടെക്‌സ്റ്റുകളെ ചിലര്‍ക്കെങ്കിലും കൈകാര്യം ചെയ്യാന്‍ സാധിക്കുന്നുണ്ടെങ്കിലും വലിയൊരു ശതമാനവും ഭാഷാ സാങ്കേതികത്വങ്ങള്‍ വശമില്ലാത്തവരാണ്. എന്നാല്‍, അടുത്തിടെ പുറത്തിറങ്ങിയ ഇസ്ലാമിക് ടെക്‌സ്റ്റുകളുടെ ഇംഗ്ലീഷ് വിവര്‍ത്തനങ്ങള്‍ അണ്ടര്‍ ഗ്രാജ്വേറ്റ് തലത്തില്‍ ഡിജിറ്റല്‍ ഹ്യുമാനിറ്റീസ് പ്രൊജക്റ്റുകളുടെ സാധ്യതകള്‍ മുന്നോട്ട് വെക്കുന്നുമുണ്ട്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ആദ്യകാല കര്‍മ്മശാസ്ത്ര നിയമങ്ങള്‍ കൈമാറ്റം നടത്തിയ ഹദീസ് നിവേദകരെ സംബന്ധിച്ച ഒരു പ്രൊജക്റ്റാണ് ഈ അധ്യായത്തിലൂടെ ചര്‍ച്ച ചെയ്യുന്നത്. വാഷിങ്ങ്ടണ്‍ ആന്റ് ലീ യൂണിവേഴ്‌സിറ്റിയിലെ ചരിത്രവിഭാഗം ഇസ്ലാമിക നാഗരികതയുടെ തുടക്കകാലത്തെ കുറിച്ച് നടത്തിയ ഒരു പ്രാഥമിക തല സര്‍വേയുടെ ഭാഗമായി 12 വിദ്യാര്‍ത്ഥികള്‍ ചേര്‍ന്നാണ് ഇത് തയ്യാറാക്കിയിട്ടുള്ളത്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഇസ്ലാമിക് ലോയുടെ കൈമാറ്റത്തെ സംബന്ധിച്ച രാഷ്ട്രീയ സാമൂഹിക സാംസ്‌കാരിക ചരിത്രത്തെ കുറിച്ച് പുതിയ ഉള്‍കാഴ്ചകള്‍ ലഭിക്കുന്ന വിധത്തില്‍ ചരിത്രാന്വേഷണത്തിന്റെ പരമ്പരാഗത രീതികളും ന്യൂതന കമ്പ്യൂട്ടര്‍ വിദ്യകളും സമന്വയിപ്പിച്ച് കൊണ്ടാണ് അവര്‍ ഈയൊരു ശ്രമം നടത്തിയിട്ടുള്ളത്. അതവാ, പ്രൈമറി സോഴ്‌സുകളെ സൂക്ഷ്്്്്മമായി വായിക്കുകയും സെക്കണ്ടറി സോഴ്‌സുകളെ വിമര്‍ശനാത്മകമായി സമീപിക്കുകയും ചെയ്തതോടൊപ്പം ഡാറ്റകള്‍ വേര്‍ത്തിരിച്ചെടുക്കുകയും ഡാറ്റാബേസ് നിര്‍മ്മിക്കുകയും ഓണ്‍ലൈന്‍ വിഷ്വലൈസേഷന്‍ സോഫ്റ്റ്‌വയറുകള്‍ ഉപയോഗപ്പെടുത്തുകയും ചെയ്തു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">മുവത്വയെ അടിസ്ഥാനപ്പെടുത്തി അബ്ദുല്‍ ഹയ്യ് ലഖ്‌നവി രചിച്ച ജീവചരിത്ര നിഘണ്ടുവിന്റെ ഒരു ഇംഗ്ലീഷ് വിവര്‍ത്തനമാണ് ഈ പഠനത്തിന്റെ അവലംബം. 1700 ഹദീസുകള്‍ ഉള്‍കൊള്ളുന്ന മുവത്വ ഇസ്ലാമിക കര്‍മ്മശാസ്ത്രത്തിന്റെ പ്രഥമ സ്രോതസ്സുകളിലൊന്നായിട്ടാണ് പരിഗണിക്കപ്പെടുന്നത്. ശുദ്ധി, വിവാഹമോചനം, കുറ്റകൃത്യങ്ങള്‍ തുടങ്ങി ഇസ്ലാമിക കര്‍മ്മശാസ്ത്രത്തിലെ ഏകദേശ മേഖലകളെല്ലാം മുവത്വയില്‍ പ്രതിപാദിക്കുന്നുണ്ട്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">നിവേദകരുടെ വിശ്വാസ്യത മനസ്സിലാക്കാനും അതുവഴി ഹദീസിന്റെ ആധികാരികത ഉറപ്പിക്കാനും കഴിയുന്ന വിധത്തില്‍ തയ്യാറാക്കിയ ഇത്തരം ബൃഹത്തായ ജീവചരിത്ര രചനകള്‍ ഇസ്ലാമിക നാഗരികതയുടെ ക്ലാസിക്കല്‍ യുഗത്തിലാണ് രൂപപ്പെടുന്നത്. ഇതിലെ ഓരോ ഹദീസും വാമൊഴി രൂപത്തില്‍ കൈമാറ്റം ചെയ്യപ്പെട്ടതിന്റെ കൃത്യമായ ഉറവിടം ഗ്രന്ഥകാരനായ മാലിക് ബ്‌നു അനസ് വ്യക്തമാക്കുന്നുണ്ട്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">അദ്ദേഹത്തിന്റെയും പ്രവാചകന്‍, സ്വഹാബി, താബിഅ് എന്നിവരുടെയും ഇടയിലായി മൂന്നോ നാലോ നിവേദകര്‍ വരുന്നതായി കാണാം. അത്‌കൊണ്ട് തന്നെ ഹിജ്‌റ ആദ്യ രണ്ട് നൂറ്റാണ്ടില്‍ നിന്നുമുള്ള 500 ഓളം നിവേദകരാണ് ലഖ്‌നവിയുടെ ജീവചരിത്ര നിഘണ്ടുവില്‍ ഇടം നേടിയിട്ടുള്ളത്.</span><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">നിവേദകരുടെ മരണതീയതി, താമസസ്ഥലം, പലായനം തുടങ്ങിയ വിവരങ്ങളെല്ലാം ഗ്രന്ഥം പലപ്പോഴായി ഉള്‍കൊള്ളിക്കുന്നതിനാല്‍ ഹദീസ് വിമര്‍ശകര്‍ക്ക് ഹദീസ് കൈമാറ്റത്തിലെ ഓരോ കണ്ണിയും ചിരിത്രപരമായി ഒത്ത്‌പോകുന്നുണ്ടോയെന്നും പരിശോധിക്കാന്‍ സാധിക്കുന്നതാണ്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">നിവേദകന്റെ ജെന്ററും പലപ്പോഴായി ഗോത്രവംശാവലിയും ഗ്രന്ഥത്തില്‍ സൂചിപ്പിക്കുന്നുണ്ട്. മാത്രവുമല്ല, ചില സ്ഥലങ്ങളില്‍ നിവേദകന്‍ മതപരിവര്‍ത്തിതനാണോയെന്നും, ജോലി, ശിഈ ബന്ധം, സ്വഹാബിയോ താബിഇയോ മൗലയോ ആയിരുന്നെന്നും സൂചിപ്പിക്കുന്നുണ്ട്. അവസാനമായി നിവേദകന്റെ വിശ്വാസ്യത പ്രശംസനീയമാണോ സംശയാസ്പദമാണോ എന്നുകൂടി ചിലയിടങ്ങളില്‍ രേഖപ്പെടുത്തുന്നുണ്ട്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ചരിത്രഗവേഷണം സമഗ്രമായി എങ്ങനെ തയ്യാറാക്കാം എന്നതായിരുന്നു പ്രൊജക്റ്റിലൂടെ ലക്ഷ്യം വെച്ചത്. നാല് ഘട്ടങ്ങളിലായിട്ടാണ് പദ്ധതി ആവിഷ്്്കരിച്ചത്. പ്ലാനിങ്ങ്, കളക്ഷന്‍, ക്ലീന്‍അപ്പ്, വിഷ്വലൈസേഷന്‍.</span><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">പദ്ധതി പ്ലാന്‍ ചെയ്യുന്നതിന്റെ ഭാഗമായി യൂണിവേഴ്‌സിറ്റിയിലെ സഹപ്രവര്‍ത്തകരുമായും ലൈബ്രേറിയന്‍മാരുമായും ആദ്യം ഒരു ചര്‍ച്ച നടത്തി. ശേഷം വിദ്യാര്‍ത്ഥികള്‍ ഒറ്റക്കെട്ടായി ലഖ്‌നവിയുടെ ജീവചരിത്രനിഘണ്ടുവില്‍ നിന്നും വിവരങ്ങള്‍ ശേഖരിക്കുകയും അവരുണ്ടാക്കിയ ഒരു മാസ്റ്റര്‍ ഡാറ്റ ബെയ്‌സിലേക്ക് അത് എന്റര്‍ ചെയ്യുകയും ചെയ്തു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">അടുത്ത ഘട്ടം ശേഖരിച്ച ഡാറ്റകളെ ക്ലീനപ്പ് ചെയ്യലാണ്. ഇതിന് ചെറിയ ഗ്രൂപ്പുകളായി തിരിക്കുകയും സ്ഥലപ്പേരുകള്‍, ട്രാന്‍സ്‌ലിട്രേഷന്‍ തുടങ്ങിയവയെ ക്രമീകരിക്കുകയും ഹിജ്‌റ കലണ്ടര്‍ ഗ്രിഗേറിയനിലേക്ക് മാറ്റുകയും ചെയ്തു. അവസാനം, ഗ്രൂപ്പുകളില്‍ നിന്ന് വ്യക്തികളായി തിരിയുകയും ഓരോരുത്തരും അവരുടെ ഡാറ്റ വിഷ്വലൈസേഷന്‍ നിര്‍മ്മിക്കുകയും പുതിയ കണ്ടെത്തലുകള്‍ ഉണ്ടാക്കിയെടുക്കുകയും ചെയ്തു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ലഖ്‌നവിയുടെ ജിവചരിത്രനിഘണ്ടു അവലംബയോഗ്യമായ ഒരു ചരിത്ര സ്രോതസ്സായി പരിഗണിക്കാമോ എന്ന ചോദ്യം ഒരിക്കല്‍ വിദ്യാര്‍ത്ഥികള്‍ക്കിടയില്‍ ഞാന്‍ ഉന്നയിക്കുകയുണ്ടായി. അധ്യാപന ജീവിതത്തിലെ വളരെ പ്രധാനപ്പെട്ട ഒരു നിമിഷമായിരുന്നു അത്. ഗ്രന്ഥത്തിന്റെ വിശ്വാസ്യതയെ സംബന്ധിച്ച ചോദ്യത്തിന് കൃത്യമായ ഉത്തരം പറയാന്‍ സാധിച്ചില്ലെങ്കിലും ഇയൊരു പ്രൊജക്റ്റിന്റെ ഗുണാത്മകതയെ കുറിച്ച് കൃത്യമായ വിശദീകരണം നല്‍കാന്‍ അവര്‍ക്ക് കഴിഞ്ഞു.</span></p>\n<p style="text-align:start;"><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">സ്ത്രീകള്‍, മതപരിവര്‍ത്തിതര്‍, സ്വഹാബികള്‍, മൗലകള്‍ തുടങ്ങിയവരെ കുറിച്ചുള്ള കൃത്യമായ എണ്ണമല്ല ലഖ്‌നവിയുടെ നിഘണ്ടുവില്‍ നല്‍കപ്പെട്ടിരിക്കുന്നത്. പകരം, പണ്ഡിതവൃത്തങ്ങളില്‍ നിന്നും റിപ്പോര്‍ട്ട് ചെയ്യപ്പെട്ട കണക്കുകള്‍ മാത്രമാണ് അദ്ദേഹം രേഖപ്പെടുത്തിയിട്ടുള്ളത്. എത്രത്തോളമെന്നാല്‍, വിദ്യാര്‍ത്ഥികള്‍ പരസ്പരം തങ്ങളുടെ ഡാറ്റ യഥാര്‍ത്ഥ കണക്കുകളെ കുറിക്കുന്നില്ല എന്നും റിപ്പോര്‍ട്ട് ചെയ്യപ്പെട്ടവ മാത്രമാണതെന്നും പരസ്പരം ഓര്‍മിപ്പിക്കുമായിരുന്നു. എന്നിരുന്നാലും, ആദ്യകാല ഇസ്ലാമിക കര്‍മ്മശാസ്ത്രത്തിലെ അധികാരഘടന രൂപപ്പെട്ടതിലേക്ക് ഇതിലെ സ്ഥിതിവിവരങ്ങള്‍ വെളിച്ചം വീശുന്നുണ്ട്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">സെമസ്റ്റര്‍ ദൈര്‍ഘ്യമുള്ള ഒരു പ്രൊജക്റ്റ് ആയതിനാല്‍ വിദ്യാര്‍ത്ഥികള്‍ക്കും അധ്യാപകര്‍ക്കും നിശ്ചിത വര്‍ക്കുകള്‍ അനായാസം കൈകാര്യം ചെയ്യാന്‍ സാധിച്ചു. മെയിന്‍ കോഴ്‌സിനെ ബാധിക്കാതെ തന്നെ സ്വയം അത് പുരോഗതിപ്പെടുന്നതായി പലപ്പോഴും അനുഭവപ്പെട്ടു. വിദ്യാര്‍ത്ഥികള്‍ ഓരോ ആഴ്ചയിലും പ്രൊജക്റ്റുമായി ബന്ധപ്പെട്ട് എന്തെങ്കിലും മുന്നേറ്റങ്ങള്‍ കൊണ്ട്‌വരാന്‍ ശ്രമിച്ചു. എന്നിട്ടും ഏല്‍പിക്കപ്പെട്ട ഭാഗങ്ങള്‍ വായിച്ച് തീര്‍ക്കാനും ഒരു മിഡ് സെമെസ്്്്്്റ്ററും ഫൈനല്‍ പേപ്പറും എഴുതാനുള്ള സമയം കൂടി ബാക്കിയുണ്ടായിരുന്നു. യൂണിവേഴ്‌സിറ്റി ലൈബ്രേറിയന്മാരുടെ നിര്‍ലോഭമായ പിന്തുണ വര്‍ക്കുകള്‍ സുഖമമായി മുന്നോട്ട് കൊണ്ട്‌പോകുന്നതില്‍ നിര്‍ണ്ണായക പങ്ക് വഹിച്ചിട്ടുണ്ട്. അത് കൊണ്ട് തന്നെ ഏതൊരു അധ്യാപകനും ഇത്തരത്തിലുളള ഒരു പ്രൊജക്റ്റിന് മുന്നിട്ടിറങ്ങുമ്പോള്‍ വേണ്ടവിധം ടെക്‌നിക്കല്‍ അസിസ്റ്റന്‍സ് ഉണ്ടെന്ന് ഉറപ്പ് വരുത്തുന്നത് നന്നായിരിക്കും.</span></p>\n<p style="text-align:start;"></p>\n<h2 style="text-align:start;"><span style="color: rgb(17,17,17);background-color: rgb(255,255,255);font-size: 26px;font-family: Manjari, Roboto, sans-serif;">ആവിഷ്‌കരണം</span></h2>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">വിദ്യാര്‍ത്ഥികള്‍ ഡാറ്റാകളക്ഷനു വേണ്ടി ഇറങ്ങുന്നതിന് മുമ്പായി നാല് ലൈബ്രേറിയന്‍മാരുമായി ഞാന്‍ ചര്‍ച്ച നടത്തി. പ്രൊജക്റ്റിനു അനുയോജ്യമായ സിസ്റ്റങ്ങള്‍ ഏതൊക്കെയെന്ന് അവരോട് കൂടിയാലോചിച്ചു. ഡാറ്റകള്‍ എന്‍്‌റര്‍ ചെയ്യുന്നതിന് വേണ്ടി സ്പ്രഡ്ഷീറ്റുകള്‍ ഉപയോഗിക്കാനാണ് ആദ്യം തീരുമാനിച്ചിരുന്നത്. പേര്, മരണ തീയ്യതി, ജെന്റര്‍, തുടങ്ങി നമുക്ക് ആവശ്യമായ വിവരങ്ങള്‍ ഓരോ കോളങ്ങളില്‍ സജ്ജീകരിക്കുകയും വിദ്യാര്‍ത്ഥികള്‍ അനുയോജ്യമായ വിവരങ്ങള്‍ ടേബിളിലേക്ക് എന്റര്‍ ചെയ്യുകയുമാണ് വേണ്ടത്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഇൗ പ്ലാന്‍ വിജയകരമാകേണ്ടതായിരുന്നു, പക്ഷെ അതില്‍ ഒരു പ്രശ്‌നം നിഴലിച്ച് നിന്നു. ഒരേ സമയം ധാരാളം വിദ്യാര്‍ത്ഥികള്‍ എഡിറ്റ്‌ചെയ്യുകയാണെങ്കില്‍ പല ആശയക്കുഴപ്പങ്ങള്‍ ഉണ്ടാകാനിടയുണ്ട്. ഡാറ്റാബെയ്‌സ് തകരാറിലാകുകയാണെങ്കില്‍ ടൈപിംഗ് പിശകുകള്‍ സ്പ്രഡ്ഷീറ്റിലേക്ക് മാറ്റുന്നതിനെ കുറിച്ചും ലൈബ്രേറിയന്മാരുമായി ഞാന്‍ ആശങ്ക പ്രകടിപ്പിച്ചിരുന്നു. വിദ്യാര്‍ത്ഥികള്‍ ഇത്തരം സാങ്കേതിക പ്രശ്‌നങ്ങളെ ഗൗനിക്കാതെ മുഴുസമയവും പ്രൈമറി സോഴ്‌സുകളെ വായിക്കാനും വിശകലനം ചെയ്യാനും ഉപയോഗപ്പെടുത്തണമെന്നതായിരുന്നു എന്റെ താത്പര്യം.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">വാഷിങ്ങ്ടണ്‍ ആന്റ് ലീ യൂണിവേഴ്‌സിറ്റിയിലെ ടെക്‌നോളജി വിദഗ്ധനായ ബ്രാന്‍്‌റണ്‍ ബ്യൂസി ഇത്തരം നൂലാമാലകളൊന്നുമില്ലാത്ത മറ്റൊരു ബദല്‍ സംവിധാനം മുന്നോട്ട്‌വെച്ചു. ലളിതമായ ഒരു എച്ച് ടി എം എല്‍ ഡിസൈന്‍ പ്രോഗ്രാം ഉപയോഗിച്ച് നമ്മള്‍ ഒരു ഓണ്‍ലൈന്‍ ഫോം നിര്‍മ്മിക്കുന്നു. അതില്‍ ഒരു ചോദ്യാവലിക്ക് ഉത്തരം നല്‍കുന്ന രീതിയില്‍ വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഡാറ്റകള്‍ എന്റര്‍ ചെയ്യാം.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">നിവേദകന്റെ പൂര്‍ണ്ണനാമം എന്ത്. അദ്ദേഹത്തിന്റെ ജെന്‍്‌റര്‍ ഏത്. ഏത് പ്രദേശത്തായിരുന്നു അദ്ദേഹം താമസിച്ചിരുന്നത്. തുടങ്ങിയ ചോദ്യങ്ങളാണ് ഫോമില്‍ നല്‍കപ്പെടുക. ഓരോ ചോദ്യത്തിനും ഒന്നുകില്‍ മള്‍ട്ടിപ്പിള്‍ ചോയ്‌സ് മോഡിലോ അല്ലെങ്കില്‍ ടെക്‌സ്റ്റ് രൂപത്തിലോ ഉത്തരം ചെയ്യാം. ഉത്തരം ലഭിക്കാത്ത ഇടങ്ങളില്‍ ഒഴിച്ചിടുകയോ അല്ലെങ്കില്‍ അറിയപ്പെട്ടിട്ടില്ല എന്ന് ടൈപ്പ് ചെയ്യുകയോ ആവാം.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഈ ഫോമിലൂടെ ലഭിക്കുന്ന ഡാറ്റകള്‍ പിന്നീട് സ്പ്രഡ്ഷീറ്റിലേക്ക് മാറ്റപ്പെടുന്നു. യൂസര്‍ ഐഡിയും പാസ്സ് വേര്‍ഡും വെച്ച് മാത്രമേ ഫോമിലേക്ക് സൈന്‍ ചെയ്യാവൂ എന്നത്‌കൊണ്ട് തന്നെ എന്‍ട്രികളുടെ കൂടെ എന്റര്‍ ചെയ്ത വിദ്യാര്‍ത്ഥിയുടെ പേരും ടേഗ് ചെയ്യപ്പെടുന്നതാണ്. മൂല്യനിര്‍ണ്ണയത്തിും ഗ്രേഡിങ്ങിനുമെല്ലാം ഇത് കൂടുതല്‍ സഹായകമായി.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഈ സംവിധാനം വളരെ ഉപകാരപ്രദമായിരുന്നു. എങ്കില്‍ കൂടി ചില പരിമിതികള്‍ ഉണ്ടായിരുന്നു. ഉദാഹരണത്തിന് ഫോമില്‍ ഡയാക്രൈറ്റിക്‌സ്(അക്ഷരങ്ങളോട് കൂടെ വരുന്ന അടയാളങ്ങള്‍) പൂര്‍ണ്ണമായി പ്രതിഫലിച്ചിരുന്നില്ല. എന്നാല്‍, ഫോമില്‍ ഒരു യുണീകോഡ് ഫോണ്ട് ലഭ്യമാക്കുന്നതിലൂടെ ബ്രാന്‍ഡന്‍ ആ പ്രശ്‌നവും പരിഹരിച്ചു</span><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">എങ്കിലും മറ്റൊരു പ്രശ്‌നം കൂടി ബാക്കിയായി. ഫോമില്‍ ഡയാക്രൈറ്റിക്‌സ് തെളിയുന്നുണ്ടെങ്കിലും ഇത് ഉപയോഗിച്ച് വശമില്ലാത്തവര്‍ക്ക് സ്വന്തം കമ്പ്യട്ടറുകളില്‍ നിന്ന് ഫോമിലേക്ക് പകര്‍ത്താന്‍ സാധിക്കുമോ എന്നതായിരുന്നു അത്. ഇത് പരിഹരിക്കാനെന്നോണം ഒരു ടൂട്ടോറിയല്‍ കൂടി എല്ലാവര്‍ക്കും കൈമാറി. മാത്രവുമല്ല, ചോദ്യാവലിക്ക് മുകളിലായി ഏറ്റവും പ്രസക്തമായി തോന്നിയ ഡയക്രിറ്റികുകള്‍ നല്‍കുകയും ചെയ്തു. അതിനാല്‍, ഏത് കമ്പ്യൂട്ടറില്‍ നിന്ന് വര്‍ക്ക് ചെയ്യുന്നയാള്‍ക്കും അത് കോപ്പി പേസ്റ്റ് ചെയ്യേണ്ട കാര്യമേ ഉണ്ടായിരുന്നുള്ളൂ.</span></p>\n<p style="text-align:start;"></p>\n<h3 style="text-align:start;"><span style="color: rgb(17,17,17);background-color: rgb(255,255,255);font-size: 22px;font-family: Manjari, Roboto, sans-serif;">മാസ്റ്റര്‍ ഡാറ്റാബെയ്‌സ് നിര്‍മ്മാണം</span></h3>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ക്ലാസിന്റെ രണ്ടാമത്തെ ആഴ്ച. വിദ്യാര്‍ത്ഥികളെല്ലാം ആദ്യകാല ഇസ്ലാമിക ചരിത്രത്തെ കുറിച്ചുള്ള അവരുടെ സര്‍വേ തയ്യാറാക്കാനുളള ഒരുക്കത്തിലാണ്. ഈ സമയം നിഘണ്ടുവിലെ 6 മുതല്‍ 8 വരെ പേജുകള്‍ ഓരോരുത്തര്‍ക്കും ഞാന്‍ നിശ്ചയിച്ച് നല്‍കി. നൂറോളം പേജുള്ള ഈ ഗ്രന്ഥം 500 ഓളം നിവേദകരെ അല്‍ഫാബറ്റിക് ക്രമത്തിലാണ് പരിചയപ്പെടുത്തുന്നത്. ഓരോ ആഴ്ചയുടെയും അവസാനമാകുമ്പോഴേക്കും നല്‍കപ്പെട്ട ഭാഗത്ത് നിന്നും രണ്ട് പേജിലെ വിവരങ്ങള്‍ ഫോമില്‍ എന്റര്‍ ചെയ്യണമെന്ന് ഞാന്‍ ആവശ്യപ്പെട്ടു. അങ്ങനെ വരുമ്പോള്‍ കോഴ്‌സിന്റെ ആറാമത്തെ ആഴ്ചയില്‍ നിഘണ്ടുവിലെ നിശ്ചിത ഭാഗങ്ങള്‍ ഓരോരുത്തര്‍ക്കും പൂര്‍ത്തിയാക്കുകയും ചെയ്യാം.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">നിവേദകനെ സംബന്ധിച്ച പ്രധാനപ്പെട്ട വിവരങ്ങളാണ് ഫോമില്‍ റെക്കോര്‍ഡ് ചെയ്തിരുന്നത്. നിവേദകന്റെ പേര്, ജെന്റര്‍, ഹദീസ് കൈമാറ്റം ചെയ്യപ്പെട്ട സമയം, മരണതീയതി, പറയപ്പെടുന്ന മറ്റു മരണതീയതികള്‍, ഗോത്രം, ഉപഗോത്രം, ജോലി, താമസിച്ച സ്ഥലങ്ങള്‍ തുടങ്ങിയവയാണ് അവ. ഇവയുമായി ബന്ധപ്പെട്ട് ലഭിക്കുന്ന മറ്റു വിവരങ്ങളും രേഖപ്പെടുത്താന്‍ ആവശ്യപ്പെട്ടു. ഒപ്പം നിവേദകന്‍ സ്വഹാബിയാണോ, ശീഈയാണോ, അന്‍സാറുകളില്‍ പെട്ടയാളാണോ, മൗലയാണോ, പരിവര്‍ത്തിതനാണോ തുടങ്ങിയുള്ള എസ് ഓര്‍ നോ ചോദ്യങ്ങളും നല്‍കപ്പെട്ടിരുന്നു. പരിവര്‍ത്തിതനാണ് എന്ന്്് രേഖപ്പെടുത്തിയാല്‍ പിന്നെ മുമ്പുണ്ടായിരുന്ന മതം രേഖപ്പെടുത്താനുള്ള ഒരു അധിക സ്ഥലവും ലഭ്യമാകും. എന്‍ട്രിയുടെ അവസാനം ശ്രദ്ധേയമായി തോന്നിയ മറ്റു യോഗ്യതകളോ കാര്യങ്ങളോ ഉണ്ടെങ്കില്‍ അതും രേഖപ്പെടുത്താനുള്ള അവസരം നല്‍കപ്പെട്ടിരുന്നു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">വിദ്യാര്‍ത്ഥികള്‍ക്ക് ഡാറ്റ ശേഖരിക്കാനും അവ കൃത്യമായി എന്റര്‍ ചെയ്യാനും പരിശീലനം നല്‍കാന്‍ ചില ക്ലാസ് സമയങ്ങള്‍ കൂടി ആവശ്യമായിരുന്നു. ട്രാന്‍സിലിട്രേഷന്റെ അടിസ്ഥാന കാര്യങ്ങള്‍, ഇബ്‌ന് ബിന്ത് പോലെയുള്ള ലിംഗ സൂചനകള്‍, മറ്റു അറബിയില്‍ പൊതുവായി ഉപയോഗിക്കപ്പെടുന്ന നിസ്ബകള്‍ തുടങ്ങിയവയെ കുറിച്ച് പൊതുവായ ധാരണ നല്‍കാന്‍ എനിക്ക് സാധിച്ചു. വിദ്യാര്‍ത്ഥികളുമായുള്ള ഇത്തരം സംഭാഷണങ്ങള്‍ ക്ലാസിക്കല്‍ അറബ് കള്‍ച്ചറിലെ ജീനിയോളജിയെ കുറിച്ച് വിശാലമായ കാഴ്ചപ്പാടുകള്‍ പ്രദാനം ചെയ്തു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഫോമുമായി നിലനിന്നിരുന്ന മറ്റൊരു ചെറിയ പ്രശ്‌നം എന്റര്‍ ചെയ്ത ഡാറ്റകള്‍ ശരിയാണോയെന്ന് ഉറപ്പ് വരുത്താന്‍ സാധിച്ചിരുന്നില്ല എന്നതാണ്. സാങ്കേതികമായി മറ്റൊരുവഴിയിലൂടെ ഡാറ്റകള്‍ സര്‍ച്ച് ചെയ്ത് കണ്ടെത്താമെങ്കിലും ആപേക്ഷികമായി കുറച്ച് പ്രയാസം നിറഞ്ഞതായിരുന്നു അത്. ഡാറ്റകള്‍ എന്റര്‍ ചെയ്ത് സമര്‍പ്പിക്കുന്നതിന് മുമ്പായി ഒരു കണ്‍ഫര്‍മേഷന്‍ പേജ് കൂടി ഉണ്ടെങ്കില്‍ ടൈപിങ്ങ് പിശകുകള്‍ കുറേക്കൂടി പരിഹരിക്കാന്‍ സാധിക്കും. ക്ലീനപ്പ് സമയത്ത് കൈകാര്യം ചെയ്യേണ്ട മറ്റുപ്രശ്‌നങ്ങളെല്ലാം ഒരു പരിധി വരെ ഇവിടെ പരിഹരിക്കുകയും ചെയ്യാം.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഡാറ്റാബേസ് നിര്‍മ്മാണത്തിലെ ഓരോരുത്തരുടെയും പങ്കാളിത്തത്തിന് മൊത്തം ഗ്രേഡിന്റെ പത്ത് ശതമാനം വരെ മൂല്യം നിര്‍ണ്ണയിച്ചിരുന്നു. ഇനി മാനദണ്ഡങ്ങളൊത്ത പത്തിലേറെ എന്‍ട്രികള്‍ ഓരോ ആഴ്ചയും ഒരാള്‍ എന്റര്‍ ചെയ്യുകയാണെങ്കില്‍ അധിക മാര്‍ക്കും കരസ്ഥമാക്കാവുന്നതാണ്. നിലവാരം നിലനിര്‍ത്തുന്നതിനും മൂല്യനിര്‍ണ്ണയം നടത്താനും ചില സാംപിള്‍ എന്‍ട്രികള്‍ ഞാന്‍ പരിശോധിക്കുകയുമുണ്ടായി.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഡാറ്റാ ശേഖരണവും എന്‍ട്രി ഘട്ടവും പ്രതീക്ഷിച്ചതിലേറെ സൗകര്യത്തോടെ മുന്നോട്ട് പോവുകയും ആറാമത്തെ ആഴ്ചക്ക് മുമ്പായിതന്നെ ഭൂരിഭാഗം വിദ്യാര്‍ത്ഥികളും നല്‍കപ്പെട്ട ഭാഗങ്ങള്‍ പൂര്‍ത്തീകരിക്കുകയും ചെയ്തു. ചില വിദ്യാര്‍ത്ഥികള്‍ തങ്ങളുടെ ഡാറ്റ ശേഖരണവും എന്‍ട്രിയും നാലമത്തെയോ അഞ്ചാമത്തെയോ ആഴ്ചയിലാണ് വേഗത്തിലാക്കുന്നതെങ്കിലും 12 വിദ്യാര്‍ത്ഥികള്‍ക്കും നിശ്ചിത ഭാഗങ്ങള്‍ സമയ നിഷ്ഠയോടെ പൂര്‍ത്തീകരിക്കാന്‍ സാധിച്ചു. അങ്ങനെ ആറാമത്തെ ആഴ്ചയുടെ അവസാനത്തില്‍ മാസ്റ്റര്‍ ഡാറ്റാബേസ് പൂര്‍ണ്ണ രൂപം പ്രാപിക്കുകയും ചെയ്തു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഈയൊരു കാലയളവില്‍ തങ്ങള്‍ പഠനം നടത്തിയ ജീവചരിത്രങ്ങളില്‍ നിന്നും കൗതുകമുണര്‍ത്തുന്ന കഥകള്‍ ക്ലാസ് സമയങ്ങളില്‍ അവര്‍ പങ്ക്‌വെച്ചു. ചരിത്രപ്രാധാന്യമുള്ള ഒരു വ്യക്തിയെയോ സ്ഥലത്തെയോ ഡിജിറ്റല്‍ ഹ്യുമാനിറ്റീസിലൂടെ വീണ്ടും കണ്ടെത്തുകയാണെങ്കില്‍ അവ തമ്മിലെ ബന്ധങ്ങള്‍ അന്വേഷിക്കലും പതിവായിരുന്നു.</span><br><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">(നോട്ട് ഹിയര്‍)</span></p>\n<p style="text-align:start;"></p>\n<h3 style="text-align:start;"><span style="color: rgb(17,17,17);background-color: rgb(255,255,255);font-size: 22px;font-family: Manjari, Roboto, sans-serif;">വിഷ്വലൈസേഷന്‍ ഡ്രാഫ്റ്റും ഡാറ്റാബേസ് ക്ലീനപ്പും</span></h3>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">പ്രൊജക്റ്റിന്റെ ഉദ്ദിഷ്ട ലക്ഷ്യങ്ങള്‍ സാക്ഷാത്കരിക്കുന്ന വിഷ്വലൈസേഷന്‍ ഉപകരണങ്ങളെ കുറിച്ച് യൂണിവേഴ്‌സിറ്റിയിലെ അസോസിയേറ്റ് ലൈബ്രേറിയന്‍ ജെഫ് ബറിയുമായി ഞാന്‍ ചര്‍ച്ച നടത്തി. പ്രായോഗികവും എന്നാല്‍ ആകര്‍ഷണീയവുമായ ഒന്നായിരുന്നു ഞങ്ങള്‍ അന്വേഷിച്ചിരുന്നത്. മൈക്രോസോഫ്റ്റ് എക്‌സല്‍ മുമ്പോട്ട് വെക്കുന്ന ഗ്രാഫിങ്ങ് ഫീച്ചേഴ്‌സിന്റെ ഉപകാരങ്ങളും പാളിച്ചകളും ഞങ്ങള്‍ മുമ്പ് തന്നെ മനസ്സിലാക്കിയിരുന്നു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">ഒരര്‍ത്ഥത്തില്‍ അത് എല്ലാവര്‍ക്കും അനായാസം കൈകാര്യം ചെയ്യാന്‍ കഴിയുന്ന ഒന്നാണെങ്കിലും നിശ്ചിത ഡാറ്റകളെ മാത്രമേ അത് വിഷ്വലൈസ് ചെയ്യുകയുളളൂ. മാത്രവുമല്ല, സ്ഥല കാല ബന്ധങ്ങളെ കൂടി അടയാളപ്പെടുത്തുന്ന നമ്മുടെ ഡാറ്റകളെ ചിത്രീകരിക്കാന്‍ അത് പര്യാപ്തവുമായിരുന്നില്ല. ഈ പരിമിതികള്‍ മറികടക്കാന്‍ എക്‌സലിനു പകരം പല്ലാഡിയോ, റോ എന്നിങ്ങനെ രണ്ട് ഓണ്‍ലൈന്‍ വിഷ്വലൈസേഷന്‍ ഉപകരണങ്ങള്‍ ഞങ്ങള്‍ തിരഞ്ഞെടുത്തു.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">സ്റ്റാന്‍ഫോര്‍ഡ് യൂണിവേഴ്‌സിറ്റിയില്‍ മാപ്പിങ്ങ് ദ റിപ്പബ്ലിക് ഓഫ് ലെറ്റേഴ്‌സ് എന്ന പ്രൊജക്റ്റില്‍ വിജയകരമായി പരീക്ഷിച്ചവയായിരുന്നു ഇവ രണ്ടും. ആദ്യത്തേത് സ്റ്റാന്‍ഫോര്‍ഡ് യൂണിവേഴ്‌സിറ്റിയിലെ ഹ്യുമാനിറ്റീസ് പ്ലസ് ഡിസൈന്‍ എന്ന ഒരു ലാബും രണ്ടാമത്തേത് മിലാനിലെ ഡെന്‍സിറ്റി ഡിസൈന്‍ റിസര്‍ച്ച് ലാബുമാണ് ഡിസൈന്‍ ചെയ്തിട്ടുള്ളത്.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">മാസ്റ്റര്‍ ഡാറ്റബേസിനെ മേല്‍പറയപ്പെട്ട രണ്ട് ഉപകരണങ്ങളിലേക്കും നിഷ്പ്രയാസം മാറ്റാന്‍ സാധിച്ചു. എന്നാല്‍ അപ്രതീക്ഷിതമായി ഒരു പ്രശ്‌നം പ്രത്യക്ഷപ്പെട്ടു. ഡാറ്റകള്‍ നന്നായി ക്ലീനപ്പ് ചെയ്യപ്പെടേണ്ടതായിട്ടുണ്ടായിരുന്നു. ചില പ്രത്യേക എന്‍ട്രികളില്‍ ചെറിയ തിരുത്തലുകള്‍ മാത്രം സാധ്യമാകുന്ന ഫോമായിരുന്നു യഥാര്‍ത്ഥത്തില്‍ നമ്മള്‍ ഉപയോഗിച്ചിരുന്നത്. ഡാറ്റാബേസ് ഉപയോഗക്ഷമമാക്കാന്‍ ഇനിയും ധാരാളം ക്ലീനപ്പ് പ്രക്രിയകള്‍ നമുക്ക് നടത്തേണ്ടതുണ്ട്.</span></p>\n<p style="text-align:start;"></p>\n<h3 style="text-align:start;"><span style="color: rgb(17,17,17);background-color: rgb(255,255,255);font-size: 22px;font-family: Manjari, Roboto, sans-serif;">(ടു ബി ആഡ് ഡ് ടു പാരഗ്രാഫ്)</span></h3>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">വേറെ രണ്ട് ചെറിയ പ്രശ്‌നങ്ങള്‍ കൂടി വിദ്യാര്‍ത്ഥികളുടെ ശ്രദ്ധയില്‍പെട്ടിരുന്നു. ഇസ്ലാമിക് കലണ്ടര്‍ പ്രകാരമാണ് ഡാറ്റകള്‍ രേഖപ്പെടുത്തിയത് എന്നതായിരുന്നു അതില്‍ ആദ്യത്തേത്. എന്നാല്‍, ചില വിദ്യാര്‍ത്ഥികള്‍ പുതിയ ഒരു കോളം കൂടി ചേര്‍ത്ത് ഗ്രിഗേറിയന്‍ കലണ്ടറും ഉള്‍പ്പെടുത്തി. രണ്ടാമതായി, ജോലികളെ സംബന്ധിച്ചുള്ള ഡാറ്റകളില്‍ ഖാദി, ഫഖീഹ് എന്നിവക്ക് വ്യത്യസ്ത ട്രാന്‍സ്‌ലിട്രേഷനുകളും ചിലയിടങ്ങളില്‍ ഒരേ നിവേദകന് തന്നെ വ്യത്യസ്ത ജോലികളും കണ്ടെത്തപ്പെട്ടിരുന്നു. ഒപ്പം, ജോലി രേഖപ്പെടുത്താനുള്ള കോളം വളരെ ചെറുതായതിനാല്‍ എല്ലാ ജോലികളും പൊതുവായ ഒരു ജോലിയുടെ കീഴിലായി ക്ലീനപ്പ് ടീം ഏകോപിപ്പിക്കണമെന്നും തീരുമാനിച്ചു. രാഷ്ട്രീയക്കാരന്‍, വ്യാപാരി, സേനാംഗം,പണ്ഡിതന്‍ എന്നിവ പോലെ.</span></p>\n<p style="text-align:start;"></p>\n<p style="text-align:start;"><span style="color: rgb(72,72,72);background-color: rgb(255,255,255);font-size: 15px;font-family: Manjari, Roboto, sans-serif;">മറ്റൊരു പ്രധാന പ്രശ്‌നം ഉണ്ടായിരുന്നത് ഗോത്രങ്ങളെയും ഉപഗോത്രങ്ങളെയും രേഖപ്പെടുത്തുന്ന കോളത്തെ സംബന്ധിച്ചായിരുന്നു. ലഖ്‌നവിയുടെ ഗ്രന്ഥം പലപ്പോഴും ഒരു നിവേദകനെ വ്യത്യസ്ത ഗോത്രങ്ങളിലേക്ക് ചേര്‍ത്തിരുന്നു. ഈയൊരവസരത്തില്‍ ഒരൊറ്റ കോളത്തില്‍ തന്നെ ഇരു ഗോത്രങ്ങളെയും വിദ്യാര്‍ത്ഥികള്‍ എന്റര്‍ ചെയ്തു. ഗോത്രത്തെയും ഉപഗോത്രത്തെയും ലഖ്‌നവി ഒപ്പം പരാമര്‍ശിച്ച ഇടങ്ങളുമുണ്ടായിരുന്നു. അവിടെയും കാര്യങ്ങള്‍ ഇപ്രകാരം തന്നെ സംഭവിച്ചു.</span>&nbsp;</p>
                `,
                }}
              ></div>
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
                <article key={key} className="max-w-xs">
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
