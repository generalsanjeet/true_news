import Form from "@/app/ui/mynews/create-form";
import Breadcrumbs from "@/app/ui/mynews/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Mynews", href: "/mynews" },
          {
            label: "Create News",
            href: "/mynews/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
