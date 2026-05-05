import { createFileRoute } from "@tanstack/react-router";
import { Globe, Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "내 정보 — 하트캐치" },
      { name: "description", content: "하트캐치 사용자 프로필 및 플랜 정보 페이지" },
    ],
  }),
});

type ProfileForm = {
  name: string;
  age: string;
  gender: string;
  mbti: string;
};

function ProfilePage() {
  const [form, setForm] = useState<ProfileForm>({
    name: "정다영",
    age: "",
    gender: "",
    mbti: "",
  });

  const update = <K extends keyof ProfileForm>(key: K, value: ProfileForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("이름을 입력해 주세요.");
      return;
    }
    if (form.age && (!/^\d+$/.test(form.age) || Number(form.age) < 1 || Number(form.age) > 120)) {
      toast.error("나이는 1~120 사이의 숫자여야 합니다.");
      return;
    }
    toast.success("저장되었습니다.");
  };

  return (
    <main className="min-h-screen w-full bg-[#f9f9f9] flex justify-center font-pretendard">
      <form onSubmit={handleSave} className="relative w-full max-w-[460px] pb-10">
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
          <h1 className="text-[48px] font-medium text-[#111827] leading-[48px] m-0">
            {form.name || "이름"}
          </h1>
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
            <FieldInput
              aria-label="이름"
              placeholder="이름"
              value={form.name}
              onChange={(v) => update("name", v)}
              maxLength={30}
            />
            <div className="flex items-center justify-between gap-[18px]">
              <FieldInput
                aria-label="나이"
                placeholder="나이"
                value={form.age}
                onChange={(v) => update("age", v.replace(/\D/g, "").slice(0, 3))}
                inputMode="numeric"
                className="flex-1 min-w-0"
              />
              <FieldInput
                aria-label="성별"
                placeholder="성별"
                value={form.gender}
                onChange={(v) => update("gender", v)}
                maxLength={10}
                className="flex-1 min-w-0"
              />
            </div>
            <FieldInput
              aria-label="MBTI"
              placeholder="MBTI"
              value={form.mbti}
              onChange={(v) => update("mbti", v.toUpperCase().slice(0, 4))}
              maxLength={4}
            />
          </div>
        </section>

        {/* Save Button */}
        <div className="px-[35px] mt-6">
          <button
            type="submit"
            className="h-[68px] w-full rounded-full bg-[#ff7f6a] text-[20px] font-semibold text-black hover:bg-[#ff6a52] transition-colors"
          >
            저장
          </button>
        </div>
      </form>
    </main>
  );
}

function FieldInput({
  value,
  onChange,
  placeholder,
  className = "",
  inputMode,
  maxLength,
  ...rest
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  "aria-label"?: string;
}) {
  return (
    <div className={`h-[58px] bg-white rounded-full px-[21px] flex items-center ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        className="w-full bg-transparent border-0 outline-none text-[20px] text-black placeholder:text-[#8a8a8a]"
        {...rest}
      />
    </div>
  );
}
