"use client";

import { useState } from "react";

import sampleApp from "../config/sample-app.json";
import DynamicRenderer from "../components/DynamicRenderer";
import CSVImporter from "../components/CSVImporter";
import NotificationPanel from "../components/NotificationPanel";
import LanguageSwitcher from "../components/LanguageSwitcher";

import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { translations } from "@/lib/translations";

export default function Home() {
  const page = sampleApp.pages[0];

  const [lang, setLang] =
    useState("en");

  const t =
    translations[
      lang as keyof typeof translations
    ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white px-8 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight">
              {t.title}
            </h1>

            <p className="text-zinc-400 mt-2">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher
              lang={lang}
              setLang={setLang}
            />

            <SignInButton />

            <UserButton />
          </div>
        </div>

        {/* Top Widgets */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <CSVImporter />
          </div>

          <div>
            <NotificationPanel />
          </div>
        </div>

        {/* Runtime UI */}
        <DynamicRenderer
          components={page.components}
        />

      </div>
    </main>
  );
}