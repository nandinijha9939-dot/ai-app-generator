import sampleApp from "../config/sample-app.json";
import DynamicRenderer from "../components/DynamicRenderer";
import CSVImporter from "@/components/CSVImporter";
import {
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  const page = sampleApp.pages[0];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          {sampleApp.appName}
        </h1>

        <div className="flex gap-4 items-center">
          <SignInButton />
          <UserButton />
        </div>
      </div>
      <CSVImporter />
      <DynamicRenderer
        components={page.components}
      />
    </main>
  );
}