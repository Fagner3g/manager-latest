import { auth } from "../../../../auth";

import UserSettingsForm from "@/components/auth/user-settings-form";

export default async function Settings() {
  const session = await auth();
  return (
    <div className="h-screen">
      <UserSettingsForm user={session?.user} />
    </div>
  );
}
