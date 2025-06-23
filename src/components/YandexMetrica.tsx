import Script from "next/script";

interface Props {
  id?: string;
}

export default function YandexMetrica({ id }: Props) {
  const counterId = id || process.env.NEXT_PUBLIC_YM_ID;
  if (!counterId) return null; // безопасный no-op

  return (
    <>
      {/* Yandex.Metrika counter */}
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${counterId}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:false
          });
        `}
      </Script>
      <noscript>
        <img src={`https://mc.yandex.ru/watch/${counterId}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
      </noscript>
    </>
  );
} 