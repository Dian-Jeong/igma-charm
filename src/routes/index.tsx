import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hartcatch-hero.jpg";

export const Route = createFileRoute("/")({
  component: SignInPage,
  head: () => ({
    meta: [
      { title: "하트캐치 — 파트너의 마음을 알려주는 AI" },
      { name: "description", content: "하트캐치: 파트너의 마음을 알려주는 AI 서비스입니다." },
    ],
  }),
});

function SignInPage() {
  return (
    <main className="min-h-screen w-full bg-[#f9f9f9] flex justify-center font-pretendard">
      <div className="relative w-full max-w-[460px] px-[35px] pt-[121px] pb-10">
        <section className="flex flex-col gap-5">
          <p className="text-[16px] text-[#808080] tracking-[4px] leading-4">HARTCATCH</p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-[5px]">
              <h1 className="text-[80px] leading-[48px] font-medium text-[#303030] m-0">하트</h1>
              <Heart className="size-6 fill-[#ff7f6a] text-[#ff7f6a]" strokeWidth={2} />
              <h1 className="text-[80px] leading-[48px] font-medium text-[#303030] m-0">캐치</h1>
            </div>
            <p className="text-[22px] text-[#303030] tracking-[4px] leading-4">
              파트너의 마음을 알려주는 AI
            </p>
          </div>
        </section>

        <div className="mt-[58px] rounded-[20px] overflow-hidden">
          <img
            src={heroImage}
            alt="하트캐치 일러스트레이션"
            width={928}
            height={512}
            className="w-full h-[212px] object-cover"
          />
        </div>

        <div className="mt-[62px] flex flex-col gap-[15px]">
          <button
            type="button"
            className="h-[68px] w-full rounded-full border border-[#d6d6d6] bg-white text-[18px] font-medium text-black hover:bg-black/[0.02] transition-colors"
          >
            Google로 계속하기
          </button>
          <button
            type="button"
            className="h-[68px] w-full rounded-full border border-[#d6d6d6] bg-white text-[18px] font-medium text-black hover:bg-black/[0.02] transition-colors"
          >
            Kakao로 계속하기
          </button>
        </div>

        <div className="mt-8 text-center">
          <Link to="/profile" className="text-sm text-[#808080] underline">
            프로필 미리보기
          </Link>
        </div>
      </div>
    </main>
  );
}
