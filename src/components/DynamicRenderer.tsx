import ComponentRegistry from "./ComponentRegistry";

type ComponentConfig = {
  type: string;
  [key: string]: any;
};

type Props = {
  components: ComponentConfig[];
  t: any;
};

export default function DynamicRenderer({
  components,
  t,
}: Props) {
  return (
    <div className="space-y-6">
      {components.map((component, index) => {
        const DynamicComponent =
          ComponentRegistry[
            component.type as keyof typeof ComponentRegistry
          ] as React.ComponentType<any>;

        if (!DynamicComponent) {
          return (
            <div
              key={index}
              className="bg-red-500 text-white p-4 rounded-lg"
            >
              {t.unknownComponent}: {component.type}
            </div>
          );
        }

        return (
          <DynamicComponent
            key={index}
            {...component}
            t={t}
          />
        );
      })}
    </div>
  );
}