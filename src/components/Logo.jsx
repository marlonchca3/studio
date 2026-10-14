import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    "flex shrink-0 items-center gap-3 transition hover:opacity-90",
    className
  );
  const inner = (
    <>
      <Image
        src="/purointernet-logo.svg"
        alt=""
        width={160}
        height={160}
        className={clsx(
          "h-14 w-14 rounded-xl object-contain sm:h-16 sm:w-16",
          invert && "ring-1 ring-white/10"
        )}
      />
      <span
        className={clsx(
          "font-display text-xl font-semibold tracking-normal sm:text-2xl",
          invert ? "text-white" : "text-neutral-950"
        )}
      >
        {children || "PUROINTERNET"}
      </span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={className} {...props}>
      {inner}
    </div>
  );
};

export default Logo;
