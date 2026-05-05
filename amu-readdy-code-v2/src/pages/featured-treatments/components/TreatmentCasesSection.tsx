import { Link } from 'react-router-dom';

interface TreatmentCase {
  label: string;
  name: string;
  content: string;
  link: string;
  image?: string;
  dataPathPrefix?: string;
}

interface Props {
  cases: TreatmentCase[];
  accent: string;
  getDataAttribute?: (path: string) => string;
}

export default function TreatmentCasesSection({ cases, accent, getDataAttribute }: Props) {
  if (!cases || cases.length === 0) return null;

  return (
    <div className="mt-16">
      <div
        className="rounded-3xl overflow-hidden p-10 lg:p-14"
        style={{ backgroundColor: `${accent}08`, border: `1px solid ${accent}20` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full" style={{ backgroundColor: accent }} />
              <h3
                className="text-2xl lg:text-3xl font-bold text-gray-800 tracking-wider"
                style={{ fontFamily: "'Noto Serif TC', serif" }}
              >
                真實見證
              </h3>
            </div>
            <p
              className="mt-1.5 text-xs tracking-[0.25em] uppercase font-medium pl-4"
              style={{ color: accent }}
            >
              Patient Stories
            </p>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs hidden sm:block text-right">
            以下為真實患者調理歷程分享，
            <br />
            效果因個人體質而有所差異。
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {cases.map((c, idx) => {
            const href = c.link && c.link !== '#' ? c.link : '/cases';
            const isInternal = href.startsWith('/');
            const content = (
              <>
                <div className="relative w-full md:w-64 lg:w-72 flex-shrink-0 h-60 md:h-auto md:min-h-[220px] overflow-hidden bg-gray-100">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt=""
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: `${accent}10` }}
                    >
                      <i className="ri-image-line text-4xl" style={{ color: `${accent}40` }} />
                    </div>
                  )}
                  <span
                    className="absolute top-4 left-4 text-xs font-semibold text-white px-3 py-1.5 rounded-full tracking-widest"
                    style={{ backgroundColor: accent }}
                    data-sanity={c.dataPathPrefix && getDataAttribute ? getDataAttribute(`${c.dataPathPrefix}.label`) : undefined}
                  >
                    {c.label}
                  </span>
                </div>

                <div className="flex-1 p-7 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h4
                      className="text-lg lg:text-xl font-semibold text-gray-800 leading-snug mb-3 group-hover:opacity-75 transition-opacity duration-300"
                      style={{ fontFamily: "'Noto Serif TC', serif" }}
                      data-sanity={c.dataPathPrefix && getDataAttribute ? getDataAttribute(`${c.dataPathPrefix}.name`) : undefined}
                    >
                      {c.name}
                    </h4>
                    <p
                      className="text-sm text-gray-500 leading-relaxed line-clamp-3"
                      data-sanity={c.dataPathPrefix && getDataAttribute ? getDataAttribute(`${c.dataPathPrefix}.text`) : undefined}
                    >
                      {c.content}
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-between mt-6 pt-5"
                    style={{ borderTop: `1px solid ${accent}15` }}
                  >
                    <div
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide"
                      style={{ color: accent }}
                    >
                      <i className="ri-book-open-line text-base" />
                      閱讀完整案例
                    </div>
                    <div
                      className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                      style={{ backgroundColor: `${accent}15`, color: accent }}
                    >
                      <i className="ri-arrow-right-line text-base" />
                    </div>
                  </div>
                </div>
              </>
            );

            return isInternal ? (
              <Link
              key={idx}
              to={href}
              className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:shadow-md"
              style={{ border: `1px solid ${accent}15` }}
            >
              {content}
            </Link>
            ) : (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:shadow-md"
                style={{ border: `1px solid ${accent}15` }}
              >
                {content}
              </a>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-gray-400 sm:hidden leading-relaxed text-center">
          以上為真實患者調理歷程分享，效果因個人體質而有所差異。
        </p>
      </div>
    </div>
  );
}
