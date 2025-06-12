import LinkedIn from "@/public/linkedin.svg";
import Facebook from "@/public/facebook.svg";
import Phone from "@/public/phone.svg";
import Mail from "@/public/mail.svg";

type TopSectionProps = {
  phone_top: string;
  phone_top_2: string;
  phone_top_3: string;
  email_top: string;
  fb_link_top: string;
  in_link_top: string;
};

export default function TopSection({
  phone_top,
  phone_top_2,
  phone_top_3,
  email_top,
  fb_link_top,
  in_link_top,
}: TopSectionProps) {
  return (
    <>
      <section className="w-full bg-[#24408d] text-white text-[12px] z-50 px-4 sm:px-6 md:px-8 2xl:px-48 py-2">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
          <section>
            <ul className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start sm:items-center">
              <li className="flex flex-col sm:flex-row gap-0 sm:gap-2 items-start sm:items-center text-white">
                <div className="flex items-center gap-2">
                  <Phone width={20} />
                  {phone_top && <span>{phone_top}</span>}
                </div>

                <div className="flex items-center gap-2 sm:before:content-['/'] sm:before:mx-1">
                  {phone_top_2 && <span>{phone_top_2}</span>}
                </div>

                <div className="flex items-center gap-2 sm:before:content-['/'] sm:before:mx-1">
                  {phone_top_3 && <span>{phone_top_3}</span>}
                </div>
              </li>

              <li className="flex gap-2 items-center text-white">
                <Mail width={20} />
                {email_top}
              </li>
            </ul>
          </section>

          <ul className="flex gap-2 mt-2 md:mt-0">
            <li>
              <a href={fb_link_top} target="_blank">
                <Facebook width={20} />
              </a>
            </li>
            <li>
              <a href={in_link_top} target="_blank">
                <LinkedIn width={20} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
