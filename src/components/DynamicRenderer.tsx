import ComponentRegistry from "./ComponentRegistry";

type ComponentConfig = {
  type: string;
  [key: string]: any;
};

type Props = {
  components: ComponentConfig[];
};

export default function DynamicRenderer({
  components,
}: Props) {
  return (
    <div className="space-y-6">
      {components.map((component, index) => {
        const DynamicComponent =
          ComponentRegistry[
            component.type as keyof typeof ComponentRegistry
          ];

        if (!DynamicComponent) {
          return (
            <div
              key={index}
              className="bg-red-500 text-white p-4 rounded-lg"
            >
              Unknown component: {component.type}
            </div>
          );
        }

        return (
          <DynamicComponent
            key={index}
            {...component}
          />
        );
      })}
    </div>
  );
}