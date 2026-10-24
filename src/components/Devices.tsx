import type { Screenshot } from "@/content";
import { ShotImg } from "./ScreenshotSlot";

/** A real screenshot in a minimal browser window, with the real URL in the bar. */
export function BrowserFrame({
  shot,
  url,
  sizes,
  priority = false,
}: {
  shot: Screenshot;
  url: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="device-browser">
      <div className="device-browser-bar" aria-hidden>
        <span className="device-browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="device-browser-url">{url}</span>
        <span className="w-[2.6rem]" />
      </div>
      <ShotImg shot={shot} sizes={sizes} priority={priority} />
    </div>
  );
}

/** A real Telegram screenshot in a phone, sized in container units so it scales as one object. */
export function PhoneFrame({ shot, sizes }: { shot: Screenshot; sizes: string }) {
  return (
    <div className="device-phone">
      <div className="device-phone-body">
        <div className="device-phone-screen">
          <span className="device-phone-island" aria-hidden />
          <ShotImg shot={shot} sizes={sizes} />
        </div>
      </div>
    </div>
  );
}
