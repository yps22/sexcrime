import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <header className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/sexcrime-center-main.png"
            alt="성범죄센터 대표 이미지"
            width={180}
            height={180}
            className="rounded-full shadow-lg border object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-2">
          윤승환 변호사의 성범죄센터
        </h1>
        <p className="text-lg text-gray-700">
          성범죄 전문 변호사와 함께하는 든든한 법률 동반자
        </p>
      </header>
      <main className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8">
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            센터 소개
          </h2>
          <p className="text-gray-700">
            윤승환 변호사는 다년간의 성범죄 사건 변호 경험을 바탕으로, 피해자와
            피의자 모두에게 공정하고 신속한 법률 서비스를 제공합니다. 성범죄
            사건의 특수성과 민감성을 깊이 이해하고, 의뢰인의 권익 보호를
            최우선으로 생각합니다.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            주요 업무
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              성폭력, 강제추행, 통신매체이용음란 등 성범죄 형사사건 변호
            </li>
            <li>무고, 명예훼손 등 관련 사건 변호</li>
            <li>피해자 법률 지원 및 상담</li>
            <li>경찰/검찰 조사 동행 및 소송 전 과정 지원</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            상담 안내
          </h2>
          <div className="text-gray-700 space-y-1">
            <div>
              <span className="font-semibold">전화:</span>{" "}
              <a
                href="tel:010-8299-5301"
                className="text-blue-700 hover:underline"
              >
                010-8299-5301
              </a>
            </div>
            <div>
              <span className="font-semibold">이메일:</span>{" "}
              <a
                href="mailto:yps222@naver.com"
                className="text-blue-700 hover:underline"
              >
                yps222@naver.com
              </a>
            </div>
            <div>
              <span className="font-semibold">주소:</span> 서울 서초구 서초대로 286, 10층 1008호 (서초동, 서초프라자)
            </div>
            <div>
              <span className="font-semibold">상담시간:</span> 평일 09:00~18:00
              (예약제)
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">오시는 길</h2>
          <div className="text-gray-700">지하철 2호선 서초역 3번 출구 도보 5분</div>
          <div className="mt-2 flex flex-col items-center">
            <iframe
              title="구글 지도 - 서초프라자"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.095282019624!2d127.0202343153106!3d37.4923619798107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca18b2e2e2e2f%3A0x6e7b6e7b6e7b6e7b!2z7ISc7Jq47Yq567OE7IucIOyEnOyauO2KuOq1rCDshJzsmqjtirjqtawg7J6l7Iqk7Yq567OE7Iuc!5e0!3m2!1sko!2skr!4v1685520000000!5m2!1sko!2skr"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px', minWidth: '300px', maxWidth: '600px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">변호사 소개</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>고려대학교 법학과 졸업</li>
            <li>법학전문박사(고려대)</li>
            <li>변호사/변리사</li>
            <li>대한변호사협회 노무변호사회 회원</li>
            <li>한화석유화학 근무</li>
            <li>한국마사회 근무</li>
            <li>(전) 법무법인 율현 변호사</li>
            <li>(전) 대법원 국선변호인</li>
            <li>(전) 의정부지방법원 고양지원 국선변호인</li>
            <li>(전) 일산동부경찰서 수사민원상담센터 법률상담 변호사</li>
            <li>(전) 서울남부지방법원 국선변호인</li>
            <li>(전) 법률사무소 법민 대표변호사</li>
            <li>(전) 인천지방법원 ​상근조정위원</li>
            <li>(전) 서울고등법원 인천원외재판부 조정위원</li>
            <li>(전) 변호사 윤승환 법률사무소(법률사무소 승리) 대표변호사</li>
            <li>서울북부지방법원 국선변호인</li>
            <li>서울고등법원 국선변호인</li>
            <li>법무법인 창수 변호사</li>
          </ul>
        </section>
      </main>
      <footer className="mt-10 text-gray-500 text-sm text-center space-y-1">
        <div>법무법인 창수 서초사무소</div>
        <div>
          상담전화 :{" "}
          <a
            href="tel:010-8299-5301"
            className="text-blue-700 hover:underline"
          >
            010-8299-5301
          </a>
          ,{" "}
          <a
            href="tel:02-581-3397"
            className="text-blue-700 hover:underline"
          >
            02-581-3397
          </a>{" "}
          팩스 : 02-597-0266
        </div>
        <div>개인정보관리책임자 : 윤승환</div>
        <div>
          주소 : (분사무소) 서울 서초구 서초대로 286, 1008호 (서초동,
          서초프라자)
        </div>
        <div className="mt-2">
          All Rights Reserved by LAW OFFICE OF VICTORY.
        </div>
      </footer>
    </div>
  );
}
