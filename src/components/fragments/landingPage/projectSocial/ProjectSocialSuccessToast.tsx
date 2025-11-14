'use client';

type ProjectSocialSuccessToastProps = {
  visible: boolean;
  message: string;
};

export function ProjectSocialSuccessToast({ visible, message }: ProjectSocialSuccessToastProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-3 rounded-xl bg-slate-900/90 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur">
      <span aria-hidden="true" className="text-base font-bold text-lime-300">
        OK
      </span>
      <p>{message}</p>
    </div>
  );
}
