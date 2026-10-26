import Link from "next/link";
import { t } from "@/lib/i18n";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        {t("notFound.title")}
      </h1>
      <p className="mt-4 text-gray-700">{t("notFound.message")}</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark focus:outline-2 focus:outline-offset-2 focus:outline-brand-dark"
      >
        {t("notFound.homeLink")}
      </Link>
    </div>
  );
}
