import Form from "@/app/ui/mynews/edit-form";
import Breadcrumbs from "@/app/ui/mynews/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  //const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Mynews", href: "/mynews" },
          {
            label: "Edit Mynews",
            href: `/mynews/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
