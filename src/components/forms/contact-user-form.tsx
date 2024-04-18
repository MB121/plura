import { saveActivityLogsNotification, upsertContact } from "@/lib/queries";
import { ContactUserFormSchema } from "@/lib/types";
import { useModal } from "@/providers/modal-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { sub } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loading from "../global/loading";

interface ContactUserFormProps {
  subaccountId: string;
}

const ContactUserForm: React.FC<ContactUserFormProps> = ({ subaccountId }) => {
  const { setClose, data } = useModal();
  const router = useRouter();
  const form = useForm<z.infer<typeof ContactUserFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(ContactUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    if (data.contact) {
      form.reset(data.contact);
    }
  }, [data, form.reset]);

  const isLoading = form.formState.isLoading;

  const handleSubmit = async (
    values: z.infer<typeof ContactUserFormSchema>
  ) => {
    try {
      const response = await upsertContact({
        email: values.email,
        subAccountId: subaccountId,
        name: values.name,
      });

      await saveActivityLogsNotification({
        agencyId: undefined,
        description: `Updated a Contact | ${response?.name}`,
        subaccountId: subaccountId,
      });

      toast({
        title: "Sucess",
        description: "Saved funnel details",
      });
      setClose();
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oppese...",
        description: "Could not Saved funnel details",
      });
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact Info</CardTitle>
        <CardDescription>
          You can assign tickets to contacts and set a value for each contact in
          the ticket.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="mt-4" type="submit" disabled={isLoading}>
              {form.formState.isLoading ? <Loading /> : "Save Contact Details!"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactUserForm;
