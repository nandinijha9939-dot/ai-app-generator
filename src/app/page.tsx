import sampleApp from "../config/sample-app.json";
import DynamicRenderer from "../components/DynamicRenderer";
<p className="text-zinc-400 mt-2 mb-8">
  Metadata Driven AI App Generator
</p>

export default function Home() {
  const page = sampleApp.pages[0];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        {sampleApp.appName}
      </h1>

      <DynamicRenderer
        components={page.components}
      />
    </main>
  );
}