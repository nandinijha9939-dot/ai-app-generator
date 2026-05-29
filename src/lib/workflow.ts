export async function runWorkflow(
  resource: string,
  data: any
) {
  console.log(
    `${resource} workflow executed`,
    data
  );

  return true;
}