import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anek_Malayalam } from "next/font/google";
import Image from "next/image";
import data from "@/public/dummydata.json"

import Link from "next/link";
const notoSansMalayalam = Anek_Malayalam({ subsets: ["latin"] });

function Discussions() {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold hover:text-black text-red-900 dark:text-white">
            Discussions
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {data.map((item, key) => (
            <div
              key={key}
              className="max-w-sm bg-white border hover:bg-gray-100 group border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/posts/${item.title}`}>
                <Image
                  className="rounded-t-lg"
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                />
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

export default Discussions;
