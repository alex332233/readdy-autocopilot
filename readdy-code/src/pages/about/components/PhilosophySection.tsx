
export default function PhilosophySection() {
  return (
    <>
      {/* 品牌故事 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* 左側圖片 */}
            <div className="flex-1 w-full relative">
              <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20serene%20and%20elegant%20traditional%20Chinese%20medicine%20clinic%20interior%20with%20warm%20golden%20sunlight%2C%20a%20gentle%20female%20TCM%20doctor%20in%20professional%20white%20coat%20consulting%20warmly%20with%20a%20young%20Asian%20mother%20and%20her%20child%2C%20wooden%20herbal%20medicine%20cabinets%2C%20soft%20cream%20and%20beige%20tones%2C%20peaceful%20nurturing%20atmosphere%2C%20minimalist%20modern%20design%20blended%20with%20traditional%20elements%2C%20professional%20lifestyle%20photography%2C%20shallow%20depth%20of%20field%2C%20warm%20bokeh%20background&width=600&height=480&seq=about-philo-left-01&orientation=portrait"
                  alt="艾苜診所"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* 右側文字 */}
            <div className="flex-1 lg:pl-8">
              <div className="space-y-5 text-base text-gray-600 leading-relaxed">
                <p>
                  這份守護的初心，建構了我們對健康的獨特觀點。我們發現，無論是中醫傳承千年的「陰平陽秘」，還是現代醫學所追求的生理恆定，真理其實只有一個：<strong className="text-gray-800">健康並非追求極端的強壯，而是身心的「動態平衡」。</strong>因此，艾苜致力於融合古老的調理智慧與現代的科學視野，不偏廢任一方，只為了幫現代人找回這份失落的穩定。
                </p>
                <p>
                  而在這份平衡的哲學背後，我們看見了最需要被承接的身影。我們深知，20 到 50 歲的女性，往往是家庭中最堅韌的支柱。從女孩蛻變為母親，妳總是默默承受著生活的重量，成為先生的後盾、孩子的港灣，卻常在忙碌中忘了照顧自己。
                </p>
                <p>
                  這就是為什麼，艾苜選擇以婦兒科的細膩為起點。我們希望先溫柔地接住辛苦的妳，幫妳找回身心的平衡；再以妳為中心，將這份專業的醫療守護，延伸至妳最珍視的家人。
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-lg font-serif font-semibold text-gray-800">
                  艾苜中醫，願做您與家人的健康護身符，在生活的縫隙中，築起最溫柔的防線。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
