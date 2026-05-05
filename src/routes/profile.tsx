import { createFileRoute } from "@tanstack/react-router";
import { Globe, Bell } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "내 정보 — 하트캐치" },
      { name: "description", content: "하트캐치 사용자 프로필 및 플랜 정보 페이지" },
    ],
  }),
});

function ProfilePage() {
  return (
    <main className="min-h-screen w-full bg-[#f9f9f9] flex justify-center font-pretendard">
      <div className="relative w-full max-w-[460px] pb-10">
        {/* Header */}
        <header className="flex items-center justify-between px-6 pt-8 pb-4 h-[88px]">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#e7e5e4] flex items-center justify-center">
              <span className="font-bold text-[#374151] text-base leading-6">D</span>
            </div>
            <p className="text-[18px] font-bold text-[#111827] opacity-60 leading-[17.5px]">
              Diane J
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="h-9 px-3 flex items-center gap-1 rounded-full border border-[#d6d6d6] hover:bg-black/[0.03] transition-colors"
            >
              <Globe className="size-3 text-[#303030]" />
              <span className="text-sm font-semibold text-[#303030] leading-4">KO</span>
            </button>
            <button
              type="button"
              aria-label="알림"
              className="size-9 flex items-center justify-center rounded-full border border-[#d6d6d6] hover:bg-black/[0.03] transition-colors"
            >
              <Bell className="size-5 text-[#303030]" />
            </button>
          </div>
        </header>

        {/* Title */}
        <section className="px-8 mt-[30px] flex flex-col gap-[10px]">
          <p className="text-[16px] text-[#9ca3af] tracking-[0.6px] leading-4">Premium</p>
          <h1 className="text-[48px] font-medium text-[#111827] leading-[48px] m-0">정다영</h1>
        </section>

        {/* Stat Cards */}
        <section className="px-8 mt-[16px] flex gap-3 h-[107px]">
          <div className="flex-1 rounded-[24px] bg-[#f5dd44] p-5 flex flex-col gap-[15px]">
            <p className="text-[16px] text-[#303030] leading-4">남은 시간</p>
            <p className="text-[#303030]">
              <span className="text-[34px] font-medium leading-9">60</span>
              <span className="text-[14px] font-semibold ml-0.5">m</span>
            </p>
          </div>
          <div className="flex-1 rounded-[24px] bg-[#7fdce6] p-5 flex flex-col items-start justify-between">
            <p className="text-[16px] text-[#303030] leading-5">플랜</p>
            <p className="text-[30px] font-medium text-[#303030] leading-9">Free</p>
          </div>
        </section>

        {/* My Info Card */}
        <section className="mx-[35px] mt-[21px] rounded-[30px] bg-[#eaeced] px-5 py-[30px] flex flex-col gap-5">
          <h2 className="text-[22px] font-semibold text-[#202020] m-0">😃 내 정보</h2>
          <div className="flex flex-col gap-5">
            <Field value="정다영" />
            <div className="flex items-center justify-between gap-[18px]">
              <Field placeholder="나이" className="flex-1" />
              <Field placeholder="성별" className="flex-1" />
            </div>
            <Field placeholder="MBTI" />
          </div>
        </section>

        {/* Save Button */}
        <div className="px-[35px] mt-6">
          <button
            type="button"
            className="h-[68px] w-full rounded-full bg-[#ff7f6a] text-[20px] font-semibold text-black hover:bg-[#ff6a52] transition-colors"
          >
            저장
          </button>
        </div>
      </div>
    </main>
  );
}

function Field({
  value,
  placeholder,
  className = "",
}: {
  value?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div
      className={`h-[58px] bg-white rounded-full px-[21px] flex items-center ${className}`}
    >
      {value ? (
        <span className="text-[20px] text-black">{value}</span>
      ) : (
        <span className="text-[20px] text-[#8a8a8a]">{placeholder}</span>
      )}
    </div>
  );
}
